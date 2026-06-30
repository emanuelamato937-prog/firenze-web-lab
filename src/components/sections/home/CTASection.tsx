'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function CTASection() {
  return (
    <Section id="cta" variant="gradient" spacing="lg">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-xs font-heading font-semibold uppercase tracking-widest text-white/60"
          >
            Let&apos;s build something great
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Ready to build something{' '}
            <span className="text-fw-gold">extraordinary</span>?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Every great project starts with a conversation. Tell me about your
            vision and let&apos;s turn it into a website that performs.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: 'gold', size: 'lg' }))}
            >
              Let&apos;s Talk About Your Project
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'border-white/30 text-white hover:border-white hover:bg-white/10'
              )}
            >
              View Portfolio First
            </Link>
          </motion.div>

          {/* Response time note */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 flex items-center gap-2 text-sm text-white/50"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Typically respond within 24 hours · Free initial consultation
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
