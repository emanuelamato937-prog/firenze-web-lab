'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '@/lib/i18n/context'

interface ScrollIndicatorProps {
  targetId: string
}

export function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const { t } = useT()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => {
      if (window.scrollY < 80) setVisible(true)
    }, 1000)

    function onScroll() {
      setVisible(window.scrollY < 80)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(show)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function handleClick() {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="group fixed bottom-8 left-1/2 z-10 -translate-x-1/2 flex cursor-pointer flex-col items-center gap-2.5 focus-visible:outline-none"
          aria-label={t.contact.scrollLabel}
        >
          {/* Mouse outline */}
          <div className="relative h-8 w-5 rounded-[9px] border border-fw-navy/20 transition-[border-color] duration-300 group-hover:border-fw-cyan/45 dark:border-white/20 dark:group-hover:border-fw-cyan/45">
            <motion.div
              className="absolute left-1/2 top-1.5 h-1.5 w-0.5 -translate-x-1/2 rounded-full bg-fw-navy/35 dark:bg-white/35"
              animate={{ y: [0, 8, 0], opacity: [0.9, 0.1, 0.9] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.5,
              }}
            />
          </div>

          {/* Label */}
          <span className="font-heading text-[9px] font-medium uppercase tracking-[0.2em] text-fw-navy/25 transition-colors duration-300 group-hover:text-fw-navy/55 dark:text-white/25 dark:group-hover:text-white/55">
            {t.contact.scrollLabel}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
