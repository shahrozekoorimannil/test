import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ViewedItem {
  productId: string;
  name: string;
  price: number;
  imageUrl?: string;
  slug: string;
  viewedAt: number;
}

interface RecentlyViewedStore {
  items: ViewedItem[];
  addItem: (item: Omit<ViewedItem, 'viewedAt'>) => void;
  clearHistory: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => {
        const newItem = { ...item, viewedAt: Date.now() };
        // Remove item if it already exists to put it at the top
        const filtered = state.items.filter(i => i.productId !== item.productId);
        // Keep only the 10 most recent
        const updated = [newItem, ...filtered].slice(0, 10);
        return { items: updated };
      }),
      clearHistory: () => set({ items: [] })
    }),
    {
      name: 'recently-viewed-storage',
    }
  )
);
