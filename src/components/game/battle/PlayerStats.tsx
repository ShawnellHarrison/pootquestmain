'use client';

import { Heart, Droplets } from "lucide-react";

interface PlayerStatsProps {
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
}

export const PlayerStats = ({ health, maxHealth, mana, maxMana }: PlayerStatsProps) => (
    <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 font-bold text-lg">
            <Heart className="h-5 w-5 text-red-500" /> {health}/{maxHealth}
        </div>
        <div className="flex items-center gap-1 font-bold text-lg">
            <Droplets className="h-5 w-5 text-blue-500" /> {mana}/{maxMana}
        </div>
    </div>
);
