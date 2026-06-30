'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    question: 'How much does a typical project cost?',
    answer:
      'Projects vary based on scope and complexity. A focused landing page typically starts around €1,500, while a full custom website ranges from €3,500 to €12,000+. Every project begins with a free discovery call to scope it properly and give you an accurate quote with no surprises.',
  },
  {
    question: 'How long does a website project take?',
    answer:
      'Timeline depends on scope: a landing page can launch in 2–3 weeks, while a multi-page website with custom functionality typically takes 6–10 weeks. My structured process means you always know exactly where we are and what comes next.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Absolutely. While I\'m based in Florence, Italy, I work with clients across Europe, North America, and beyond. All project management, communication, and delivery is handled remotely via clear async workflows and scheduled video calls.',
  },
]

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" variant="light" spacing="lg">
      <Container narrow>
        <SectionHeader
          eyebrow="FAQ"
          heading="Common questions answered"
          description="Everything you need to know before reaching out. More questions? Just ask."
          className="mb-12"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-3"
        >
          {FAQS.map(({ question, answer }, index) => (
            <motion.div
              key={question}
              variants={fadeInUp}
              className="overflow-hidden rounded-xl border border-fw-cloud bg-white dark:border-fw-slate dark:bg-fw-deep"
            >
              {/* Trigger */}
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-fw-cloud/50 dark:hover:bg-fw-void/50"
              >
                <span className="font-heading text-base font-semibold text-fw-navy dark:text-white">
                  {question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-fw-steel"
                  aria-hidden="true"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    key={`answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-fw-steel dark:text-fw-mist">
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/faq"
            className={cn(buttonVariants({ variant: 'ghost', size: 'md' }))}
          >
            View All FAQs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
