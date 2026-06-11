"use client"
import { useCartStore } from "../store/cartStore"

export default function useCart() {
  const store = useCartStore()

  return {
    items: store.items,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    subtotal: store.getSubtotal(),
    itemCount: store.getCartCount()
  }
}
