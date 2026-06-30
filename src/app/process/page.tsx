import { createMetadata } from '@/lib/metadata'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { ProcessPageContent } from '@/components/pages/ProcessPageContent'

export const metadata = createMetadata({
  title: 'Approach',
  description:
    'Discover the Firenze Web Lab process: from discovery and strategy to design, development, and launch. A clear, proven method for every project.',
})

export default function ProcessPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-3xl py-16 text-center">
          <ProcessPageContent />
        </div>
      </Container>
    </Section>
  )
}
