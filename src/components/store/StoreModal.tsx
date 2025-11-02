
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection, query } from 'firebase/firestore';
import { Loader2, ShoppingBag, Zap, Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import StripeBuyButton from './StripeBuyButton';
import { Separator } from '../ui/separator';

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

export function StoreModal() {
    const { firestore } = useFirebase();

    const productsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'products'));
    }, [firestore]);

    const { data: products, isLoading } = useCollection(productsQuery);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="relative group">
                    <ShoppingBag />
                    <span className="sr-only">Open Store</span>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary/80"></span>
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="font-headline text-4xl text-glow flex items-center gap-2">
                        <ShoppingBag className="h-8 w-8" />
                        The Emporium
                    </DialogTitle>
                    <DialogDescription>
                        Grab some legendary loot from the real world. Ships worldwide!
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-8 max-h-[80vh] overflow-y-auto pr-2">
                    <div>
                        <h3 className="font-headline text-2xl mb-4 text-glow flex items-center gap-2">
                            <Star className="text-yellow-400" /> Featured Item
                        </h3>
                         <div className="p-6 rounded-lg border bg-card/50">
                            <h2 className="font-headline text-2xl mb-2">Adventurer Tee</h2>
                            <p className="text-muted-foreground mb-4">The official gear for any self-respecting Poot Quester. 100% combed cotton.</p>
                            <StripeBuyButton
                                buyButtonId="buy_btn_1SOGGFEjTiKwQHWzk29ON4YI"
                                publishableKey="pk_live_51J1H3xEjTiKwQHWz5DuUnk4wPkPKoVcQ0HjlWIyW3iXxNzJe21lrZKYtlnU1dhio4f82DQzeBhJKlAVN9I40pkvb005oa4LQ3F"
                            />
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="font-headline text-2xl mb-4 text-glow">All Wares</h3>
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
                </div>
            </DialogContent>
        </Dialog>
    );
}
