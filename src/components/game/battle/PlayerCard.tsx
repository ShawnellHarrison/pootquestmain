

'use client';

import { Card, CardContent } from "@/components/ui/card";
import { CardData } from "@/lib/game-data";
import { cn } from "@/lib/utils";
import { Heart, Shield, Swords } from "lucide-react";

interface PlayerCardProps {
    card: CardData;
    onClick: () => void;
    isSelected: boolean;
}

export const PlayerCard = ({ card, onClick, isSelected }: PlayerCardProps) => (
    <Card 
        className={cn(
            "w-32 h-48 bg-secondary flex flex-col items-center justify-between p-2 cursor-pointer hover:border-primary hover:-translate-y-2 transition-transform duration-200",
            isSelected && "border-primary ring-2 ring-primary -translate-y-4"
        )}
        onClick={onClick}
    >
        <div className="w-full">
            <p className="font-bold text-sm text-center truncate">{card.name}</p>
            <p className="text-xs text-muted-foreground text-center mt-1">Cost: {card.manaCost}</p>
        </div>
        
        <div className="flex flex-col items-center justify-center flex-grow space-y-1">
            {card.attack > 0 && <div className="flex items-center gap-1 text-sm text-red-400"><Swords className="h-4 w-4" /> {card.attack}</div>}
            {card.defense > 0 && <div className="flex items-center gap-1 text-sm text-blue-400"><Shield className="h-4 w-4" /> {card.defense}</div>}
            {card.healing > 0 && <div className="flex items-center gap-1 text-sm text-green-400"><Heart className="h-4 w-4" /> {card.healing}</div>}
        </div>

        <p className="text-xs text-muted-foreground text-center w-full">{card.description}</p>
    </Card>
);
