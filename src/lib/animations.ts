import type { Variants } from 'framer-motion'

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
}

export const drawerSlideRight: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', damping: 30, stiffness: 300 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring', damping: 30, stiffness: 300 },
  },
}

export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}
