import Link from "next/link"

const articles = [
  {
    id: 1,
    category: "Culture",
    title: "The Story of Muga Silk — Why It's Worth More Than Gold",
    image: "🧣",
    color: "bg-amber-50 text-amber-700",
  },
  {
    id: 2,
    category: "Artisan",
    title: "Meet the Weavers of Sualkuchi — Assam's Silk Village",
    image: "👩‍🌾",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 3,
    category: "Guide",
    title: "How to Style a Mekhela Chador for Modern Occasions",
    image: "🥻",
    color: "bg-rose-50 text-rose-700",
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            From the Heart of Assam
          </h2>
          <p className="mt-3 text-forest-400 text-base max-w-md mx-auto">
            Stories, guides, and cultural deep-dives from the northeast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-forest-50 overflow-hidden card-3d"
            >
              {/* Image */}
              <div className="img-zoom aspect-[16/10] bg-gradient-to-br from-ivory to-forest-50/30 flex items-center justify-center">
                <span className="text-7xl zoom-target select-none">
                  {article.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${article.color}`}>
                  {article.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-forest leading-snug group-hover:text-muga-700 transition-colors">
                  {article.title}
                </h3>
                <Link
                  href="#"
                  className="inline-block text-sm font-semibold text-muga hover:text-muga-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
