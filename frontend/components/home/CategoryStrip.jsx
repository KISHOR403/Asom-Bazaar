"use client"
import Link from "next/link"

const categories = [
  { name: "Mekhela Chador", slug: "mekhela-chador", icon: "🥻", sub: "Traditional two-piece saree", glow: "bg-orange-400/20" },
  { name: "Silk & Stoles", slug: "silk", icon: "🧣", sub: "Muga, Eri, Pat silk", glow: "bg-amber-400/20" },
  { name: "Tribal Jewellery", slug: "jewellery", icon: "💍", sub: "Brass, silver, beaded", glow: "bg-yellow-400/20" },
  { name: "Bamboo Crafts", slug: "bamboo-cane", icon: "🎍", sub: "Handwoven home decor", glow: "bg-emerald-400/20" },
  { name: "Spices & Tea", slug: "spices", icon: "🌿", sub: "Straight from Assam farms", glow: "bg-teal-400/20" },
  { name: "Gamosa & Fabrics", slug: "gamosa", icon: "🪡", sub: "Sacred Assamese cloth", glow: "bg-rose-400/20" },
]

export default function CategoryGrid() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            Explore Assam&apos;s Finest
          </h2>
          <p className="mt-3 text-forest-400 text-base max-w-md mx-auto">
            Six craft traditions, one marketplace. Every piece tells a story.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-ivory border border-transparent hover:border-muga-200 card-3d"
            >
              {/* Glow behind icon */}
              <div className={`absolute top-6 w-16 h-16 rounded-full ${cat.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <span className="relative text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">
                {cat.icon}
              </span>
              <h3 className="font-heading text-base font-bold text-forest mb-1">{cat.name}</h3>
              <p className="text-[11px] text-forest-400 leading-tight">{cat.sub}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
