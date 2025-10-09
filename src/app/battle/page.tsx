import { BattleClient } from "@/components/game/battle/BattleClient";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";

export default function BattlePage() {
  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
            <BattleClient />
        </GameContainer>
      </main>
    </>
  );
}
