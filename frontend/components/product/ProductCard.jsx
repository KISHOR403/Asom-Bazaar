import Link from "next/link"
import { Star, Heart, ShoppingBag } from "lucide-react"
import { formatPrice } from "../../lib/utils"

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="group relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      {/* Product Image */}
      <div className="aspect-square bg-slate-100 flex items-center justify-center text-6xl relative">
        {product.image || "🧣"}
        {product.category && (
          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded text-slate-600">
            {product.category}
          </div>
        )}
        <button className="absolute top-2 left-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-slate-400 hover:text-rose-500 transition-colors">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-slate-800 group-hover:text-primary transition-colors text-sm line-clamp-1">
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900">{formatPrice(product.price)}</span>
          {product.rating && (
            <div className="flex items-center text-amber-500 text-xs">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="ml-1 font-semibold text-slate-600">{product.rating}</span>
            </div>
          )}
        </div>
        <button className="w-full mt-2 flex items-center justify-center gap-2 border border-slate-200 hover:border-primary hover:bg-primary hover:text-white rounded-lg py-2 text-xs font-semibold transition-all text-slate-700">
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
