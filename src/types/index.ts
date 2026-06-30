export type SectionVariant = 'light' | 'dark' | 'gradient' | 'transparent'

export type ProjectCategory =
  | 'web-app'
  | 'landing-page'
  | 'e-commerce'
  | 'branding'

export type Project = {
  slug: string
  title: string
  client: string
  category: ProjectCategory
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  year: number
  results?: string[]
}

export type Service = {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
}

export type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  avatar?: string
  quote: string
  rating: 1 | 2 | 3 | 4 | 5
}

export type ProcessPhase = {
  number: number
  title: string
  description: string
  duration: string
  deliverables: string[]
}

export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type FAQItem = {
  question: string
  answer: string
  category: string
}
