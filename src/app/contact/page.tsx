import { createMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { ContactPageHeader } from '@/components/pages/ContactPageHeader'
import { ContactSection } from '@/components/sections/home/ContactSection'

export const metadata = createMetadata({
  title: "Let's Talk",
  description:
    'Ready to start a project? Get in touch with Firenze Web Lab. Typically respond within 24 hours.',
})

export default function ContactPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center">
            <ContactPageHeader />
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  )
}
