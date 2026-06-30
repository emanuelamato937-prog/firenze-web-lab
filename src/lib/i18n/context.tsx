'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import { translations, type Locale, type Translations } from './translations'

interface LanguageContextValue {
  locale:    Locale
  setLocale: (locale: Locale) => void
  t:         Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  locale:    'it',
  setLocale: () => {},
  t:         translations.it,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('it')

  useEffect(() => {
    const stored = localStorage.getItem('fw-locale') as Locale | null
    if (stored === 'en' || stored === 'it') {
      setLocaleState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function setLocale(next: Locale) {
    setLocaleState(next)
    localStorage.setItem('fw-locale', next)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useT() {
  return useContext(LanguageContext)
}
