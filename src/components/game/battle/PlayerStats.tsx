
'use client';

import { Heart, Droplets, Shield, Star, ChevronsUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PlayerStatsProps {
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
    defense: number;
    level: number;
    xp: number;
    xpToNextLevel: number;
}

export const PlayerStats = ({ health, maxHealth, mana, maxMana, defense, level, xp, xpToNextLevel }: PlayerStatsProps) => (
    <div className="flex items-center gap-6">
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
        <div className="flex items-center gap-2 font-bold text-lg" title="Level">
            <Star className="h-5 w-5 text-yellow-400" /> Lvl {level}
        </div>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="w-32">
                        <Progress value={(xp/xpToNextLevel) * 100} className="h-3" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>XP: {xp} / {xpToNextLevel}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
);

    