
'use client';

import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Shield, Heart, Zap, Sparkles } from "lucide-react";

type EnemyData = {
    id: string;
    name: string;
    hp: number;
    maxHp: number;
    imageUrl: string;
    defense?: number;
    modifier?: {
        type: "Retaliator" | "Regenerator" | "Commander" | "Shielded";
        value?: number;
    }
};

interface EnemyProps {
    enemy: EnemyData;
    onClick: () => void;
    isTarget: boolean;
}

const modifierInfo = {
    Retaliator: { icon: Zap, label: "Retaliator", description: "Deals damage back when attacked." },
    Regenerator: { icon: Heart, label: "Regenerator", description: "Heals at the start of its turn." },
    Commander: { icon: Sparkles, label: "Commander", description: "Boosts ally attack power." },
    Shielded: { icon: Shield, label: "Shielded", description: "Starts with extra defense." },
}

export const Enemy = ({ enemy, onClick, isTarget }: EnemyProps) => (
    <div 
        className={cn(
            "flex flex-col items-center gap-2 cursor-pointer transition-transform duration-200 relative",
            isTarget && "hover:scale-110 hover:-translate-y-2"
        )}
        onClick={onClick}
    >
        {isTarget && <div className="absolute inset-0 rounded-full ring-2 ring-red-500 ring-offset-4 ring-offset-muted/50 animate-pulse"></div>}
        
        <div className="relative">
            <Image src={enemy.imageUrl} alt={enemy.name} width={100} height={100} className="rounded-full border-2 border-destructive" data-ai-hint="goblin monster" />
            {enemy.modifier && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1 border-2 border-background">
                                {React.createElement(modifierInfo[enemy.modifier.type].icon, { className: "h-4 w-4 text-primary-foreground" })}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="font-bold">{modifierInfo[enemy.modifier.type].label}</p>
                            <p>{modifierInfo[enemy.modifier.type].description} ({enemy.modifier.value})</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>

        <div className="text-center">
            <p className="font-bold">{enemy.name}</p>
            <p className="text-sm text-muted-foreground">HP: {enemy.hp}/{enemy.maxHp}</p>
            <Progress value={(enemy.hp/enemy.maxHp) * 100} className="w-24 h-2 bg-destructive/30" indicatorClassName="bg-destructive" />
            {enemy.defense && enemy.defense > 0 && (
                <div className="flex items-center justify-center text-xs text-blue-400 gap-1 mt-1">
                    <Shield className="h-3 w-3"/> {enemy.defense}
                </div>
            )}
        </div>
    </div>
);
