import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WishlistItem {
  productId: string;
  name: string;
  price: number;
  imageUrl?: string;
  slug: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        if (!state.items.find(i => i.productId === item.productId)) {
          return { items: [...state.items, item] };
        }
        return state;
      }),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.productId !== productId)
      })),
      isInWishlist: (productId) => {
        return get().items.some(i => i.productId === productId);
      },
      clearWishlist: () => set({ items: [] })
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
