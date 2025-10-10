
"use client";

import * as React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import placeholderData from "@/lib/placeholder-images.json";
import { useUser, useAuth } from "@/firebase";
import { initiateAnonymousSignIn } from "@/firebase/non-blocking-login";

const throneImage = placeholderData.placeholderImages.find(p => p.id === "splash-throne");

const Bubble = ({ id }: { id: number }) => {
  const [style, setStyle] = React.useState({});

  useEffect(() => {
    const size = 2 + Math.random() * 4;
    const left = Math.random() * 100;
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;

    setStyle({
      width: `${size}rem`,
      height: `${size}rem`,
      left: `${left}vw`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
  }, [id]);

  return <div className="bubble" style={style}></div>;
};

export function SplashScreen() {
  const [bubbles, setBubbles] = React.useState<number[]>([]);
  const { user, isUserLoading } = useUser();
  const auth = useAuth();

  useEffect(() => {
    const numBubbles = 20;
    setBubbles(Array.from({ length: numBubbles }, (_, i) => i));
  }, []);

  // Automatically sign in anonymously if not logged in
  useEffect(() => {
    if (!isUserLoading && !user && auth) {
      initiateAnonymousSignIn(auth);
    }
  }, [isUserLoading, user, auth]);

  const renderContent = () => {
    // Show loader while checking auth state or while the user object is being populated after sign-in
    if (isUserLoading || !user) {
      return <Loader2 className="h-12 w-12 animate-spin text-primary" />;
    }

    // Once user object is available, show the "Begin" button
    if (user) {
      return (
        <Button asChild size="lg" className="animate-pulse">
          <Link href="/character-creation">
            Begin Your Journey <ArrowRight className="ml-2" />
          </Link>
        </Button>
      );
    }
    
    // Fallback, though should be covered by the loading state
    return <Loader2 className="h-12 w-12 animate-spin text-primary" />;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden p-4">
      {bubbles.map((id) => (
        <Bubble key={id} id={id} />
      ))}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 animate-pulse-glow rounded-full">
            {throneImage && (
                <Image
                    src={throneImage.imageUrl}
                    alt={throneImage.description}
                    width={300}
                    height={300}
                    className="rounded-full object-cover border-4 border-primary/50"
                    data-ai-hint={throneImage.imageHint}
                    priority
                />
            )}
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-glow mb-2">
          Poot Quest
        </h1>
        <p className="font-headline text-xl md:text-2xl text-primary mb-8">
          The Land of Never-Ending Asses
        </p>
        <div className="min-h-[52px] flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
