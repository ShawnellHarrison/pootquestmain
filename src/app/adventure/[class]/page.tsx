
'use client';
import { AdventureClient } from "@/components/game/AdventureClient";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { useSearchParams } from 'next/navigation';
import { Suspense, use } from "react";

type Props = {
  params: Promise<{ class: string }>;
};

function AdventurePageContent({ params }: Props) {
  const { class: characterId } = use(params);
  const searchParams = useSearchParams();
  const battleStateString = searchParams.get('battleState');
  const initialBattleState = battleStateString ? JSON.parse(battleStateString) : null;

  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
          <AdventureClient characterId={characterId} initialBattleState={initialBattleState} />
        </GameContainer>
      </main>
    </>
  );
}


export default function AdventurePage({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdventurePageContent params={params} />
    </Suspense>
  )
}
