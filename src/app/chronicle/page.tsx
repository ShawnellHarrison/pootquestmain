
'use client';

import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lock, BookOpen, ArrowLeft, Loader2, Trophy, Skull, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCollection, useFirebase, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { formatDistanceToNow } from 'date-fns';
import { generateRunSummary } from "@/ai/flows/generate-run-summary";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const RunCard = ({ run, onExport, isExporting }: { run: any, onExport: (run: any) => void, isExporting: boolean }) => (
    <Card className="bg-card/80 border border-border/50 flex flex-col">
        <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <CardTitle className="font-headline text-xl text-glow flex items-center gap-2">
                        {run.ending.includes("Vanquished") ? <Skull className="text-destructive" /> : <Trophy className="text-yellow-400" />}
                        The Legend of a {run.characterClass}
                    </CardTitle>
                    <CardDescription>
                        {run.createdAt ? formatDistanceToNow(new Date(run.createdAt.seconds * 1000), { addSuffix: true }) : 'A timeless legend'}
                    </CardDescription>
                </div>
                <div className="text-right">
                    <p className="font-code text-sm text-muted-foreground">Killed: {run.enemiesKilled}</p>
                    <p className="font-code text-sm text-muted-foreground">Alignment: {run.moralAlignment}</p>
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
             <p className="font-serif italic text-foreground/90">&quot;{run.ending}&quot;</p>
             <p className="font-serif text-sm text-muted-foreground mt-2">&mdash; {run.uniqueDiscovery}</p>
        </CardContent>
        <div className="p-4 pt-0">
            <Button className="w-full" variant="secondary" onClick={() => onExport(run)} disabled={isExporting}>
                {isExporting ? <Loader2 className="animate-spin" /> : <Share2 />}
                Export to Fart Journal
            </Button>
        </div>
    </Card>
);

export default function ChroniclePage() {
    const { firestore, user } = useFirebase();
    const { toast } = useToast();
    const [isExporting, setIsExporting] = useState<string | null>(null);
    const [exportedUrl, setExportedUrl] = useState<string | null>(null);

    const runsQuery = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        const runsRef = collection(firestore, `users/${user.uid}/runChronicles`);
        // Order by creation date, newest first
        return query(runsRef, orderBy("createdAt", "desc"));
    }, [firestore, user]);

    const { data: runs, isLoading } = useCollection(runsQuery);
    
    const handleExport = async (run: any) => {
        if (!user) return;
        setIsExporting(run.id);
        setExportedUrl(null);

        try {
            const summaryResult = await generateRunSummary({
                characterClass: run.characterClass,
                moralAlignment: run.moralAlignment,
                enemiesKilled: run.enemiesKilled,
                enemiesSpared: run.enemiesSpared,
                ending: run.ending,
                uniqueDiscovery: run.uniqueDiscovery,
            });

            const summaryText = `${summaryResult.title}\n\n${summaryResult.summary}`;
            const storage = getStorage();
            const storageRef = ref(storage, `user_uploads/${user.uid}/runs/${run.id}.txt`);
            
            await uploadString(storageRef, summaryText, 'raw', { contentType: 'text/plain;charset=utf-8' });

            const url = await getDownloadURL(storageRef);
            setExportedUrl(url);

            toast({
                title: "Legend Exported!",
                description: "Your epic tale has been saved to the Fart Journal.",
                className: 'bg-primary text-primary-foreground',
            });

        } catch (error) {
            console.error("Failed to export run:", error);
            toast({ title: "Export Failed", description: "The Chronicler is busy. Please try again.", variant: "destructive" });
        } finally {
            setIsExporting(null);
        }
    };


    const renderRuns = () => {
        if (isLoading) {
            return <div className="flex justify-center py-8"><Loader2 className="h-8 w-8 animate-spin" /></div>;
        }
        if (!runs || runs.length === 0) {
            return <p className="text-muted-foreground text-center py-8">No chronicles yet. Your legend awaits!</p>
        }
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {runs.map((run) => (
                    <RunCard 
                        key={run.id} 
                        run={run}
                        onExport={handleExport}
                        isExporting={isExporting === run.id}
                    />
                ))}
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="py-12">
                <GameContainer>
                    <div className="mb-4">
                        <Button asChild variant="outline">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Main Menu
                            </Link>
                        </Button>
                    </div>
                    <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg shadow-primary/10">
                        <CardHeader className="text-center">
                            <CardTitle className="font-headline text-4xl text-glow flex items-center justify-center gap-2">
                                <BookOpen className="h-8 w-8" /> Chronicles of Passing Gas
                            </CardTitle>
                            <CardDescription>Your legend, etched in the annals of absurdity.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 p-4 sm:p-6">
                            {exportedUrl && (
                                <Alert className="border-green-500/50 bg-green-900/30">
                                    <AlertTitle className="text-green-300">Journal Entry Saved!</AlertTitle>
                                    <AlertDescription>
                                        Your legend is now saved. <a href={exportedUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold">View your story</a> or share it with your friends!
                                    </AlertDescription>
                                </Alert>
                            )}
                            <div>
                                <h3 className="font-headline text-2xl mb-4">Completed Runs</h3>
                                {renderRuns()}
                            </div>
                        </CardContent>
                    </Card>
                </GameContainer>
            </main>
        </>
    );
}
