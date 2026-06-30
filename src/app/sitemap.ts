import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }> = [
    { path: '',                changeFrequency: 'weekly',  priority: 1.0 },
    { path: '/about',          changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services',       changeFrequency: 'monthly', priority: 0.9 },
    { path: '/portfolio',      changeFrequency: 'weekly',  priority: 0.9 },
    { path: '/process',        changeFrequency: 'monthly', priority: 0.7 },
    { path: '/testimonials',   changeFrequency: 'monthly', priority: 0.6 },
    { path: '/faq',            changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact',        changeFrequency: 'yearly',  priority: 0.8 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
