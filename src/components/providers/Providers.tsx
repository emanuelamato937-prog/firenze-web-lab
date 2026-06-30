'use client'

import { ThemeProvider } from 'next-themes'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from '@/lib/i18n/context'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </ThemeProvider>
    </LanguageProvider>
  )
}
