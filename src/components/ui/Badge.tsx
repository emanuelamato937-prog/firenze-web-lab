import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-heading font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: [
          'border-transparent',
          'bg-fw-cloud text-fw-slate',
          'dark:bg-fw-void dark:text-fw-mist',
        ],
        cyan: [
          'border-transparent',
          'bg-fw-cyan/10 text-fw-cyan',
        ],
        navy: [
          'border-transparent',
          'bg-fw-navy text-white',
        ],
        gold: [
          'border-transparent',
          'bg-fw-gold/10 text-fw-gold',
        ],
        outline: [
          'border-fw-mist text-fw-steel',
          'dark:border-fw-slate dark:text-fw-steel',
        ],
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { badgeVariants }
