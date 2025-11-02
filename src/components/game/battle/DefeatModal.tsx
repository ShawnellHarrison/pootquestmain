
'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Skull, BookOpen } from 'lucide-react';

export type DefeatStats = {
    characterClass: string;
    enemiesKilled: number;
    finalWords: string;
};

interface DefeatModalProps {
    isOpen: boolean;
    stats: DefeatStats;
    onClose: () => void;
}

export function DefeatModal({ isOpen, stats, onClose }: DefeatModalProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-center mb-4">
            <Skull className="h-16 w-16 text-destructive" />
          </div>
          <AlertDialogTitle className="text-center font-headline text-3xl text-glow">You Have Perished</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg">
            Your legend, however brief, has come to an end.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="my-4 space-y-2 font-code">
          <p><strong>Class:</strong> {stats.characterClass}</p>
          <p><strong>Enemies Vanquished:</strong> {stats.enemiesKilled}</p>
          <p className="italic text-muted-foreground">&quot;{stats.finalWords}&quot;</p>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose} className="w-full">
            <BookOpen className="mr-2" /> View your Chronicle
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
