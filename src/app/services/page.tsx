import { createMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { ServicesPageContent } from '@/components/pages/ServicesPageContent'

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Web design, development, e-commerce, and SEO services. Full-stack freelance web solutions tailored to your business goals.',
})

export default function ServicesPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-3xl py-16 text-center">
          <ServicesPageContent />
        </div>
      </Container>
    </Section>
  )
}
