import { cn } from '@/lib/utils'

export interface WordmarkProps extends React.SVGAttributes<SVGSVGElement> {
  /** gradient — indigo→violet→cyan (light bg); light — white (dark bg) */
  variant?: 'gradient' | 'light'
}

export function Wordmark({ variant = 'gradient', className, ...props }: WordmarkProps) {
  const primaryFill = variant === 'light' ? '#ffffff' : 'url(#wm-grad)'
  const accentFill  = variant === 'light' ? '#ffffff' : '#7C3AED'
  const accentAlpha = variant === 'light' ? 0.55 : 0.65

  return (
    <svg
      viewBox="0 0 260 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Firenze Web Lab"
      role="img"
      className={cn('overflow-visible', className)}
      {...props}
    >
      {variant === 'gradient' && (
        <defs>
          {/*
            Stop colours are controlled by .wm-g1/.wm-g2/.wm-g3 in globals.css
            so dark mode can swap them to lighter shades without a JS prop.
          */}
          <linearGradient
            id="wm-grad"
            x1="0"
            y1="0"
            x2="260"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop className="wm-g1" offset="0%" />
            <stop className="wm-g2" offset="52%" />
            <stop className="wm-g3" offset="100%" />
          </linearGradient>
        </defs>
      )}

      {/* Primary word — heavy weight, full width */}
      <text
        x="0"
        y="44"
        fill={primaryFill}
        style={{
          fontFamily: 'var(--font-syne), -apple-system, system-ui, sans-serif',
          fontWeight: 800,
          fontSize: '48px',
          letterSpacing: '1px',
        }}
      >
        FIRENZE
      </text>

      {/* Descriptor — light weight, wide tracking */}
      <text
        x="4"
        y="65"
        fill={accentFill}
        fillOpacity={accentAlpha}
        style={{
          fontFamily: 'var(--font-syne), -apple-system, system-ui, sans-serif',
          fontWeight: 300,
          fontSize: '13px',
          letterSpacing: '5.5px',
        }}
      >
        WEB LAB
      </text>
    </svg>
  )
}
