"use client"
import * as React from "react"
import { ShoppingBag, Heart, Star, Award, ShieldCheck } from "lucide-react"
import { formatPrice } from "../../lib/utils"

export default function ProductDetails({ product }) {
  if (!product) return null

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
        <h1 className="text-3xl font-bold font-heading text-slate-900">{product.title}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-amber-500 text-sm">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 font-semibold text-slate-600">{product.rating || 5.0}</span>
          </div>
          <span className="text-xs text-slate-400">|</span>
          <span className="text-xs text-slate-500 font-semibold">Artisan: Sualkuchi Weavers</span>
        </div>
      </div>

      <div className="border-t border-b border-slate-100 py-4">
        <span className="text-3xl font-extrabold text-slate-900">{formatPrice(product.price)}</span>
        <p className="text-xs text-slate-400 mt-1">Inclusive of all taxes & fair-trade artisan commission</p>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">
        {product.description || "Authentic Handcrafted item. This item is hand-loomed and represents months of skilled workmanship. By purchasing, you directly support local artisan families in Assam."}
      </p>

      {/* Trust Items */}
      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
        <div className="flex gap-2 items-center">
          <Award className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold text-slate-700">Silk Mark Certified</span>
        </div>
        <div className="flex gap-2 items-center">
          <ShieldCheck className="h-5 w-5 text-secondary" />
          <span className="text-xs font-semibold text-slate-700">Handloom Guaranteed</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
          <ShoppingBag className="h-5 w-5" />
          Add to Cart
        </button>
        <button className="p-3 rounded-lg border border-slate-200 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-500 text-slate-400 transition-all">
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
