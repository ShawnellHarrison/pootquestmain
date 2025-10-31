'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection, query } from 'firebase/firestore';
import { Loader2, ShoppingBag, ExternalLink, Zap } from 'lucide-react';
import { Badge } from '../ui/badge';
import StripeBuyButton from './StripeBuyButton';

type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    imageHint: string;
    stripePaymentLink: string;
    buyButtonId: string;
    publishableKey: string;
    status: 'available' | 'limited' | 'sold_out';
};

const ProductCard = ({ product }: { product: Product }) => (
    <Card className="flex flex-col bg-card/80 border border-border/50 overflow-hidden">
        <div className="relative aspect-video">
            <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-cover"
                data-ai-hint={product.imageHint}
            />
            {product.status === 'limited' && (
                <Badge variant="destructive" className="absolute top-2 right-2 animate-pulse gap-1">
                    <Zap className="h-3 w-3" /> Limited Drop
                </Badge>
            )}
        </div>
        <CardHeader>
            <CardTitle className="font-headline text-xl text-glow">{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
        <CardFooter className="flex justify-between items-center">
            <p className="text-2xl font-bold font-code text-primary">${product.price.toFixed(2)}</p>
            {product.status !== 'sold_out' ? (
                <StripeBuyButton 
                    buyButtonId={product.buyButtonId} 
                    publishableKey={product.publishableKey}
                />
            ) : (
                 <Button disabled={true}>
                    Sold Out
                </Button>
            )}
        </CardFooter>
    </Card>
);

export function StoreSheet() {
    const { firestore } = useFirebase();

    const productsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'products'));
    }, [firestore]);

    const { data: products, isLoading } = useCollection(productsQuery);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative group">
                    <ShoppingBag />
                    <span className="sr-only">Open Store</span>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary/80"></span>
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-3xl overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="font-headline text-4xl text-glow flex items-center gap-2">
                        <ShoppingBag className="h-8 w-8" />
                        The Emporium
                    </SheetTitle>
                    <SheetDescription>
                        Grab some legendary loot from the real world. Ships worldwide!
                    </SheetDescription>
                </SheetHeader>
                <div className="py-8">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {products?.map((product) => (
                                <ProductCard key={product.id} product={product as Product} />
                            ))}
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
