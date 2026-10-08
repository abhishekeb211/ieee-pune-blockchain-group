import activities from '../data/activities.json'
import { Activity } from '../components/activity'

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
]

export function allActivities(): Activity[] {
  const groups = [
    activities.groupPrograms,
    activities.outreach,
    activities.media,
    activities.publications,
    activities.community,
  ] as Activity[][]
  return [...groups.flat(), activities.milestone as Activity]
}

export function activityBySlug(slug: string) {
  return allActivities().find((activity) => activity.id === slug)
}

export function eventDateRange(dateLabel: string) {
  const text = dateLabel.toLowerCase()
  const yearMatch = text.match(/\b(?:19|20)\d{2}\b/)
  const monthIndex = MONTHS.findIndex((name) => new RegExp(`\\b${name}\\b`).test(text))
  if (!yearMatch || monthIndex < 0) return null
  const year = yearMatch[0]
  const month = String(monthIndex + 1).padStart(2, '0')
  const beforeMonth = text.slice(0, text.indexOf(MONTHS[monthIndex]))
  const days = (beforeMonth.match(/\b\d{1,2}\b/g) || [])
    .map((value) => Number(value))
    .filter((day) => day >= 1 && day <= 31)
  if (days.length === 0) return { start: `${year}-${month}` }
  const startDay = String(Math.min(...days)).padStart(2, '0')
  const endDay = String(Math.max(...days)).padStart(2, '0')
  const start = `${year}-${month}-${startDay}`
  return startDay === endDay ? { start } : { start, end: `${year}-${month}-${endDay}` }
}
