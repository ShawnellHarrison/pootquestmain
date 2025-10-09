import { AdventureClient } from "@/components/game/AdventureClient";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { getClass } from "@/lib/game-data";
import { notFound } from "next/navigation";

type Props = {
  params: { class: string };
};

export default function AdventurePage({ params }: Props) {
  const character = getClass(params.class);

  if (!character) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
          <AdventureClient playerClass={character.name} />
        </GameContainer>
      </main>
    </>
  );
}
