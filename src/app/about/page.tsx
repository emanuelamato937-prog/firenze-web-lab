import { createMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { AboutPageContent } from '@/components/pages/AboutPageContent'

export const metadata = createMetadata({
  title: 'Studio',
  description:
    'Learn about the story, values, and skills behind Firenze Web Lab. A freelance developer combining Florentine craft with modern digital precision.',
})

export default function AboutPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-3xl py-16 text-center">
          <AboutPageContent />
        </div>
      </Container>
    </Section>
  )
}
