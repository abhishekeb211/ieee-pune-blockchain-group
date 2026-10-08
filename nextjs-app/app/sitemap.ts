import type { MetadataRoute } from 'next'
import { allActivities } from '@/lib/activities'
import { siteUrl } from '@/lib/seo'

const paths = ['/', '/about', '/activities', '/gallery', '/lab', '/join']

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((path) => ({
    url: path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`,
  }))
  const records = allActivities().map((activity) => ({
    url: `${siteUrl}/activities/${activity.id}`,
  }))
  return [...pages, ...records]
}
