import type { LightboxData } from './Lightbox'

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

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
]

export function eventTime(dateLabel: string | null | undefined): number {
  if (!dateLabel) return 0
  const text = dateLabel.toLowerCase()
  const yearMatch = text.match(/\b(?:19|20)\d{2}\b/)
  if (!yearMatch) return 0
  const year = Number(yearMatch[0])
  const monthIndex = MONTHS.findIndex((name) => new RegExp(`\\b${name}\\b`).test(text))
  if (monthIndex < 0) return year * 10000
  const monthName = MONTHS[monthIndex]
  const beforeMonth = text.slice(0, text.indexOf(monthName))
  const dayMatches = beforeMonth.match(/\b\d{1,2}\b/g) || []
  const days = dayMatches
    .map((match) => Number(match))
    .filter((day) => day >= 1 && day <= 31)
  const day = days.length > 0 ? Math.max(...days) : 0
  return year * 10000 + (monthIndex + 1) * 100 + day
}

export function byLatest<T>(dateOf: (item: T) => string | null | undefined) {
  return (a: T, b: T) => eventTime(dateOf(b)) - eventTime(dateOf(a))
}
