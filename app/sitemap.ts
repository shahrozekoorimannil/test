import { MetadataRoute } from 'next'
import { dummyProducts, dummyCategories, dummyBrands } from '@/data/dummy'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://technodesigner.com'

  const routes = [
    '',
    '/products',
    '/about',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const localSeoPages = [
    '/atomberg-fans-malappuram',
    '/smart-bldc-fans-malappuram',
    '/designer-fans-malappuram',
    '/premium-lighting-malappuram',
    '/chandeliers-malappuram',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const productRoutes = dummyProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const categoryRoutes = dummyCategories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const brandRoutes = dummyBrands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...localSeoPages, ...productRoutes, ...categoryRoutes, ...brandRoutes]
}
