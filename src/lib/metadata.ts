import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Firenze Web Lab',
  tagline: 'Crafted for performance. Built to convert.',
  description:
    'Premium freelance web development. Firenze Web Lab crafts fast, beautiful, and conversion-optimized websites for businesses that understand design is strategy.',
  url: 'https://firenzweblab.com',
  ogImage: '/og/default.png',
  locale: 'en_US',
  twitter: '@firenzeweblab',
  email: 'firenzeweblab@gmail.com',
  phone: '+39 3770936357',
  whatsapp: 'https://wa.me/393770936357',
  location: 'Florence, Italy',
}

export function createMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`

  return {
    title: resolvedTitle,
    description: description ?? siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: resolvedTitle,
      description: description ?? siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: description ?? siteConfig.description,
      images: [image ?? siteConfig.ogImage],
      creator: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },
  }
}
