"use client"
import * as React from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1, name: "Priya Sharma", city: "Bangalore", rating: 5,
    avatar: "/images/customer_priya.png",
    text: "The mekhela chador quality is absolutely stunning. My mother cried when she saw it."
  },
  {
    id: 2, name: "Rahul Das", city: "Delhi", rating: 5,
    avatar: "/images/customer_rahul.png",
    text: "Finally a platform that sells real Assamese products. Not cheap imitations."
  },
  {
    id: 3, name: "Ankita Borah", city: "Mumbai", rating: 5,
    avatar: "/images/customer_ankita.png",
    text: "Ordered for my wedding. The silk arrived perfectly packed. Will buy again."
  },
]

export default function CustomerReviews() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-ivory relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-muga-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-forest-100/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            Loved by Collectors Nationwide
          </h2>
          <p className="text-forest-400 text-base max-w-md mx-auto">
            See why authentic handlooms and crafts resonate with our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-forest-50 shadow-xl shadow-forest-900/2 hover:shadow-2xl hover:shadow-forest-900/6 hover:-translate-y-2 transition-all duration-500 relative group flex flex-col justify-between"
            >
              {/* Quote watermark */}
              <span className="absolute top-4 right-6 text-[80px] leading-none text-forest/[0.03] font-serif select-none pointer-events-none transition-colors group-hover:text-muga/10">
                &ldquo;
              </span>

              <div className="space-y-5">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-4.5 w-4.5 fill-muga text-muga stroke-[1.5]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base font-heading font-medium text-forest-700 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-forest-50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-muga/30 shadow-inner">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-forest text-sm">{review.name}</p>
                  <p className="text-xs text-forest-400 mt-0.5">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
