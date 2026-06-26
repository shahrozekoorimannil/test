import type { Metadata } from "next";
import { Playfair_Display, Montserrat, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techno Designer Fans & Lights | Malappuram",
  description: "Premium designer fans, smart BLDC fans, and luxury lighting showroom in Malappuram, Kerala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", playfair.variable, montserrat.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
