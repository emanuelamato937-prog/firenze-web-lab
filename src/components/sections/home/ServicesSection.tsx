'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Code2,
  Zap,
  RefreshCw,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { buttonVariants } from '@/components/ui/Button'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { useT } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

const SERVICE_ICONS = [Code2, Zap, RefreshCw, Layers]

const SERVICE_COLORS = [
  'bg-fw-cyan/10 text-fw-cyan',
  'bg-fw-navy/10 text-fw-navy dark:bg-fw-navy/30 dark:text-fw-mist',
  'bg-fw-gold/10 text-fw-gold',
  'bg-fw-cyan/10 text-fw-cyan',
] as const

// Gradient accent bar at the top of each card
const SERVICE_ACCENT_GRADIENTS = [
  'linear-gradient(to right, #29ABE2, #00C2E8)',
  'linear-gradient(to right, #1A3A6B, #2C4A6A)',
  'linear-gradient(to right, #D4A843, #F0C96A)',
  'linear-gradient(to right, #7C3AED, #29ABE2)',
]

export function ServicesSection() {
  const { t } = useT()
  const { services: s } = t

  return (
    <Section id="services" variant="light" spacing="lg" className="border-t border-fw-cloud/70 dark:border-fw-slate/30">
      <Container>
        <SectionHeader
          eyebrow={s.eyebrow}
          heading={s.heading}
          description={s.description}
          centered={false}
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {s.items.map(({ title, description, features }, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col rounded-2xl border border-fw-cloud bg-white p-6 shadow-sm transition-shadow hover:shadow-brand dark:border-fw-slate dark:bg-fw-deep"
              >
                {/* Colored accent bar — bleeds to card edges */}
                <div
                  className="mb-5 h-[3px] -mx-6 -mt-6 rounded-t-2xl"
                  style={{ background: SERVICE_ACCENT_GRADIENTS[i] }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className={cn(
                    'mb-5 flex h-12 w-12 items-center justify-center rounded-xl',
                    SERVICE_COLORS[i]
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-fw-navy dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fw-steel dark:text-fw-mist">
                  {description}
                </p>

                {/* Feature list */}
                <ul className="mt-5 space-y-2 border-t border-fw-cloud pt-4 dark:border-fw-slate/60" role="list">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-fw-cyan"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-fw-slate dark:text-fw-mist">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: 'outline', size: 'md' }))}
          >
            {s.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
