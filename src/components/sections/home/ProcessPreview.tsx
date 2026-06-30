'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code2, Zap, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { useT } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

const STEP_ICONS = [Lightbulb, Palette, Code2, Zap]
const STEP_NUMBERS = ['01', '02', '03', '04']

export function ProcessPreview() {
  const { t } = useT()
  const { process: p } = t

  return (
    <Section id="process" variant="dark" spacing="lg">
      <Container>
        <SectionHeader
          eyebrow={p.eyebrow}
          heading={p.heading}
          description={p.description}
          light
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
          {p.steps.map(({ title, description }, i) => {
            const Icon = STEP_ICONS[i]
            const number = STEP_NUMBERS[i]
            return (
              <motion.div
                key={number}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-fw-cyan/30 hover:bg-white/[0.07]"
              >
                {/* Large background number */}
                <div
                  className="pointer-events-none absolute right-4 top-2 select-none font-display text-8xl font-black text-white/5 transition-all group-hover:text-fw-cyan/10"
                  aria-hidden="true"
                >
                  {number}
                </div>

                <div className="relative">
                  {/* Step number + icon */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-7 min-w-[2.75rem] items-center justify-center rounded-full border border-fw-cyan/25 bg-fw-cyan/10 px-2 font-display text-xs font-bold text-fw-cyan">
                      {number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fw-cyan/10">
                      <Icon className="h-5 w-5 text-fw-cyan" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mb-4 h-px bg-white/[0.07]" />

                  <h3 className="font-heading text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fw-mist">
                    {description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/process"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'md' }),
              'border-white/25 text-white hover:border-fw-cyan hover:bg-fw-cyan hover:text-white'
            )}
          >
            {p.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
