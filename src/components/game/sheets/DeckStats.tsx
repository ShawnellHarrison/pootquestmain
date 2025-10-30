
'use client';

import { useMemo } from 'react';
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import type { CardData } from '@/lib/game-data';

interface DeckStatsProps {
  cards: CardData[];
}

export function DeckStats({ cards }: DeckStatsProps) {
  const manaCurveData = useMemo(() => {
    const curve: { [key: number]: number } = {};
    for (const card of cards) {
      curve[card.manaCost] = (curve[card.manaCost] || 0) + 1;
    }
    
    const maxCost = Math.max(7, ...Object.keys(curve).map(Number));
    const data = [];
    for (let i = 0; i <= maxCost; i++) {
      data.push({ cost: `${i}`, count: curve[i] || 0 });
    }
    return data;
  }, [cards]);

  const chartConfig = {
    count: {
      label: 'Count',
      color: 'hsl(var(--primary))',
    },
  };

  return (
    <Card className="p-4 bg-muted/30">
      <h3 className="font-headline text-lg mb-2 text-center">Mana Curve</h3>
      <div className="h-40 w-full">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart data={manaCurveData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <XAxis
              dataKey="cost"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              allowDecimals={false}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={4}>
                <LabelList dataKey="count" position="top" offset={5} fontSize={12} fill="hsl(var(--foreground))" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  );
}
