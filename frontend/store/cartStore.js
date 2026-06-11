import { create } from "zustand"

export const useCartStore = create((set, get) => ({
  items: [],
  
  addItem: (product, quantity = 1) => {
    const currentItems = get().items
    const existingIndex = currentItems.findIndex((item) => item.id === product.id)

    if (existingIndex > -1) {
      const updatedItems = [...currentItems]
      updatedItems[existingIndex].quantity += quantity
      set({ items: updatedItems })
    } else {
      set({ items: [...currentItems, { ...product, quantity }] })
    }
  },

  removeItem: (productId) => {
    set({ items: get().items.filter((item) => item.id !== productId) })
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId)
      return
    }
    set({
      items: get().items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })
  },

  clearCart: () => set({ items: [] }),

  getSubtotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  },

  getCartCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0)
  }
}))
