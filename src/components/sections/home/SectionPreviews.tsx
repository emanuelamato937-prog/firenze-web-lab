'use client'

import { motion } from 'framer-motion'
import { ArrowRight, User, Code2, GitBranch, MessageCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { useT } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

const PREVIEW_META: Record<string, {
  icon:      React.ElementType
  iconClass: string
}> = {
  about:    { icon: User,           iconClass: 'bg-fw-cyan/10 text-fw-cyan' },
  services: { icon: Code2,          iconClass: 'bg-fw-violet/10 text-fw-violet' },
  process:  { icon: GitBranch,      iconClass: 'bg-fw-gold/10 text-fw-gold' },
  contact:  { icon: MessageCircle,  iconClass: 'bg-fw-cyan/10 text-fw-cyan' },
}

export function SectionPreviews() {
  const { t } = useT()

  const PREVIEWS = [
    {
      id:      'about',
      badge:   t.previews.about.badge,
      heading: t.previews.about.heading,
      summary: t.previews.about.summary,
      cta:     t.previews.about.cta,
    },
    {
      id:      'services',
      badge:   t.previews.services.badge,
      heading: t.previews.services.heading,
      summary: t.previews.services.summary,
      cta:     t.previews.services.cta,
    },
    {
      id:      'process',
      badge:   t.previews.process.badge,
      heading: t.previews.process.heading,
      summary: t.previews.process.summary,
      cta:     t.previews.process.cta,
    },
    {
      id:      'contact',
      badge:   t.previews.contact.badge,
      heading: t.previews.contact.heading,
      summary: t.previews.contact.summary,
      cta:     t.previews.contact.cta,
    },
  ]

  return (
    <Section variant="light" spacing="lg">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {PREVIEWS.map(({ id, badge, heading, summary, cta }) => {
            const meta   = PREVIEW_META[id]
            const Icon   = meta.icon
            return (
              <motion.div
                key={id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col rounded-2xl border border-fw-cloud bg-white p-6 shadow-sm transition-shadow hover:shadow-brand dark:border-fw-slate dark:bg-fw-deep"
              >
                {/* Top row: Badge left, icon right */}
                <div className="mb-5 flex items-center justify-between">
                  <Badge variant="cyan" size="md">
                    {badge}
                  </Badge>
                  <div
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg',
                      meta.iconClass
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-heading text-lg font-semibold text-fw-navy dark:text-white">
                  {heading}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-fw-steel dark:text-fw-mist">
                  {summary}
                </p>

                <a
                  href={`#${id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-fw-cyan transition-all hover:text-fw-cyan-light hover:gap-2.5"
                >
                  <span className="link-underline-grow">{cta}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
