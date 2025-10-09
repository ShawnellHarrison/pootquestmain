import { ClassCarousel } from "@/components/game/ClassCarousel";
import { GameContainer } from "@/components/game/GameContainer";

export default function CharacterCreationPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12">
      <GameContainer className="flex flex-col items-center text-center">
        <h1 className="font-headline text-5xl font-bold text-glow mb-2">Choose Your Warrior</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Each class offers a unique path through the Land of Never-Ending Asses. Select your champion and prepare for a journey of tactical toots and fragrant fables.
        </p>
        <ClassCarousel />
      </GameContainer>
    </main>
  );
}
