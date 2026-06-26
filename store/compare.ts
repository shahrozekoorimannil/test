import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CompareItem {
  productId: string;
  name: string;
  price: number;
  imageUrl?: string;
  slug: string;
  category: string;
  brand: string;
  specifications: Record<string, string>;
}

interface CompareStore {
  items: CompareItem[];
  addItem: (item: CompareItem) => void;
  removeItem: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        if (state.items.length >= 4) {
          // Max 4 items to compare
          return state;
        }
        if (!state.items.find(i => i.productId === item.productId)) {
          return { items: [...state.items, item] };
        }
        return state;
      }),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.productId !== productId)
      })),
      isInCompare: (productId) => {
        return get().items.some(i => i.productId === productId);
      },
      clearCompare: () => set({ items: [] })
    }),
    {
      name: 'compare-storage',
    }
  )
);
