import { createMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'

export const metadata = createMetadata({
  title: 'Portfolio',
  description:
    'A curated selection of web development and design projects. View case studies, results, and the technology behind each project.',
})

export default function PortfolioPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-3xl py-16 text-center">
          <Badge variant="cyan" size="md" className="mb-6">
            Coming soon
          </Badge>
          <h1 className="font-display text-5xl font-bold text-fw-navy dark:text-white">
            Portfolio
          </h1>
          <p className="mt-6 text-lg text-fw-steel">
            Case studies and featured projects — coming in the next sprint.
          </p>
        </div>
      </Container>
    </Section>
  )
}
