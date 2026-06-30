'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

const PROJECTS = [
  {
    title: 'LuxeMarket',
    category: 'E-Commerce',
    description:
      'Premium fashion e-commerce store with curated product discovery, seamless checkout, and personalised recommendations.',
    result: '+180% Conversion Rate',
    bgClass: 'gradient-gold',
    labelClass: 'text-fw-ink',
    slug: 'luxemarket',
  },
  {
    title: 'Pulse Dashboard',
    category: 'SaaS Platform',
    description:
      'Real-time analytics dashboard for a B2B SaaS product. Data-heavy UI engineered for clarity and speed.',
    result: '2.1s Load Time',
    bgClass: 'gradient-dark',
    labelClass: 'text-white',
    slug: 'pulse-dashboard',
  },
  {
    title: 'Artisan Collective',
    category: 'Brand Website',
    description:
      'Portfolio and marketplace for artisan craftspeople. Rich visual storytelling with optimised image delivery.',
    result: '100 Lighthouse Score',
    bgClass: 'gradient-brand',
    labelClass: 'text-white',
    slug: 'artisan-collective',
  },
]

export function PortfolioSection() {
  return (
    <Section id="portfolio" variant="light" spacing="lg">
      <Container>
        <SectionHeader
          eyebrow="Featured Work"
          heading="Projects built to perform"
          description="A selection of recent work that demonstrates the craft, strategy, and measurable outcomes I deliver."
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map(({ title, category, description, result, bgClass, labelClass, slug }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-fw-cloud bg-white shadow-sm transition-shadow hover:shadow-brand dark:border-fw-slate dark:bg-fw-deep"
            >
              {/* Gradient image placeholder */}
              <div className={cn('relative h-48 w-full', bgClass)}>
                {/* Category badge */}
                <div className="absolute left-4 top-4">
                  <span
                    className={cn(
                      'rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium backdrop-blur-sm',
                      labelClass
                    )}
                  >
                    {category}
                  </span>
                </div>

                {/* View link icon — appears on hover */}
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className={cn('h-4 w-4', labelClass)} aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-fw-navy dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fw-steel dark:text-fw-mist">
                  {description}
                </p>

                {/* Result metric */}
                <div className="mt-5 flex items-center gap-2 rounded-lg bg-fw-gold/10 px-4 py-2.5">
                  <TrendingUp
                    className="h-4 w-4 shrink-0 text-fw-gold"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-fw-gold">{result}</span>
                </div>

                {/* Case study link */}
                <Link
                  href={`/portfolio/${slug}`}
                  className="mt-4 flex items-center gap-1.5 text-sm font-medium text-fw-cyan transition-gap hover:gap-2.5"
                >
                  View Case Study
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
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
            href="/portfolio"
            className={cn(buttonVariants({ variant: 'outline', size: 'md' }))}
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
