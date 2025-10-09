import { GameContainer } from "@/components/game/GameContainer";
import { Header } from "@/components/game/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lock, BookOpen } from "lucide-react";

const RunCard = ({ title, details, isLocked }: { title: string, details: { [key: string]: string }, isLocked?: boolean }) => (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {isLocked ? (
                <div className="flex flex-col items-center justify-center text-muted-foreground py-8">
                    <Lock className="h-8 w-8 mb-2" />
                    <p>???</p>
                </div>
            ) : (
                <ul className="space-y-1 font-code text-sm">
                    {Object.entries(details).map(([key, value]) => (
                        <li key={key}>
                            <span className="text-muted-foreground">{key}: </span>
                            <span className="text-foreground">{value}</span>
                        </li>
                    ))}
                </ul>
            )}
        </CardContent>
    </Card>
);

export default function ChroniclePage() {
  const runs = [
    {
      title: "Run #1: \"The Merciful Rogue\"",
      details: {
        "Classes": "Rogue",
        "Moral Alignment": "Chaotic Good",
        "Spared": "7 enemies",
        "Killed": "12 enemies",
        "Secret Rooms": "3/8",
        "Ending": "Betrayed the Guild",
        "Unique Discovery": "\"Goblin Language\"",
      }
    },
    {
      title: "Run #2: \"The Brutal Paladin\"",
      details: {
        "Classes": "Paladin",
        "Moral Alignment": "Lawful Evil (!)",
        "Achievements": "\"Purity Through Fire\"",
        "Ending": "??? (Locked)",
      }
    }
  ];

  const secrets = [
    "??? in the Boardroom",
    "??? Barbarian True Ending",
    "??? Tycoon's Hidden Vault",
  ];

  return (
    <>
      <Header />
      <main className="py-12">
        <GameContainer>
            <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg shadow-primary/10">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-4xl text-glow flex items-center justify-center gap-2">
                        <BookOpen className="h-8 w-8"/> Chronicles of Passing Gas
                    </CardTitle>
                    <CardDescription>Your legend, etched in the annals of absurdity.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="font-headline text-2xl">Completed Runs</h3>
                        {runs.map((run, index) => <RunCard key={index} title={run.title} details={run.details} />)}
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
