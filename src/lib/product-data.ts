import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

export type Product = {
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

export const PRODUCTS: Product[] = [
    {
        "id": "adventurer-tee",
        "title": "Adventurer Tee",
        "description": "Soft cotton tee for bold explorers.",
        "price": 19.99,
        "imageUrl": "https://picsum.photos/seed/adventurer-tee/800/800",
        "imageHint": "graphic t-shirt",
        "stripePaymentLink": "https://buy.stripe.com/test_5kAdSfa21g5v85a7ss",
        "buyButtonId": "buy_btn_1SOGGFEjTiKwQHWzk29ON4YI",
        "publishableKey": "pk_live_51J1H3xEjTiKwQHWz5DuUnk4wPkPKoVcQ0HjlWIyW3iXxNzJe21lrZKYtlnU1dhio4f82DQzeBhJKlAVN9I40pkvb005oa4LQ3F",
        "status": "available"
    },
    {
        "id": "mana-mug",
        "title": "Mana Mug",
        "description": "Restores +10 energy every morning.",
        "price": 14.99,
        "imageUrl": "https://picsum.photos/seed/mana-mug/800/800",
        "imageHint": "ceramic mug",
        "stripePaymentLink": "https://buy.stripe.com/test_5kAdSfa21g5v85a7ss",
        "buyButtonId": "buy_btn_1SOGGFEjTiKwQHWzk29ON4YI",
        "publishableKey": "pk_live_51J1H3xEjTiKwQHWz5DuUnk4wPkPKoVcQ0HjlWIyW3iXxNzJe21lrZKYtlnU1dhio4f82DQzeBhJKlAVN9I40pkvb005oa4LQ3F",
        "status": "limited"
    },
    {
        "id": "epic-quest-map",
        "title": "Epic Quest Map",
        "description": "Unfold your next great adventure.",
        "price": 24.99,
        "imageUrl": "https://picsum.photos/seed/epic-quest-map/800/800",
        "imageHint": "ancient map",
        "stripePaymentLink": "https://buy.stripe.com/test_5kAdSfa21g5v85a7ss",
        "buyButtonId": "buy_btn_1SOGGFEjTiKwQHWzk29ON4YI",
        "publishableKey": "pk_live_51J1H3xEjTiKwQHWz5DuUnk4wPkPKoVcQ0HjlWIyW3iXxNzJe21lrZKYtlnU1dhio4f82DQzeBhJKlAVN9I40pkvb005oa4LQ3F",
        "status": "available"
    },
    {
        "id": "tome-of-forbidden-farts",
        "title": "Tome of Forbidden Farts",
        "description": "Unlock ancient and powerful wind-breaking techniques. (Signed by the author).",
        "price": 49.99,
        "imageUrl": "https://picsum.photos/seed/tome-of-farts/800/800",
        "imageHint": "ancient book",
        "stripePaymentLink": "https://buy.stripe.com/test_5kAdSfa21g5v85a7ss",
        "buyButtonId": "buy_btn_1SOGGFEjTiKwQHWzk29ON4YI",
        "publishableKey": "pk_live_51J1H3xEjTiKwQHWz5DuUnk4wPkPKoVcQ0HjlWIyW3iXxNzJe21lrZKYtlnU1dhio4f82DQzeBhJKlAVN9I40pkvb005oa4LQ3F",
        "status": "sold_out"
    }
];

export async function seedProducts(db: Firestore) {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);

    if (snapshot.empty) {
        console.log("No products found, seeding initial data...");
        const batch = writeBatch(db);
        PRODUCTS.forEach(product => {
            const { id, ...data } = product;
            const docRef = doc(db, 'products', id);
            batch.set(docRef, data);
        });
        await batch.commit();
        console.log("Seeding complete.");
    } else {
        console.log("Products collection already exists. Skipping seed.");
    }
}
