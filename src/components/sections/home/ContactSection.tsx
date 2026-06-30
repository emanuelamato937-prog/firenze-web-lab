'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MessageCircle, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import { useT } from '@/lib/i18n/context'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/metadata'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputClass =
  'w-full rounded-lg border border-fw-cloud bg-fw-snow px-4 py-3 text-sm text-fw-navy placeholder-fw-steel transition-colors focus:border-fw-cyan focus:outline-none focus:ring-2 focus:ring-fw-cyan/20 dark:border-fw-slate dark:bg-fw-void dark:text-white dark:placeholder-fw-steel'

const labelClass =
  'mb-1.5 block text-sm font-heading font-medium text-fw-navy dark:text-fw-mist'

export function ContactSection() {
  const { t } = useT()
  const { contact: c } = t
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const CONTACT_INFO = [
    {
      icon:  Mail,
      label: c.info.email,
      value: siteConfig.email,
      href:  `mailto:${siteConfig.email}`,
    },
    {
      icon:  Phone,
      label: c.info.phone,
      value: siteConfig.phone,
      href:  `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    },
    {
      icon:  MessageCircle,
      label: c.info.whatsapp,
      value: siteConfig.phone,
      href:  siteConfig.whatsapp,
    },
  ]

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, projectType: 'General Inquiry' }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" variant="dark" spacing="lg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: copy + contact details ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="outline"
                size="md"
                className="mb-4 border-white/30 text-white"
              >
                {c.badge}
              </Badge>
            </motion.div>

            <motion.h2
              variants={slideInLeft}
              className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              {c.heading}{' '}
              <span className="text-fw-gold">{c.headingGold}</span>?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg leading-relaxed text-fw-mist"
            >
              {c.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 h-px bg-white/10"
              aria-hidden="true"
            />

            <motion.ul
              variants={staggerContainer}
              className="mt-8 space-y-5"
              role="list"
            >
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <motion.li
                  key={label}
                  variants={fadeInUp}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-transform duration-200 hover:scale-110">
                    <Icon className="h-5 w-5 text-fw-cyan" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-fw-steel">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-white transition-colors hover:text-fw-cyan"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{value}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_48px_rgb(0_0_0/0.35)] sm:p-8 dark:bg-fw-deep">

              {status === 'sent' ? (
                /* Success state */
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2
                    className="h-12 w-12 text-fw-cyan"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-xl font-bold text-fw-navy dark:text-white">
                    {c.form.successHeading}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-fw-steel dark:text-fw-mist">
                    {c.form.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle')
                      setForm({ name: '', email: '', message: '' })
                    }}
                    className="mt-6 text-sm text-fw-cyan underline-offset-2 hover:underline"
                  >
                    {c.form.successReset}
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h3 className="font-display text-xl font-bold text-fw-navy dark:text-white">
                    {c.form.heading}
                  </h3>
                  <p className="mt-1 text-sm text-fw-steel dark:text-fw-mist">
                    {c.form.subheading}
                  </p>

                  <div className="mt-6 space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        {c.form.nameLabel}{' '}
                        <span className="text-fw-cyan" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={c.form.namePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        {c.form.emailLabel}{' '}
                        <span className="text-fw-cyan" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={c.form.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className={labelClass}>
                        {c.form.messageLabel}{' '}
                        <span className="text-fw-cyan" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder={c.form.messagePlaceholder}
                        className={cn(inputClass, 'resize-none')}
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <p
                      role="alert"
                      className="mt-3 text-sm text-red-500 dark:text-red-400"
                    >
                      {c.form.errorPrefix}{' '}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="underline underline-offset-2"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={cn(
                      'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg',
                      'bg-fw-cyan px-6 py-3.5 font-heading text-base font-semibold text-white',
                      'transition-all duration-150 hover:bg-fw-cyan-light hover:shadow-brand',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fw-cyan focus-visible:ring-offset-2',
                      'disabled:cursor-not-allowed disabled:opacity-60',
                      'active:scale-[0.98]'
                    )}
                  >
                    {status === 'sending' ? (
                      <>
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                          aria-hidden="true"
                        />
                        {c.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        {c.form.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
