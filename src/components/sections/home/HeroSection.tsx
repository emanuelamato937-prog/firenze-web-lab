'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { useT } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const { t } = useT()

  return (
    <section
      id="hero"
      aria-label="Firenze Web Lab — Architecture-Inspired Web Development"
      className="relative flex min-h-screen flex-col overflow-hidden gradient-dark"
    >
      {/* Mesh gradient overlay */}
      <div className="pointer-events-none absolute inset-0 gradient-mesh" aria-hidden="true" />

      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, #29ABE2 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Main centered content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            {/* Brand name headline */}
            <motion.h1
              variants={fadeInUp}
              className="max-w-4xl font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Firenze{' '}
              <span className="text-gradient-cyan">Web Lab</span>
            </motion.h1>

            {/* Studio definition */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-fw-mist sm:text-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
                >
                  {t.hero.cta1}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <a
                  href="#about"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'border-white/25 text-white hover:border-fw-cyan hover:bg-fw-cyan hover:text-white'
                  )}
                >
                  {t.hero.cta2}
                </a>
              </motion.div>
            </motion.div>

            {/* Location */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 flex items-center gap-1.5 text-sm text-fw-steel"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {t.hero.location}
            </motion.p>
          </motion.div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-fw-slate"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">{t.hero.scroll}</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
