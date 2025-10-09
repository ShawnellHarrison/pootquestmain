'use client';

import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type EnemyData = {
    id: string;
    name: string;
    hp: number;
    maxHp: number;
    imageUrl: string;
};

interface EnemyProps {
    enemy: EnemyData;
    onClick: () => void;
    isTarget: boolean;
}

export const Enemy = ({ enemy, onClick, isTarget }: EnemyProps) => (
    <div 
        className={cn(
            "flex flex-col items-center gap-2 cursor-pointer transition-transform duration-200",
            isTarget && "hover:scale-110 hover:-translate-y-2"
        )}
        onClick={onClick}
    >
        <Image src={enemy.imageUrl} alt={enemy.name} width={100} height={100} className="rounded-full border-2 border-destructive" data-ai-hint="goblin monster" />
        <div className="text-center">
            <p className="font-bold">{enemy.name}</p>
            <p className="text-sm text-muted-foreground">HP: {enemy.hp}/{enemy.maxHp}</p>
            <Progress value={(enemy.hp/enemy.maxHp) * 100} className="w-24 h-2 bg-destructive/30" />
        </div>
    </div>
);
