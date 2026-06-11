import Link from "next/link"

const artisans = [
  {
    id: 1, name: "Purnima Bora", village: "Sualkuchi, Assam",
    quote: "Weaving for 22 years. Now my work reaches Mumbai.",
    avatar: "👩‍🌾", tilt: "-rotate-2"
  },
  {
    id: 2, name: "Rumi Boro", village: "Barpeta, Assam",
    quote: "My bamboo lamps now light up homes across India.",
    avatar: "👩‍🎨", tilt: "rotate-0"
  },
  {
    id: 3, name: "Mira Devi", village: "Nalbari, Assam",
    quote: "Every jonbiri pendant carries the pride of our tribe.",
    avatar: "👩‍🏭", tilt: "rotate-2"
  },
]

export default function ArtisanStories() {
  return (
    <section className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      {/* Subtle woven texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231B4332' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            The Hands Behind Every Thread
          </h2>
          <p className="mt-3 text-forest-400 text-base max-w-md mx-auto">
            Real women. Real stories. Real craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className={`relative bg-white rounded-2xl p-8 border border-forest-50 card-3d text-center space-y-5 ${artisan.tilt}`}
            >
              {/* Avatar with gold ring */}
              <div className="mx-auto w-20 h-20 rounded-full bg-ivory flex items-center justify-center text-4xl ring-gold">
                {artisan.avatar}
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-forest">
                  {artisan.name}
                </h3>
                <p className="text-xs text-muga font-semibold mt-1">
                  {artisan.village}
                </p>
              </div>

              {/* Quote */}
              <div className="relative">
                <span className="absolute -top-4 -left-1 text-6xl text-muga/10 font-serif select-none">&ldquo;</span>
                <p className="text-sm text-forest-500 italic leading-relaxed relative z-10 pt-2">
                  {artisan.quote}
                </p>
              </div>

              <Link
                href={`/artisans/${artisan.id}`}
                className="inline-block text-xs font-bold text-muga hover:text-muga-700 transition-colors"
              >
                View Her Collection →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
