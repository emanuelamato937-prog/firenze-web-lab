'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

const TESTIMONIALS = [
  {
    initials: 'MR',
    name: 'Marco Rossi',
    role: 'CEO',
    company: 'TechVenture Milano',
    quote:
      'Exceptional work. The new site launched with a perfect Lighthouse score and our conversion rate jumped 40% in the first month. Worth every euro.',
    avatarClass: 'gradient-brand',
    rating: 5,
  },
  {
    initials: 'SK',
    name: 'Sarah Kline',
    role: 'Founder',
    company: 'Bloom Studio',
    quote:
      "Working with Firenze Web Lab felt like having an in-house team. They understood our brand immediately and delivered beyond expectations.",
    avatarClass: 'gradient-gold',
    rating: 5,
  },
  {
    initials: 'LM',
    name: 'Luca Marchetti',
    role: 'Director',
    company: 'Meridiana Luxury',
    quote:
      "The attention to detail is remarkable. The site is fast, beautiful, and our clients constantly comment on how premium the experience feels.",
    avatarClass: 'gradient-dark',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-fw-gold text-fw-gold"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <Section id="testimonials" variant="light" spacing="lg">
      <Container>
        <SectionHeader
          eyebrow="Client Stories"
          heading="Words from happy clients"
          description="Real results from real businesses. Here's what it's like to work with Firenze Web Lab."
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map(
            ({ initials, name, role, company, quote, avatarClass, rating }) => (
              <motion.figure
                key={name}
                variants={fadeInUp}
                className="flex flex-col rounded-2xl border border-fw-cloud bg-white p-6 shadow-sm dark:border-fw-slate dark:bg-fw-deep"
              >
                {/* Quote icon */}
                <Quote
                  className="mb-4 h-8 w-8 text-fw-cyan/30"
                  aria-hidden="true"
                />

                {/* Stars */}
                <StarRating count={rating} />

                {/* Quote text */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fw-steel dark:text-fw-mist">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="mt-6 flex items-center gap-3">
                  <div
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white',
                      avatarClass
                    )}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold text-fw-navy dark:text-white">
                      {name}
                    </div>
                    <div className="text-xs text-fw-steel">
                      {role} · {company}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            )
          )}
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
            href="/testimonials"
            className={cn(buttonVariants({ variant: 'ghost', size: 'md' }))}
          >
            Read More Stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
