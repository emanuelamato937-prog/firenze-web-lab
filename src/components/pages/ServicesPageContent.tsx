'use client'

import { useT } from '@/lib/i18n/context'

export function ServicesPageContent() {
  const { t } = useT()
  return (
    <>
      <h1 className="font-display text-5xl font-bold text-fw-navy dark:text-white">
        {t.pages.services.h1}
      </h1>

      {/* Accent line */}
      <div className="mx-auto mt-5 h-px w-16 rounded-full bg-fw-cyan" aria-hidden="true" />

      <div className="mt-8 space-y-6">
        {t.pages.services.paragraphs.map((p, i) => (
          <p
            key={i}
            className={
              i === 0
                ? 'text-lg font-medium leading-relaxed text-fw-navy dark:text-white'
                : 'text-base leading-relaxed text-fw-steel dark:text-fw-mist'
            }
          >
            {p}
          </p>
        ))}
      </div>
    </>
  )
}
