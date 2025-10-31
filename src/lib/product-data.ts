
export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    imageHint: string;
    stripePaymentLink: string;
    status: 'available' | 'limited' | 'sold_out';
};

export const PRODUCTS: Product[] = [
    {
        id: "adventurer-tee",
        title: "Adventurer Tee",
        description: "Soft cotton tee for bold explorers.",
        price: 19.99,
        imageUrl: "https://picsum.photos/seed/adventurer-tee/800/800",
        imageHint: "graphic t-shirt",
        stripePaymentLink: "https://buy.stripe.com/8x26oHbXp7Mg3tC76i8bS0g",
        status: "available"
    },
    {
        id: "mana-mug",
        title: "Mana Mug",
        description: "Restores +10 energy every morning.",
        price: 14.99,
        imageUrl: "https://picsum.photos/seed/mana-mug/800/800",
        imageHint: "ceramic mug",
        stripePaymentLink: "https://buy.stripe.com/8x26oHbXp7Mg3tC76i8bS0g",
        status: "limited"
    },
    {
        id: "epic-quest-map",
        title: "Epic Quest Map",
        description: "Unfold your next great adventure.",
        price: 24.99,
        imageUrl: "https://picsum.photos/seed/epic-quest-map/800/800",
        imageHint: "ancient map",
        stripePaymentLink: "https://buy.stripe.com/8x26oHbXp7Mg3tC76i8bS0g",
        status: "available"
    }
];

// This is a placeholder function to seed data.
// In a real application, you would have a more robust seeding script
// or use the Firebase console to manage this data.
// For now, we can use this to add the data if the collection is empty.
import { collection, getDocs, writeBatch } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

export async function seedProducts(db: Firestore) {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);

    if (snapshot.empty) {
        console.log("No products found, seeding initial data...");
        const batch = writeBatch(db);
        PRODUCTS.forEach(product => {
            const { id, ...data } = product;
            const docRef = collection(db, 'products').doc(id);
            batch.set(docRef, data);
        });
        await batch.commit();
        console.log("Seeding complete.");
    } else {
        console.log("Products collection already exists. Skipping seed.");
    }
}

    