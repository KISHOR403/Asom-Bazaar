"use client"
import * as React from "react"
import Link from "next/link"
import { Star, Heart, ShoppingBag } from "lucide-react"
import { formatPrice } from "../../lib/utils"

export default function ProductCard({ product }) {
  const [imgLoaded, setImgLoaded] = React.useState(false)

  if (!product) return null

  const isImageFile = typeof product.image === "string" && (product.image.startsWith("/") || product.image.startsWith("http"))

  return (
    <div className="card-3d group relative bg-white border border-forest-100/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-forest-900/5 transition-all duration-500 flex flex-col justify-between">
      {/* Product Image Box */}
      <div className="aspect-square bg-forest-50/50 flex items-center justify-center relative overflow-hidden">
        {isImageFile ? (
          <img
            src={product.image}
            alt={product.title}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imgLoaded ? "opacity-100" : "opacity-0 blur-sm"
            }`}
          />
        ) : (
          <span className="text-5xl transition-transform duration-500 group-hover:scale-110">
            {product.image || "🧣"}
          </span>
        )}

        {/* Category Pill */}
        {product.category && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[10px] uppercase font-bold px-2.5 py-1 rounded-full text-forest-700 border border-forest-100 shadow-sm">
            {product.category}
          </div>
        )}

        {/* Wishlist Heart */}
        <button className="absolute top-3 left-3 p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-forest-400 hover:text-rose-500 transition-colors shadow-sm hover:scale-110">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-base font-bold text-forest group-hover:text-muga transition-colors line-clamp-1">
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </h3>
          {product.artisan && (
            <p className="text-xs text-forest-400 font-body mt-0.5">{product.artisan}</p>
          )}
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-extrabold text-forest-900 text-base">{formatPrice(product.price)}</span>
          {product.rating && (
            <div className="flex items-center text-muga text-xs font-semibold bg-muga/10 px-2 py-0.5 rounded-full">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="ml-1 text-forest-800">{product.rating}</span>
            </div>
          )}
        </div>

        <button className="w-full mt-2 flex items-center justify-center gap-2 border border-forest-200 bg-forest-50/50 hover:bg-forest hover:text-muga hover:border-forest rounded-xl py-2.5 text-xs font-bold transition-all text-forest-800 shadow-sm">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
