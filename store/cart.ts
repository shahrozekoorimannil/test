import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string; // Cart item unique ID
  productId: string;
  variantId?: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  sku?: string;
  variantTitle?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getSummary: () => { subtotal: number; totalItems: number };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.productId === item.productId && i.variantId === item.variantId);
        if (existingItem) {
          return {
            items: state.items.map(i => 
              (i.productId === item.productId && i.variantId === item.variantId) 
                ? { ...i, quantity: i.quantity + item.quantity } 
                : i
            )
          };
        }
        return { items: [...state.items, item] };
      }),
      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id)
      })),
      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(i => i.id === id ? { ...i, quantity } : i)
      })),
      clearCart: () => set({ items: [] }),
      getSummary: () => {
        const items = get().items;
        return {
          subtotal: items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
          totalItems: items.reduce((acc, item) => acc + item.quantity, 0)
        };
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);
