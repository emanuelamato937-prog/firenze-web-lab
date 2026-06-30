import { cn } from '@/lib/utils'
import type { SectionVariant } from '@/types'

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: SectionVariant
  id?: string
  as?: React.ElementType
  spacing?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<SectionVariant, string> = {
  light:       'bg-fw-snow dark:bg-fw-abyss',
  dark:        'bg-fw-navy text-white',
  gradient:    'gradient-brand text-white',
  transparent: 'bg-transparent',
}

const spacingStyles = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
}

export function Section({
  children,
  className,
  variant = 'light',
  id,
  as: Component = 'section',
  spacing = 'md',
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(spacingStyles[spacing], variantStyles[variant], className)}
    >
      {children}
    </Component>
  )
}
