import { create } from "zustand"

export const useWishlistStore = create((set, get) => ({
  items: [],

  toggleWishlist: (product) => {
    const currentItems = get().items
    const exists = currentItems.some((item) => item.id === product.id)

    if (exists) {
      set({ items: currentItems.filter((item) => item.id !== product.id) })
    } else {
      set({ items: [...currentItems, product] })
    }
  },

  isInWishlist: (productId) => {
    return get().items.some((item) => item.id === productId)
  },

  clearWishlist: () => set({ items: [] })
}))
