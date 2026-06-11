"use client"
import Link from "next/link"
import { Star, Heart } from "lucide-react"

const recommended = [
  { id: 5, title: "Pat Silk Stole", price: 1899, rating: 4.8, image: "🧣" },
  { id: 6, title: "Brass Kokal Belt", price: 2200, rating: 4.6, image: "💍" },
  { id: 7, title: "Muga Chador", price: 8500, rating: 5, image: "🥻" },
  { id: 8, title: "Cane Magazine Rack", price: 1450, rating: 4.5, image: "🎍" },
  { id: 9, title: "Assam CTC Tea 500g", price: 499, rating: 4.9, image: "🌿" },
  { id: 10, title: "Bell Metal Bota", price: 3200, rating: 4.7, image: "🏺" },
]

export default function RecommendedProducts() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-12">
          You Might Also Love
        </h2>

        {/* Horizontal scroll row */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2">
          {recommended.map((prod) => (
            <div
              key={prod.id}
              className="flex-shrink-0 w-56 bg-ivory rounded-2xl border border-forest-50 overflow-hidden card-3d"
            >
              <div className="img-zoom aspect-square bg-gradient-to-b from-ivory to-forest-50/20 flex items-center justify-center relative">
                <span className="text-7xl zoom-target select-none">{prod.image}</span>
                <button className="absolute top-3 right-3 h-7 w-7 flex items-center justify-center rounded-full bg-white/70 backdrop-blur text-forest-400 hover:text-rose-500 transition-colors">
                  <Heart className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-muga text-muga" />
                  <span className="text-xs text-forest-400 font-medium">{prod.rating}</span>
                </div>
                <h3 className="font-heading text-base font-bold text-forest line-clamp-1">
                  <Link href={`/products/${prod.id}`}>{prod.title}</Link>
                </h3>
                <p className="text-base font-bold text-forest">
                  ₹{prod.price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
