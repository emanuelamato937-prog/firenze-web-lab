'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-heading font-semibold',
    'transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fw-cyan focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-fw-cyan text-white',
          'hover:bg-fw-cyan-light',
          'shadow-brand hover:shadow-brand-lg',
          'active:scale-[0.98]',
        ],
        secondary: [
          'bg-fw-navy text-white',
          'hover:bg-fw-navy-hover',
          'dark:bg-fw-void dark:hover:bg-fw-slate',
          'active:scale-[0.98]',
        ],
        outline: [
          'border-2 border-fw-cyan text-fw-cyan',
          'hover:bg-fw-cyan hover:text-white',
          'dark:text-fw-cyan dark:hover:text-white',
        ],
        ghost: [
          'text-fw-cyan',
          'hover:bg-fw-cyan/10',
        ],
        gold: [
          'bg-fw-gold text-fw-ink font-bold',
          'hover:bg-fw-gold-light',
          'active:scale-[0.98]',
        ],
        gradient: [
          'btn-gradient text-white',
          'shadow-violet hover:shadow-violet-lg',
          'active:scale-[0.98]',
          'focus-visible:ring-fw-violet',
        ],
        violet: [
          'bg-fw-violet text-white',
          'hover:bg-fw-violet-light hover:text-fw-ink',
          'shadow-violet hover:shadow-violet-lg',
          'active:scale-[0.98]',
        ],
      },
      size: {
        sm: 'h-9 gap-1.5 rounded-lg px-4 text-sm',
        md: 'h-11 gap-2 rounded-lg px-6 text-base',
        lg: 'h-12 gap-2 rounded-xl px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { buttonVariants }
