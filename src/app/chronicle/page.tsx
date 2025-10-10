'use client';

import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lock, BookOpen, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCollection, useFirebase, useMemoFirebase } from "@/firebase";
import { collection } from "firebase/firestore";

const RunCard = ({ run, isLocked }: { run: any, isLocked?: boolean }) => (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">{run.title || `Run #${run.id}`}</CardTitle>
        </CardHeader>
        <CardContent>
            {isLocked ? (
                <div className="flex flex-col items-center justify-center text-muted-foreground py-8">
                    <Lock className="h-8 w-8 mb-2" />
                    <p>???</p>
                </div>
            ) : (
                <ul className="space-y-1 font-code text-sm">
                    {Object.entries(run).map(([key, value]) => (
                        <li key={key}>
                            <span className="text-muted-foreground capitalize">{key}: </span>
                            <span className="text-foreground">{String(value)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </CardContent>
    </Card>
);

export default function ChroniclePage() {
    const { firestore, user } = useFirebase();

    const runsRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return collection(firestore, `users/${user.uid}/runChronicles`);
    }, [firestore, user]);

    const { data: runs, isLoading } = useCollection(runsRef);

    const secrets = [
        "??? in the Boardroom",
        "??? Barbarian True Ending",
        "??? Tycoon's Hidden Vault",
    ];

    const renderRuns = () => {
        if (isLoading) {
            return <div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
        }
        if (!runs || runs.length === 0) {
            return <p className="text-muted-foreground text-center">No chronicles yet. Your legend awaits!</p>
        }
        return runs.map((run) => <RunCard key={run.id} run={run} />);
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
                        <CardContent className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="font-headline text-2xl">Completed Runs</h3>
                                {renderRuns()}
                            </div>
                            <Separator />
                            <div className="space-y-4">
                                <h3 className="font-headline text-2xl">Secrets Remaining: 23</h3>
                                <ul className="list-disc list-inside text-muted-foreground font-code text-sm space-y-1">
                                    {secrets.map((secret, index) => <li key={index}>{secret}</li>)}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </GameContainer>
            </main>
        </>
    );
}
