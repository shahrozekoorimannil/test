"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uProgress;
  uniform vec2 uResolution;
  uniform vec3 uColor;
  uniform float uSpread;
  varying vec2 vUv;

  float Hash(vec2 p) {
    vec3 p2 = vec3(p.xy, 1.0);
    return fract(sin(dot(p2, vec3(37.1, 61.7, 12.4))) * 3758.5453123);
  }

  float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f *= f * (3.0 - 2.0 * f);
    return mix(
      mix(Hash(i + vec2(0.0, 0.0)), Hash(i + vec2(1.0, 0.0)), f.x),
      mix(Hash(i + vec2(0.0, 1.0)), Hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    v += noise(p * 1.0) * 0.5;
    v += noise(p * 2.0) * 0.25;
    v += noise(p * 4.0) * 0.125;
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 centeredUv = (uv - 0.5) * vec2(aspect, 1.0);
    
    float dissolveEdge = uv.y - uProgress * 1.2;
    float noiseValue = fbm(centeredUv * 15.0);
    float d = dissolveEdge + noiseValue * uSpread;
    
    float pixelSize = 1.0 / uResolution.y;
    float alpha = 1.0 - smoothstep(-pixelSize, pixelSize, d);
    
    gl_FragColor = vec4(uColor, alpha);
  }
`;

const CONFIG = {
  color: "#ebf5df",
  spread: 0.5,
  speed: 1,
};

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0.89, g: 0.89, b: 0.89 };
}

export default function WebGLHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  // The text to split and animate
  const titleText = "There's a place not far from here the maps won't show, known to some as the Ironhill.";
  const words = titleText.split(" ");

  useEffect(() => {
    if (!heroRef.current || !canvasRef.current || !contentRef.current) return;

    // 1. Setup Lenis
    const lenis = new Lenis();
    
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    
    lenis.on('scroll', ScrollTrigger.update);

    // 2. Setup Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
    });

    const heroEl = heroRef.current;
    
    function resize() {
      const width = heroEl.offsetWidth;
      const height = heroEl.offsetHeight;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.uResolution.value.set(width, height);
    }

    const rgb = hexToRgb(CONFIG.color);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uProgress: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(heroEl.offsetWidth, heroEl.offsetHeight),
        },
        uColor: { value: new THREE.Vector3(rgb.r, rgb.g, rgb.b) },
        uSpread: { value: CONFIG.spread },
      },
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let scrollProgress = 0;
    let animateId: number;
    
    function animate() {
      material.uniforms.uProgress.value = scrollProgress;
      renderer.render(scene, camera);
      animateId = requestAnimationFrame(animate);
    }
    
    animate();
    resize();
    
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    lenis.on('scroll', ({ scroll }: any) => {
      const heroHeight = heroEl.offsetHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = heroHeight - windowHeight;
      scrollProgress = Math.min((scroll / maxScroll) * CONFIG.speed, 1.1);
    });

    // 3. Setup GSAP Text Reveal Animation
    const wordElements = wordsRef.current.filter(Boolean);
    gsap.set(wordElements, { opacity: 0 });

    ScrollTrigger.create({
      trigger: contentRef.current,
      start: 'top 25%',
      end: 'bottom 100%',
      onUpdate: (self) => {
        const progress = self.progress;
        const totalWords = wordElements.length;

        wordElements.forEach((word, index) => {
          const wordProgress = index / totalWords;
          const nextWordProgress = (index + 1) / totalWords;

          let opacity = 0.1;

          if (progress >= nextWordProgress) {
            opacity = 1;
          } else if (progress >= wordProgress) {
            const fadeProgress =
              (progress - wordProgress) / (nextWordProgress - wordProgress);
            opacity = fadeProgress;
          }

          gsap.to(word, {
            opacity: opacity,
            duration: 0.1,
            overwrite: true,
          });
        });
      },
    });

    // 4. Parallax Twigs (Left and Right)
    gsap.to('.hero__twig--left', {
      y: -2000,
      ease: 'none',
      scrollTrigger: {
        trigger: heroEl,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    
    gsap.to('.hero__twig--right', {
      y: -1500, // Added slightly different parallax for right twig
      ease: 'none',
      scrollTrigger: {
        trigger: heroEl,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', onResize);
      lenis.destroy();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative text-[#fec81d] overflow-hidden w-full h-[185vh]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/img/hero-bg.webp" 
          alt="Hero Background" 
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* WebGL Canvas Overlay */}
      <canvas 
        ref={canvasRef} 
        className="absolute bottom-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Parallax Twigs */}
      <div className="absolute z-[5] w-full h-full pointer-events-none">
        <div className="hero__twig--left absolute w-[700px] bottom-[20%] left-0">
          <Image 
            src="/img/mask-1.webp" 
            alt="Mask 1" 
            width={700} 
            height={700}
            className="w-full h-auto"
          />
        </div>
        <div className="hero__twig--right absolute w-[800px] bottom-[10%] right-0">
          <Image 
            src="/img/mask-2.webp" 
            alt="Mask 2" 
            width={800} 
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        <div className="absolute flex flex-col justify-center items-center text-center w-full h-[100vh]">
          <h1 className="text-[120px] lg:text-[240px] font-extralight leading-[0.9] tracking-[2px] m-0 text-[#fec81d] mix-blend-difference">
            TECHNO
          </h1>
          <p className="uppercase text-sm lg:text-base font-medium tracking-[2px] m-0 font-sans mt-4 text-[#fec81d] mix-blend-difference">
            Premium Showroom Excellence
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className="absolute bottom-0 flex justify-center items-center text-center w-full h-[125vh] px-4"
        >
          <h2 className="text-4xl lg:text-6xl uppercase font-extralight text-[#0f0f0f] max-w-[1400px] m-0 leading-tight">
            {words.map((word, i) => (
              <span 
                key={i} 
                ref={(el) => { wordsRef.current[i] = el; }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
