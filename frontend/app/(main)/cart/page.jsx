"use client"
import * as React from "react"
import Link from "next/link"
import CartItem from "../../../components/cart/CartItem"
import CartSummary from "../../../components/cart/CartSummary"
import Breadcrumb from "../../../components/common/Breadcrumb"

const initialItems = [
  { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, category: "Mekhela Chador", quantity: 1, image: "🧣" },
  { id: 3, title: "Assamese Jonbiri Pendant", price: 3200, category: "Jewellery", quantity: 2, image: "💍" }
]

export default function CartPage() {
  const [items, setItems] = React.useState(initialItems)

  const handleQuantity = (id, q) => {
    if (q <= 0) {
      handleRemove(id)
      return
    }
    setItems(items.map(item => item.id === id ? { ...item, quantity: q } : item))
  }

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.05) // 5% GST
  const shipping = subtotal > 1000 ? 0 : 150

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb items={[{ label: "Cart" }]} />
      <h1 className="text-2xl font-bold font-heading text-slate-800 mt-6 mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-slate-200 rounded-xl space-y-4">
          <span className="text-5xl block">🛒</span>
          <h2 className="text-lg font-bold text-slate-700">Your cart is empty</h2>
          <p className="text-xs text-slate-400">Add some authentic Assamese creations to get started!</p>
          <Link href="/products" className="inline-block bg-primary hover:bg-primary/95 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors">
            Shop Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            {items.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={(q) => handleQuantity(item.id, q)} 
                onRemove={() => handleRemove(item.id)} 
              />
            ))}
          </div>
          <div>
            <CartSummary subtotal={subtotal} tax={tax} shipping={shipping} />
          </div>
        </div>
      )}
    </div>
  )
}
