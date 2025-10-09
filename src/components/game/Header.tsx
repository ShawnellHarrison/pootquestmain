import Link from "next/link";
import { Swords } from "lucide-react";

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Swords className="text-primary h-8 w-8" />
          <h1 className="text-2xl font-headline font-bold text-glow">
            Poor Quest
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
            <Link href="/character-creation" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                New Game
            </Link>
            <Link href="/chronicle" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Chronicles
            </Link>
        </nav>
      </div>
    </header>
  );
}
