'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow: string
  heading: string
  description?: string
  light?: boolean
  centered?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  light = false,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(centered && 'text-center', className)}
    >
      <motion.div
        variants={fadeInUp}
        className={cn(centered && 'flex justify-center')}
      >
        <Badge
          variant={light ? 'outline' : 'cyan'}
          size="md"
          className={cn('mb-4', light && 'border-white/30 text-white')}
        >
          {eyebrow}
        </Badge>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className={cn(
          'font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl',
          light ? 'text-white' : 'text-fw-navy dark:text-white'
        )}
      >
        {heading}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'mt-4 max-w-2xl text-lg leading-relaxed',
            centered && 'mx-auto',
            light ? 'text-fw-mist' : 'text-fw-steel dark:text-fw-mist'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
