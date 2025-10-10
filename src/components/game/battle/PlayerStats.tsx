
'use client';

import { Heart, Droplets, Shield } from "lucide-react";

interface PlayerStatsProps {
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
    defense: number;
}

export const PlayerStats = ({ health, maxHealth, mana, maxMana, defense }: PlayerStatsProps) => (
    <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 font-bold text-lg" title="Health">
            <Heart className="h-5 w-5 text-red-500" /> {health}/{maxHealth}
        </div>
        <div className="flex items-center gap-1 font-bold text-lg" title="Mana">
            <Droplets className="h-5 w-5 text-blue-500" /> {mana}/{maxMana}
        </div>
        {defense > 0 && (
            <div className="flex items-center gap-1 font-bold text-lg" title="Defense">
                <Shield className="h-5 w-5 text-gray-400" /> {defense}
            </div>
        )}
    </div>
);
