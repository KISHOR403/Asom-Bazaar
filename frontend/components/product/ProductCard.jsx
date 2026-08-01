"use client"
import * as React from "react"
import Link from "next/link"
import { Star, Heart, ShoppingBag, Eye, ShieldCheck, Check } from "lucide-react"
import { formatPrice } from "../../lib/utils"
import { useCartStore } from "../../store/cartStore"

// Fallback image map for demo products using actual uploaded photos
const IMAGE_FALLBACK_MAP = {
  "🧣": "/images/eri_silk_mekhela.png",
  "💍": "/images/jonbiri_necklace.png",
  "🧺": "/images/bamboo_lamp.png",
  "🥻": "/images/mekhela_silk_hero.png",
  "🪡": "/images/handwoven_gamosa.png",
  "🌿": "/images/muga_silk_scarf.png",
}

export default function ProductCard({ product }) {
  const [imgLoaded, setImgLoaded] = React.useState(false)
  const [isWishlisted, setIsWishlisted] = React.useState(false)
  const [added, setAdded] = React.useState(false)
  const addItem = useCartStore((state) => state.addItem)

  if (!product) return null

  // Determine effective image src
  let displayImage = product.image
  if (!displayImage || IMAGE_FALLBACK_MAP[displayImage]) {
    displayImage = IMAGE_FALLBACK_MAP[displayImage] || "/images/eri_silk_mekhela.png"
  } else if (!displayImage.startsWith("/") && !displayImage.startsWith("http")) {
    displayImage = "/images/eri_silk_mekhela.png"
  }

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : product.discount || null

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const toggleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted((prev) => !prev)
  }

  return (
    <div className="group relative bg-white border border-forest-100/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-forest-900/10 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between">
      
      {/* Product Image Container */}
      <div className="aspect-[4/4] bg-gradient-to-b from-ivory to-forest-50/30 relative overflow-hidden flex items-center justify-center">
        
        {/* Main Image */}
        <img
          src={displayImage}
          alt={product.title}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
            imgLoaded ? "opacity-100" : "opacity-0 blur-sm"
          }`}
        />

        {/* Subtle Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <div className="flex flex-col gap-1 items-start pointer-events-auto">
            {product.badge && (
              <span className="bg-muga text-white text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                {product.badge}
              </span>
            )}
            {discountPercent && discountPercent > 0 && (
              <span className="bg-rose-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                -{discountPercent}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className={`pointer-events-auto h-9 w-9 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center shadow-md active:scale-90 ${
              isWishlisted
                ? "bg-rose-50 text-rose-500 border border-rose-200"
                : "bg-white/80 hover:bg-white text-forest-400 hover:text-rose-500 border border-white/40"
            }`}
            title="Add to Wishlist"
          >
            <Heart className={`h-4.5 w-4.5 ${isWishlisted ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* GI Tag / Category Pill (Bottom of Image) */}
        {product.category && (
          <div className="absolute bottom-3 left-3.5 z-10 bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-forest border border-forest-100 shadow-sm flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-muga" />
            <span>{product.category}</span>
          </div>
        )}

        {/* Quick Actions Hover Drawer */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-white/95 backdrop-blur-md hover:bg-white text-forest font-heading text-xs font-bold py-2.5 rounded-xl shadow-lg border border-forest-100/50 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-muga" />
            Quick View
          </Link>
          <button
            onClick={handleAddToCart}
            className={`flex-1 font-heading text-xs font-bold py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-all ${
              added
                ? "bg-emerald-600 text-white"
                : "bg-forest text-white hover:bg-forest-600"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-muga" /> Add
              </>
            )}
          </button>
        </div>

      </div>

      {/* Product Content */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          {/* Artisan Credit */}
          {product.artisan && (
            <p className="text-[11px] font-semibold text-muga uppercase tracking-wider line-clamp-1">
              By {product.artisan}
            </p>
          )}

          {/* Title */}
          <h3 className="font-heading text-base font-bold text-forest leading-snug group-hover:text-muga transition-colors line-clamp-1">
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </h3>
        </div>

        {/* Rating and Price row */}
        <div className="pt-2 border-t border-forest-100/30 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-extrabold text-forest text-lg">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-forest-300 line-through font-medium">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 bg-forest-50 px-2.5 py-1 rounded-full border border-forest-100/40">
              <Star className="h-3.5 w-3.5 fill-muga text-muga" />
              <span className="text-xs font-bold text-forest">{product.rating}</span>
              {product.reviews && (
                <span className="text-[10px] text-forest-400 font-medium">({product.reviews})</span>
              )}
            </div>
          )}
        </div>

        {/* CTA Button (Default visible on non-touch / mobile view) */}
        <button
          onClick={handleAddToCart}
          className={`w-full mt-2 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold font-heading transition-all shadow-sm border ${
            added
              ? "bg-emerald-600 text-white border-emerald-600"
              : "bg-forest-50/70 hover:bg-forest hover:text-white border-forest-100 text-forest-800"
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Item Added to Cart
            </>
          ) : (
            <>
              <ShoppingBag className="h-4 w-4 text-muga" /> Add to Cart
            </>
          )}
        </button>

      </div>
    </div>
  )
}
