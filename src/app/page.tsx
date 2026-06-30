import { createMetadata, siteConfig } from '@/lib/metadata'
import { HeroSection }      from '@/components/sections/home/HeroSection'
import { SectionPreviews }  from '@/components/sections/home/SectionPreviews'
import { AboutPreview }     from '@/components/sections/home/AboutPreview'
import { ServicesSection }  from '@/components/sections/home/ServicesSection'
import { ProcessPreview }   from '@/components/sections/home/ProcessPreview'
import { ContactSection }   from '@/components/sections/home/ContactSection'

export const metadata = createMetadata({})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Florence',
        addressCountry: 'IT',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: siteConfig.email,
        contactType: 'customer service',
      },
      serviceType: [
        'Web Design',
        'Web Development',
        'Landing Pages',
        'SEO Optimisation',
        'Performance Optimisation',
      ],
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      areaServed: 'Worldwide',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <SectionPreviews />
      <AboutPreview />
      <ServicesSection />
      <ProcessPreview />
      <ContactSection />
    </>
  )
}
