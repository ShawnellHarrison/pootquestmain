"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import placeholderData from "@/lib/placeholder-images.json";

const throneImage = placeholderData.placeholderImages.find(p => p.id === "splash-throne");

const Bubble = ({ id }: { id: number }) => {
  const [style, setStyle] = useState({});

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
  const [bubbles, setBubbles] = useState<number[]>([]);

  useEffect(() => {
    const numBubbles = 20;
    setBubbles(Array.from({ length: numBubbles }, (_, i) => i));
  }, []);

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
          Boot Quest
        </h1>
        <p className="font-headline text-xl md:text-2xl text-primary mb-8">
          The Land of Never-Ending Asses
        </p>
        <Button asChild size="lg" className="animate-pulse">
          <Link href="/character-creation">
            Begin Your Journey <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
