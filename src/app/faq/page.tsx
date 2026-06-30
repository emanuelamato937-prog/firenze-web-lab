import { createMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'

export const metadata = createMetadata({
  title: 'FAQ',
  description:
    'Frequently asked questions about working with Firenze Web Lab. Pricing, timeline, process, and technical questions answered.',
})

export default function FAQPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-3xl py-16 text-center">
          <Badge variant="cyan" size="md" className="mb-6">
            Coming soon
          </Badge>
          <h1 className="font-display text-5xl font-bold text-fw-navy dark:text-white">
            FAQ
          </h1>
          <p className="mt-6 text-lg text-fw-steel">
            Common questions about pricing, timelines, and working together — coming in the next sprint.
          </p>
        </div>
      </Container>
    </Section>
  )
}
