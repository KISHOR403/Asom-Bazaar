"use client"
import * as React from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    id: 1, name: "Priya Sharma", city: "Bangalore", rating: 5,
    text: "The mekhela chador quality is absolutely stunning. My mother cried when she saw it."
  },
  {
    id: 2, name: "Rahul Das", city: "Delhi", rating: 5,
    text: "Finally a platform that sells real Assamese products. Not cheap imitations."
  },
  {
    id: 3, name: "Ankita Borah", city: "Mumbai", rating: 5,
    text: "Ordered for my wedding. The silk arrived perfectly packed. Will buy again."
  },
]

export default function CustomerReviews() {
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`transition-all duration-700 ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="bg-ivory rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
                {/* Quote watermark */}
                <span className="absolute top-6 left-8 text-[120px] leading-none text-forest/[0.04] font-serif select-none pointer-events-none">
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-muga text-muga" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl lg:text-2xl font-heading font-semibold text-forest leading-relaxed max-w-2xl mx-auto italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8">
                  <p className="font-bold text-forest text-sm">— {review.name}</p>
                  <p className="text-xs text-forest-400 mt-0.5">{review.city}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-muga" : "w-2 bg-forest-200 hover:bg-forest-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
