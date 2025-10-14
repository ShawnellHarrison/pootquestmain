
import Link from "next/link";
import { Swords, Coffee, BookOpen } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Swords className="text-primary h-8 w-8" />
          <h1 className="text-2xl font-headline font-bold text-glow">
            Poot Quest
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
            <Link href="/character-creation" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
                New Game
            </Link>
            <Link href="/chronicle" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
                Chronicles
            </Link>
            <Button asChild variant="ghost" size="sm">
                <a href="https://buymeacoffee.com/harrisonfamilyventures" target="_blank" rel="noopener noreferrer">
                    <Coffee className="mr-2 h-4 w-4" /> Buy me a Coffee
                </a>
            </Button>
        </nav>
      </div>
    </header>
  );
}
