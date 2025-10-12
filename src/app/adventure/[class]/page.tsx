
'use client';
import { AdventureClient } from "@/components/game/AdventureClient";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

type Props = {
  params: { class: string }; // 'class' is the characterId from the URL
};

function AdventurePageContent({ params }: Props) {
  const characterId = params.class;
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


export default function AdventurePage(props: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdventurePageContent {...props} />
    </Suspense>
  )
}
