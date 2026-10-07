import { LightboxData } from './Lightbox'

export interface ActivityImage {
  src: string
  caption: string
  alt: string
}

export interface ActivityLink {
  label: string
  url: string
}

export interface Activity {
  id: string
  title: string
  dateLabel: string
  year: string | null
  category: string
  classification: string
  role: string
  organizers: string
  association: string
  venue: string
  summary: string
  topics: string[]
  people: string[]
  images: ActivityImage[]
  externalLink: ActivityLink | null
  sourcePost: string
}

export function badgeClass(category: string) {
  if (category === 'Flagship') return 'badge-symposium'
  if (category === 'FDP' || category === 'STTP' || category === 'Publication') return 'badge-fdp'
  if (category === 'Conference role') return 'badge-conference'
  if (category === 'Community opportunity' || category === 'Podcast') return 'badge-hackathon'
  return 'badge-expert'
}

export function activityToLightbox(activity: Activity, image: ActivityImage): LightboxData {
  return {
    src: image.src,
    title: activity.title,
    meta: `${image.caption} · ${activity.dateLabel}`,
    source: activity.externalLink?.url,
  }
}
