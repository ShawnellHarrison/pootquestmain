import { AdventureClient } from "@/components/game/AdventureClient";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";

type Props = {
  params: { class: string }; // 'class' is now characterId
};

export default function AdventurePage({ params }: Props) {
  const characterId = params.class;

  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
          <AdventureClient characterId={characterId} />
        </GameContainer>
      </main>
    </>
  );
}
