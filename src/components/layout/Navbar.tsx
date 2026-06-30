'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Wordmark } from '@/components/ui/Wordmark'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrolled'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/context'
import type { Locale } from '@/lib/i18n/translations'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useT()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return <div className="h-9 w-9 shrink-0" aria-hidden />

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={resolvedTheme === 'dark' ? t.nav.switchLight : t.nav.switchDark}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-fw-steel transition-colors hover:bg-fw-cloud hover:text-fw-navy dark:hover:bg-fw-void dark:hover:text-fw-cyan"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )
}

function LanguageToggle() {
  const { locale, setLocale } = useT()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return <div className="h-9 w-[4.5rem] shrink-0" aria-hidden />

  const options: Locale[] = ['en', 'it']

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex overflow-hidden rounded-lg border border-fw-cloud/70 dark:border-fw-slate/50"
    >
      {options.map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          aria-pressed={locale === lang}
          className={cn(
            'px-2.5 py-1.5 text-xs font-heading font-semibold uppercase tracking-wide transition-colors',
            locale === lang
              ? 'bg-fw-cyan text-white'
              : 'text-fw-steel hover:bg-fw-cloud hover:text-fw-navy dark:text-fw-mist dark:hover:bg-fw-void dark:hover:text-white'
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}

function NavLogo({
  size = 'default',
  scrolled = false,
}: {
  size?: 'default' | 'drawer'
  scrolled?: boolean
}) {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center"
      aria-label="Firenze Web Lab — Home"
    >
      <Wordmark
        variant={!scrolled && size !== 'drawer' ? 'light' : 'gradient'}
        className={cn(
          'w-auto transition-all duration-300 group-hover:opacity-80',
          size === 'drawer'
            ? 'h-[40px]'
            : 'h-[38px] sm:h-[42px] lg:h-[48px] xl:h-[52px]'
        )}
      />
    </Link>
  )
}

export function Navbar() {
  const scrolled = useScrolled(20)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useT()

  const NAV_LINKS = [
    { label: t.nav.home,     href: '/' },
    { label: t.nav.about,    href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.process,  href: '/process' },
    { label: t.nav.contact,  href: '/contact' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-fw-deep/90'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-8 xl:h-28">

          <NavLogo scrolled={scrolled} />

          {/* Desktop navigation */}
          <nav
            className="hidden lg:flex lg:items-center lg:gap-0.5"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3.5 py-2 text-sm font-heading font-medium transition-colors',
                  isActive(link.href)
                    ? 'text-fw-cyan'
                    : 'text-fw-slate hover:text-fw-navy dark:text-fw-mist dark:hover:text-white'
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-x-3.5 -bottom-px h-[2px] rounded-full bg-fw-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right-side actions */}
          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Link href="/contact" className="hidden sm:block">
              <Button size="sm" className="gap-1.5">
                {t.nav.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-fw-slate transition-colors hover:bg-fw-cloud dark:text-fw-mist dark:hover:bg-fw-void lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-fw-abyss/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-72 flex-col bg-white px-6 py-6 shadow-2xl dark:bg-fw-deep"
            >
              {/* Drawer header: logo + close */}
              <div className="flex items-center justify-between">
                <NavLogo size="drawer" />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label={t.nav.closeMenu}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-fw-steel transition-colors hover:bg-fw-cloud dark:hover:bg-fw-void"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Language toggle in drawer */}
              <div className="mt-6">
                <LanguageToggle />
              </div>

              {/* Nav links */}
              <nav
                className="mt-4 flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm font-heading font-medium transition-colors',
                      isActive(link.href)
                        ? 'bg-fw-cyan/10 text-fw-cyan'
                        : 'text-fw-slate hover:bg-fw-cloud hover:text-fw-navy dark:text-fw-mist dark:hover:bg-fw-void dark:hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto border-t border-fw-mist pt-6 dark:border-fw-slate">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full gap-2">
                    {t.nav.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
