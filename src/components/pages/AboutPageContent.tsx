'use client'

import { useT } from '@/lib/i18n/context'

export function AboutPageContent() {
  const { t } = useT()
  return (
    <>
      <h1 className="font-display text-5xl font-bold text-fw-navy dark:text-white">
        {t.pages.about.h1}
      </h1>

      {/* Accent line */}
      <div className="mx-auto mt-5 h-px w-16 rounded-full bg-fw-cyan" aria-hidden="true" />

      <p className="mt-8 text-lg leading-relaxed text-fw-steel dark:text-fw-mist">
        {t.pages.about.body}
      </p>
    </>
  )
}
