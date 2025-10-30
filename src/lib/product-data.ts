
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
        description: "A soft, comfortable 100% cotton shirt featuring the iconic Poot Quest logo. Perfect for everyday wear.",
        price: 24.99,
        imageUrl: "https://picsum.photos/seed/tee/600/400",
        imageHint: "t-shirt",
        stripePaymentLink: "https://buy.stripe.com/test_...your_link_here",
        status: "available",
    },
    {
        id: "mana-mug",
        title: "Mana Mug",
        description: "A sturdy ceramic mug with a mysterious, glowing rune design. Holds your favorite potion (or coffee).",
        price: 14.99,
        imageUrl: "https://picsum.photos/seed/mug/600/400",
        imageHint: "coffee mug",
        stripePaymentLink: "https://buy.stripe.com/test_...your_link_here",
        status: "limited",
    },
    {
        id: "boss-hoodie",
        title: "Boss Hoodie",
        description: "A premium, dark-mode pullover hoodie with a subtle, high-quality print of the final boss. Stay warm in the darkest dungeons.",
        price: 39.99,
        imageUrl: "https://picsum.photos/seed/hoodie/600/400",
        imageHint: "hoodie sweatshirt",
        stripePaymentLink: "https://buy.stripe.com/test_...your_link_here",
        status: "available",
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

    