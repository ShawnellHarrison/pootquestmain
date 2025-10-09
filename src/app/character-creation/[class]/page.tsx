import { getClass } from "@/lib/game-data";
import { notFound } from "next/navigation";
import { ConfirmationScreen } from "@/components/game/ConfirmationScreen";
import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";

type Props = {
  params: { class: string };
};

export default function ConfirmCharacterPage({ params }: Props) {
  const character = getClass(params.class);

  if (!character) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
          <ConfirmationScreen character={character} />
        </GameContainer>
      </main>
    </>
  );
}
