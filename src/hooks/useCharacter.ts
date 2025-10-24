
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useFirebase, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { CLASSES, CharacterClass } from '@/lib/game-data';

export type CharacterState = {
    class: string;
    level: number;
    experience: number;
    health: number;
    maxHealth: number;
    maxMana: number;
    attack: number;
    defense: number;
    speed: number;
    id: string;
};

export function useCharacter(characterId: string) {
    const { firestore, user, isUserLoading } = useFirebase();
    const [character, setCharacter] = useState<CharacterState | null>(null);

    const characterDocRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, `users/${user.uid}/characters/${characterId}`);
    }, [firestore, user, characterId]);

    const { data: characterData, isLoading: isCharacterDocLoading } = useDoc(characterDocRef);

    useEffect(() => {
        if (characterData) {
            setCharacter(characterData as CharacterState);
        }
    }, [characterData]);

    const characterClassData = useMemo(() => {
        if (!character) return null;
        return CLASSES.find(c => c.id === character.class) as CharacterClass | undefined;
    }, [character]);

    const isLoading = isUserLoading || isCharacterDocLoading;

    return { character, characterClassData, isLoading };
}
