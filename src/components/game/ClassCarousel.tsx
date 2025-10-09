"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CLASSES, CharacterClass } from "@/lib/game-data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, ShieldCheck, Swords, Zap } from "lucide-react";

function ClassCard({ character, isActive }: { character: CharacterClass; isActive: boolean }) {
  return (
    <Card className={cn(
      "h-full w-full overflow-hidden transition-all duration-300",
      isActive ? "border-primary shadow-lg shadow-primary/20" : "border-muted/50"
    )}>
      <CardContent className="relative flex flex-col items-center justify-center p-0 h-full">
        <Image
          src={character.image}
          alt={character.name}
          width={600}
          height={800}
          className={cn(
            "object-cover h-full w-full transition-all duration-500",
            isActive ? "scale-100" : "scale-110 opacity-70"
          )}
          data-ai-hint={character.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-headline text-3xl font-bold text-glow">{character.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{character.playstyle}</p>
          
          <div className="flex gap-2 mb-4 flex-wrap">
              <Badge variant="secondary" className="gap-1"><Swords className="h-3 w-3" /> ATK: {character.stats.attack}</Badge>
              <Badge variant="secondary" className="gap-1"><ShieldCheck className="h-3 w-3" /> DEF: {character.stats.defense}</Badge>
              <Badge variant="secondary" className="gap-1"><Zap className="h-3 w-3" /> SPD: {character.stats.speed}</Badge>
          </div>
          
          {isActive && (
            <Button asChild size="lg" className="w-full">
              <Link href={`/character-creation/${character.id}`}>
                <Check className="mr-2 h-4 w-4" /> Choose {character.name}
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function ClassCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {CLASSES.map((character, index) => (
            <CarouselItem key={character.id} className="md:basis-1/2 lg:basis-1/3 h-[70vh] max-h-[700px] p-4">
              <ClassCard character={character} isActive={current === index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex" />
        <CarouselNext className="flex" />
      </Carousel>
    </div>
  );
}
