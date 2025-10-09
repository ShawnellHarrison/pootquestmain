import { ClassCarousel } from "@/components/game/ClassCarousel";
import { GameContainer } from "@/components/game/GameContainer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CharacterCreationPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12">
      <GameContainer className="flex flex-col items-center text-center">
        <div className="w-full flex justify-start">
            <Button asChild variant="ghost">
                <Link href="/">
                    <ArrowLeft className="mr-2" />
                    Back to Title
                </Link>
            </Button>
        </div>
        <h1 className="font-headline text-5xl font-bold text-glow mb-2 mt-8">Choose Your Warrior</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Each class offers a unique path through the Land of Never-Ending Asses. Select your champion and prepare for a journey of tactical toots and fragrant fables.
        </p>
        <ClassCarousel />
      </GameContainer>
    </main>
  );
}
