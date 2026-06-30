import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Case Study: ${slug.replace(/-/g, ' ')} | Firenze Web Lab`,
    description: 'A detailed case study from Firenze Web Lab.',
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params

  if (!slug) notFound()

  return (
    <Section spacing="lg">
      <Container narrow>
        <div className="py-16">
          <Badge variant="cyan" size="md" className="mb-6">
            Case Study
          </Badge>
          <h1 className="font-display text-4xl font-bold text-fw-navy dark:text-white capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>
          <p className="mt-6 text-lg text-fw-steel">
            Individual case study pages will be populated in the next sprint.
          </p>
        </div>
      </Container>
    </Section>
  )
}
