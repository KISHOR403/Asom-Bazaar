"use client"
import Link from "next/link"
import { X, ShoppingBag } from "lucide-react"
import { formatPrice } from "../../lib/utils"

export default function CartDrawer({ open, onClose, items = [] }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      {/* Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col h-full">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              Shopping Cart
            </h2>
            <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-500 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <span className="text-5xl mb-4">🛒</span>
                <p className="text-slate-500 font-medium">Your cart is empty</p>
                <p className="text-xs text-slate-400 mt-1">Start adding beautiful Assamese crafts!</p>
              </div>
            ) : (
              <p className="text-sm text-slate-500">Cart items go here...</p>
            )}
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
            <div className="flex justify-between font-bold text-slate-900">
              <span>Subtotal</span>
              <span>{formatPrice(0)}</span>
            </div>
            <Link 
              href="/checkout"
              onClick={onClose}
              className="w-full flex items-center justify-center bg-primary hover:bg-primary/95 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
