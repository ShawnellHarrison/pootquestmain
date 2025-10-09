'use client';

import { Card, CardContent } from "@/components/ui/card";
import { CardData } from "@/lib/game-data";
import { cn } from "@/lib/utils";

interface PlayerCardProps {
    card: CardData;
    onClick: () => void;
    isSelected: boolean;
}

export const PlayerCard = ({ card, onClick, isSelected }: PlayerCardProps) => (
    <Card 
        className={cn(
            "w-28 h-40 bg-secondary flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:-translate-y-2 transition-transform duration-200",
            isSelected && "border-primary ring-2 ring-primary -translate-y-4"
        )}
        onClick={onClick}
    >
        <CardContent className="p-2 text-center">
            <p className="font-bold text-sm">{card.name}</p>
            <p className="text-xs text-muted-foreground mt-1">Cost: {card.manaCost}</p>
            {card.attack > 0 && <p className="text-xs text-red-400 mt-1">ATK: {card.attack}</p>}
        </CardContent>
    </Card>
);
