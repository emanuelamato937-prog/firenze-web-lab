import { Syne, Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'

export const fontSyne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const fontJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const fontJetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})
