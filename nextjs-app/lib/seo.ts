import type { Metadata } from 'next'

export const siteUrl = 'https://ieee-pune-blockchain-group.vercel.app'

export const siteName = 'IEEE Blockchain Pune Local Group'

export const homeTitle = 'IEEE Blockchain Pune Local Group | Official Community Website'

export const homeDescription =
  'Explore IEEE Blockchain Pune Local Group, part of the IEEE Blockchain Technical Community. Discover blockchain events, workshops, research and conferences in Pune.'

const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${siteName}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: 'website',
    },
    twitter: {
      title: fullTitle,
      description,
    },
  }
}

export function organizationGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteName,
        alternateName: ['IEEE Pune Blockchain Group', 'IEEE Blockchain Pune', 'IEEE Pune Blockchain'],
        url: siteUrl,
        logo: `${siteUrl}/images/brand/ieee-pune-blockchain-group.png`,
        description: homeDescription,
        areaServed: {
          '@type': 'City',
          name: 'Pune',
          containedInPlace: { '@type': 'AdministrativeArea', name: 'Maharashtra, India' },
        },
        parentOrganization: {
          '@type': 'Organization',
          name: 'IEEE Blockchain Technical Community',
          url: 'https://blockchain.ieee.org/',
        },
        sameAs: ['https://blockchain.ieee.org/communities/'],
        employee: {
          '@type': 'Person',
          name: 'Prof. Dr. Sonali D. Patil',
          jobTitle: 'Chair, IEEE Blockchain Pune Local Group',
          sameAs: 'https://www.linkedin.com/in/dr-sonali-d-patil-9413681b',
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: siteName,
        inLanguage: 'en-IN',
        publisher: { '@id': organizationId },
      },
    ],
  }
}

export function breadcrumbGraph(label: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: label, item: `${siteUrl}${path}` },
    ],
  }
}
