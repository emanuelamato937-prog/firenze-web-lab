'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { buttonVariants } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { staggerContainer, slideInLeft, slideInRight, fadeInUp } from '@/lib/animations'
import { useT } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

export function AboutPreview() {
  const { t } = useT()
  const { aboutSection: a } = t

  return (
    <Section id="about" variant="light" spacing="lg" className="border-t border-fw-cloud/70 dark:border-fw-slate/30">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="cyan" size="md" className="mb-4">
                {a.badge}
              </Badge>
            </motion.div>

            <motion.h2
              variants={slideInLeft}
              className="font-display text-3xl font-bold leading-tight text-fw-navy dark:text-white sm:text-4xl md:text-5xl"
            >
              {a.heading}{' '}
              <span className="text-gradient-brand">{a.headingGradient}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg leading-relaxed text-fw-steel dark:text-fw-mist"
            >
              {a.p1}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-base leading-relaxed text-fw-steel dark:text-fw-mist"
            >
              {a.p2}
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href="/about"
                className={cn(buttonVariants({ variant: 'secondary', size: 'md' }))}
              >
                {a.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Philosophy card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative lg:pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.015, y: -3 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
            <div className="relative overflow-hidden rounded-2xl gradient-brand p-8 text-white shadow-[0_8px_40px_rgb(41_171_226/0.25)]">
              {/* Decorative circles */}
              <div
                className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="mb-6 text-xs font-heading font-semibold uppercase tracking-widest text-fw-cyan/80">
                  {a.philosophy.title}
                </p>

                <ul className="space-y-5">
                  {a.philosophy.values.map(({ label, detail }, i) => (
                    <li
                      key={label}
                      className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex items-baseline gap-2.5">
                        <span className="shrink-0 font-display text-[10px] font-bold tracking-[0.2em] text-fw-cyan/50">
                          0{i + 1}
                        </span>
                        <p className="font-display text-lg font-semibold text-white">{label}</p>
                      </div>
                      <p className="mt-1.5 pl-[1.6rem] text-sm leading-relaxed text-fw-mist">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
