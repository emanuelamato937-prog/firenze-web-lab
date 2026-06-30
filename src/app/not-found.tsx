import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <div className="mx-auto max-w-lg py-24 text-center">
          <p className="font-display text-8xl font-bold text-fw-cyan select-none">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold text-fw-navy dark:text-white">
            Page not found
          </h1>
          <p className="mt-4 text-fw-steel">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/">
              <Button variant="primary" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">
                Contact me
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
