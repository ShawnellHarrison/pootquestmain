
'use client';
import { BattleClient } from "@/components/game/battle/BattleClient";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


function BattlePageContent() {
  const searchParams = useSearchParams();
  const characterId = searchParams.get('characterId');
  const encounterString = searchParams.get('encounter');
  const encounter = encounterString ? JSON.parse(encounterString) : null;

  if (!characterId || !encounter) {
    // Handle error or redirect
    return <div>Error: Missing battle data.</div>;
  }
  
  return (
     <BattleClient characterId={characterId} encounter={encounter} />
  )
}


export default function BattlePage() {
  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
          <Suspense fallback={<div>Loading Battle...</div>}>
            <BattlePageContent />
          </Suspense>
        </GameContainer>
      </main>
    </>
  );
}
