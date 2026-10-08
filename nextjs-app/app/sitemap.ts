import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

const paths = ['/', '/about', '/activities', '/gallery', '/lab', '/join']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return paths.map((path) => ({
    url: path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`,
    lastModified,
  }))
}
