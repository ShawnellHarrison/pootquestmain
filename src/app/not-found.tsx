import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Frown } from 'lucide-react'
import { Header } from '@/components/game/Header'

export default function NotFound() {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      <Frown className="w-24 h-24 text-primary/50 mb-4" />
      <h1 className="text-6xl font-headline font-bold text-glow mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-muted-foreground mb-4">You&apos;ve Farted in an Empty Room</h2>
      <p className="max-w-md text-foreground mb-8">
        It seems you&apos;ve wandered off the beaten path into the silent void. Nothing to see here but echoes of what might have been.
      </p>
      <Button asChild>
        <Link href="/">Return to the Tavern</Link>
      </Button>
    </div>
    </>
  )
}
