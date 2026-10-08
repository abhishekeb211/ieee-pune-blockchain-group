import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import { activityBySlug, allActivities, eventDateRange } from '@/lib/activities'
import { siteName, siteUrl } from '@/lib/seo'

export function generateStaticParams() {
  return allActivities().map((activity) => ({ slug: activity.id }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const activity = activityBySlug(params.slug)
  if (!activity) return {}
  const path = `/activities/${activity.id}`
  const description = activity.summary
  return {
    title: activity.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${activity.title} | ${siteName}`,
      description,
      url: path,
      type: 'article',
      images: activity.images[0] ? [{ url: activity.images[0].src, alt: activity.images[0].alt }] : undefined,
    },
  }
}

function eventGraph(activity: NonNullable<ReturnType<typeof activityBySlug>>) {
  const dates = eventDateRange(activity.dateLabel)
  if (!dates) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: activity.title,
    description: activity.summary,
    startDate: dates.start,
    ...(dates.end ? { endDate: dates.end } : {}),
    eventAttendanceMode: activity.venue.toLowerCase().includes('online')
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: activity.venue,
    },
    organizer: {
      '@type': 'Organization',
      name: activity.organizers,
    },
    image: activity.images.map((image) => `${siteUrl}${image.src}`),
    url: `${siteUrl}/activities/${activity.id}`,
  }
}

export default function ActivityPage({ params }: { params: { slug: string } }) {
  const activity = activityBySlug(params.slug)
  if (!activity) notFound()
  const graph = eventGraph(activity)
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Events', item: `${siteUrl}/activities` },
      { '@type': 'ListItem', position: 3, name: activity.title, item: `${siteUrl}/activities/${activity.id}` },
    ],
  }

  return (
    <main className="section-padding">
      <JsonLd data={crumbs} />
      {graph && <JsonLd data={graph} />}
      <article className="section-container">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#007175]">{activity.classification}</p>
        <h1 className="page-title mt-3">{activity.title}</h1>
        <p className="mt-4 text-base text-[#333333]">{activity.dateLabel} · {activity.venue}</p>
        <p className="measure mt-4 text-base leading-relaxed text-[#333333]">{activity.summary}</p>
        <dl className="mt-6 space-y-2 text-base text-[#333333]">
          <div><dt className="inline font-semibold">Role recorded: </dt><dd className="inline">{activity.role}</dd></div>
          <div><dt className="inline font-semibold">Organizer: </dt><dd className="inline">{activity.organizers}</dd></div>
          <div><dt className="inline font-semibold">Association: </dt><dd className="inline">{activity.association}</dd></div>
        </dl>
        {activity.images.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {activity.images.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-xl border border-[#C9EBE8] bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-contain object-center" />
                </div>
                <figcaption className="px-3 py-2 text-sm text-slate-600">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
        <p className="mt-8">
          <Link href="/activities" className="text-sm font-semibold text-[#007175] hover:underline">All events</Link>
        </p>
      </article>
    </main>
  )
}
