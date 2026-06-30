'use client'

import Link from 'next/link'
import { Code2, Globe, Mail, Phone, MessageCircle } from 'lucide-react'
import { Wordmark } from '@/components/ui/Wordmark'
import { Container } from './Container'
import { siteConfig } from '@/lib/metadata'
import { useT } from '@/lib/i18n/context'

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com',           icon: Code2         },
  { label: 'LinkedIn', href: 'https://linkedin.com',          icon: Globe         },
  { label: 'Email',    href: `mailto:${siteConfig.email}`,   icon: Mail          },
  { label: 'WhatsApp', href: siteConfig.whatsapp,            icon: MessageCircle },
]

export function Footer() {
  const { t } = useT()

  const NAV_LINKS = [
    { label: t.nav.home,     href: '/' },
    { label: t.nav.about,    href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.process,  href: '/process' },
    { label: t.nav.contact,  href: '/contact' },
  ]

  return (
    <footer className="bg-fw-navy text-white" role="contentinfo">
      <Container>

        {/* Main grid */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Firenze Web Lab — Home" className="group inline-block transition-opacity hover:opacity-80">
              <Wordmark variant="light" className="h-12 w-auto" />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fw-mist">
              {t.footer.tagline}
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-fw-slate text-fw-mist transition-colors hover:border-fw-cyan hover:text-fw-cyan"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="mb-4 text-xs font-heading font-semibold uppercase tracking-widest text-fw-steel">
              {t.footer.navHeading}
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-fw-mist transition-colors hover:text-fw-cyan"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 text-xs font-heading font-semibold uppercase tracking-widest text-fw-steel">
              {t.footer.contactHeading}
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-fw-mist transition-colors hover:text-fw-cyan"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-fw-mist transition-colors hover:text-fw-cyan"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-fw-mist transition-colors hover:text-fw-cyan"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {t.footer.whatsapp}
                </a>
              </li>
              <li className="text-sm text-fw-steel">
                {t.footer.location}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-fw-slate/60 py-6 sm:flex-row">
          <p className="text-xs text-fw-steel">
            &copy; {new Date().getFullYear()} Firenze Web Lab. {t.footer.rights}
          </p>
          <p className="text-xs text-fw-steel">
            {t.footer.freelance} &middot; {t.footer.location}
          </p>
        </div>

      </Container>
    </footer>
  )
}
