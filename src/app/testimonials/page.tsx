import { createMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'

export const metadata = createMetadata({
  title: 'Testimonials',
  description:
    'What clients say about working with Firenze Web Lab. Real feedback from businesses that trusted us with their digital presence.',
})

export default function TestimonialsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-3xl py-16 text-center">
          <Badge variant="cyan" size="md" className="mb-6">
            Coming soon
          </Badge>
          <h1 className="font-display text-5xl font-bold text-fw-navy dark:text-white">
            Testimonials
          </h1>
          <p className="mt-6 text-lg text-fw-steel">
            Client feedback and reviews — coming once real testimonials are available.
          </p>
        </div>
      </Container>
    </Section>
  )
}
