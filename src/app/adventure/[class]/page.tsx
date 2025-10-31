
import { AdventureClient } from "@/components/game/AdventureClient";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { Suspense } from "react";

type Props = {
  params: { class: string };
};

// This is now an async Server Component
export default async function AdventurePage({ params }: Props) {
  const characterId = params.class;

  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
          {/* Suspense is used here to handle client-side data fetching within AdventureClient */}
          <Suspense fallback={<div>Loading your adventure...</div>}>
            <AdventureClient characterId={characterId} />
          </Suspense>
        </GameContainer>
      </main>
    </>
  );
}
