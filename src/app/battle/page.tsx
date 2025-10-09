import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Droplets, Shield, Folder, Trash2, ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const Enemy = ({ name, hp, maxHp, image }: { name: string; hp: number; maxHp: number; image: string }) => (
    <div className="flex flex-col items-center gap-2">
        <Image src={image} alt={name} width={100} height={100} className="rounded-full border-2 border-destructive" data-ai-hint="goblin monster" />
        <div className="text-center">
            <p className="font-bold">{name}</p>
            <p className="text-sm text-muted-foreground">HP: {hp}/{maxHp}</p>
            <Progress value={(hp/maxHp) * 100} className="w-24 h-2 bg-destructive/30" />
        </div>
    </div>
);

const PlayerCard = ({ name }: { name: string }) => (
    <Card className="w-28 h-40 bg-secondary flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:-translate-y-2 transition-transform duration-200">
        <CardContent className="p-2 text-center">
            <p className="font-bold text-sm">{name}</p>
        </CardContent>
    </Card>
);

export default function BattlePage() {
  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
            <Card className="bg-card/50">
                <CardContent className="p-4 space-y-4">
                    {/* Enemy Area */}
                    <div className="flex justify-around items-end p-4 min-h-48 bg-muted/50 rounded-lg border-b-4 border-b-accent">
                        <Enemy name="Goblin Sniffer 1" hp={15} maxHp={15} image="https://picsum.photos/seed/goblin1/100/100" />
                        <Enemy name="Goblin Sniffer 2" hp={12} maxHp={15} image="https://picsum.photos/seed/goblin2/100/100" />
                        <Enemy name="Goblin Sniffer 3" hp={15} maxHp={15} image="https://picsum.photos/seed/goblin3/100/100" />
                    </div>

                    {/* Battlefield Zone */}
                    <div className="min-h-48 flex items-center justify-center text-muted-foreground italic">
                        Battlefield Zone
                    </div>

                    {/* Player Area */}
                    <div className="pt-4 border-t-2 border-border">
                        <div className="flex justify-between items-center mb-4 px-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 font-bold text-lg"><Heart className="h-5 w-5 text-red-500" /> 45/60</div>
                                <div className="flex items-center gap-1 font-bold text-lg"><Droplets className="h-5 w-5 text-blue-500" /> 5/10</div>
                                <div className="flex items-center gap-1 font-bold text-lg"><Shield className="h-5 w-5 text-gray-400" /> 0</div>
                            </div>
                            <Button size="lg">End Turn <ArrowRightCircle className="ml-2 h-4 w-4" /></Button>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-end gap-4">
                                <PlayerCard name="Backstab" />
                                <PlayerCard name="Silent But Deadly" />
                                <PlayerCard name="Smoke Bomb" />
                                <PlayerCard name="Basic Attack" />
                                <PlayerCard name="Basic Attack" />
                            </div>
                            <div className="flex gap-8 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1"><Folder className="h-4 w-4" /> Deck: 12</div>
                                <div className="flex items-center gap-1"><Trash2 className="h-4 w-4" /> Discard: 3</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </GameContainer>
      </main>
    </>
  );
}
