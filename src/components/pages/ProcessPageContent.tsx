'use client'

import { useT } from '@/lib/i18n/context'

export function ProcessPageContent() {
  const { t } = useT()
  return (
    <>
      <h1 className="font-display text-5xl font-bold text-fw-navy dark:text-white">
        {t.pages.process.h1}
      </h1>

      {/* Accent line */}
      <div className="mx-auto mt-5 h-px w-16 rounded-full bg-fw-cyan" aria-hidden="true" />

      <ol className="mt-8 space-y-6 text-left" aria-label="Process steps">
        {t.pages.process.paragraphs.map((p, i) => (
          <li key={i} className="flex gap-4">
            <span
              className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fw-cyan/10 font-display text-[10px] font-bold text-fw-cyan"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <p className="text-base leading-relaxed text-fw-steel dark:text-fw-mist">{p}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
