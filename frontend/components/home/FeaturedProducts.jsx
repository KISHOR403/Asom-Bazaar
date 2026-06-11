"use client"
import Link from "next/link"
import { Star, ShoppingCart, Heart } from "lucide-react"

const products = [
  { id: 1, title: "Eri Silk Mekhela Chador", artisan: "Purnima Bora, Sualkuchi", price: 2499, oldPrice: 3200, rating: 5, reviews: 124, image: "🧣", badge: "Bestseller" },
  { id: 2, title: "Brass Jonbiri Necklace", artisan: "Mira Devi, Nalbari", price: 1899, oldPrice: 2400, rating: 4.8, reviews: 87, image: "💍", badge: null },
  { id: 3, title: "Handwoven Gamosa Set", artisan: "Rina Kalita, Sualkuchi", price: 699, oldPrice: 999, rating: 4.9, reviews: 203, image: "🪡", badge: "Trending" },
  { id: 4, title: "Bamboo Lamp Shade", artisan: "Bimal Boro, Barpeta", price: 1299, oldPrice: 1800, rating: 4.7, reviews: 56, image: "🎍", badge: null },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Trending This Week
            </h2>
            <p className="mt-2 text-forest-400 text-base">
              Handpicked by our team, loved by customers
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-muga hover:text-muga-700 transition-colors whitespace-nowrap"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="group relative bg-white rounded-2xl border border-forest-50 overflow-hidden card-3d"
            >
              {/* Badge */}
              {prod.badge && (
                <span className="absolute top-4 left-4 z-10 bg-muga text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {prod.badge}
                </span>
              )}

              {/* Wishlist */}
              <button className="absolute top-4 right-4 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-forest-400 hover:text-rose-500 hover:bg-white transition-all shadow-sm">
                <Heart className="h-4 w-4" />
              </button>

              {/* Image container */}
              <div className="img-zoom aspect-square bg-gradient-to-b from-ivory to-forest-50/20 flex items-center justify-center">
                <span className="text-[100px] zoom-target select-none drop-shadow-sm">
                  {prod.image}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.floor(prod.rating)
                            ? "fill-muga text-muga"
                            : "fill-forest-100 text-forest-100"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-forest-400">({prod.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-forest leading-snug line-clamp-1 group-hover:text-muga-700 transition-colors">
                  <Link href={`/products/${prod.id}`}>{prod.title}</Link>
                </h3>

                <p className="text-xs text-forest-400">
                  By {prod.artisan}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-forest">
                    ₹{prod.price.toLocaleString("en-IN")}
                  </span>
                  {prod.oldPrice && (
                    <span className="text-sm text-forest-300 line-through">
                      ₹{prod.oldPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <button className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-forest text-white text-sm font-semibold hover:bg-forest-600 transition-all btn-3d shadow-sm">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
