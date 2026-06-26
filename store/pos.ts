import { create } from "zustand";

interface POSItem {
  id: string; // unique cart item id
  productId: string;
  variantId: string;
  name: string;
  variantTitle: string;
  price: number;
  quantity: number;
  sku: string;
}

interface POSStore {
  items: POSItem[];
  customer: { id: string; name: string; phone: string } | null;
  paymentMethod: "CASH" | "UPI" | "CARD" | "SPLIT" | null;
  addItem: (item: Omit<POSItem, "id">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  setCustomer: (customer: { id: string; name: string; phone: string } | null) => void;
  setPaymentMethod: (method: "CASH" | "UPI" | "CARD" | "SPLIT") => void;
  clear: () => void;
  getTotals: () => { subtotal: number; tax: number; total: number };
}

export const usePosStore = create<POSStore>((set, get) => ({
  items: [],
  customer: null, // null means Walk-in Customer
  paymentMethod: null,
  
  addItem: (newItem) => {
    set((state) => {
      const existing = state.items.find(
        (i) => i.productId === newItem.productId && i.variantId === newItem.variantId
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === existing.id ? { ...i, quantity: i.quantity + newItem.quantity } : i
          ),
        };
      }
      return { items: [...state.items, { ...newItem, id: Math.random().toString(36).substr(2, 9) }] };
    });
  },

  updateQuantity: (id, quantity) => {
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    }));
  },

  removeItem: (id) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },

  setCustomer: (customer) => set({ customer }),
  
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),

  clear: () => set({ items: [], customer: null, paymentMethod: null }),

  getTotals: () => {
    const { items } = get();
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.18; // 18% GST dummy
    return { subtotal, tax, total: subtotal + tax };
  },
}));
