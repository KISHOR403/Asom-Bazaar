"use client"
import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import ProductGrid from "../../../components/product/ProductGrid"
import FilterPanel from "../../../components/common/FilterPanel"
import { Search, Sparkles, SlidersHorizontal, RotateCcw, X, Tag, ArrowRight, CheckCircle2 } from "lucide-react"

const ALL_PRODUCTS = [
  {
    id: 1,
    title: "Handwoven Pure Muga Silk Mekhela Chador",
    price: 18500,
    oldPrice: 22000,
    rating: 5.0,
    reviews: 42,
    category: "Mekhela Chador",
    artisan: "Purnima Bora, Sualkuchi",
    image: "/images/mekhela_silk_hero.png",
    badge: "GI Certified",
    origin: "Sualkuchi",
    giTag: true,
  },
  {
    id: 2,
    title: "Authentic Eri Silk Traditional Mekhela",
    price: 8450,
    oldPrice: 10200,
    rating: 4.9,
    reviews: 38,
    category: "Mekhela Chador",
    artisan: "Rina Kalita, Sualkuchi",
    image: "/images/eri_silk_mekhela.png",
    badge: "Bestseller",
    origin: "Sualkuchi",
    giTag: true,
  },
  {
    id: 3,
    title: "Handcrafted Brass Jonbiri Pendant & Necklace",
    price: 3200,
    oldPrice: 4100,
    rating: 4.8,
    reviews: 29,
    category: "Jewellery",
    artisan: "Mira Devi, Nalbari",
    image: "/images/jonbiri_necklace.png",
    badge: "Traditional",
    origin: "Nalbari",
    giTag: false,
  },
  {
    id: 4,
    title: "Eco-Friendly Bamboo Table Lamp Shade",
    price: 1890,
    oldPrice: 2400,
    rating: 4.7,
    reviews: 19,
    category: "Bamboo Crafts",
    artisan: "Bimal Boro, Barpeta",
    image: "/images/bamboo_lamp.png",
    badge: "Eco-Craft",
    origin: "Barpeta",
    giTag: false,
  },
  {
    id: 5,
    title: "Traditional Handwoven Cotton Phulam Gamusa Set",
    price: 750,
    oldPrice: 990,
    rating: 5.0,
    reviews: 84,
    category: "Mekhela Chador",
    artisan: "Majuli Weavers Collective",
    image: "/images/handwoven_gamosa.png",
    badge: "Heritage",
    origin: "Majuli",
    giTag: true,
  },
  {
    id: 6,
    title: "Royal Golden Muga Stole with Traditional Motifs",
    price: 4800,
    oldPrice: 5900,
    rating: 4.9,
    reviews: 23,
    category: "Silk & Stoles",
    artisan: "Jorhat Silk Cluster",
    image: "/images/muga_silk_scarf.png",
    badge: "New Arrival",
    origin: "Sualkuchi",
    giTag: true,
  },
  {
    id: 7,
    title: "Hand-Carved Majuli Bamboo Storage & Fruit Basket",
    price: 1250,
    oldPrice: 1600,
    rating: 4.6,
    reviews: 15,
    category: "Bamboo Crafts",
    artisan: "Dinesh Das, Majuli",
    image: "/images/bamboo_lamp.png",
    badge: null,
    origin: "Majuli",
    giTag: false,
  },
  {
    id: 8,
    title: "Tribal Silver Polish Lokaparo Earrings",
    price: 2150,
    oldPrice: 2700,
    rating: 4.8,
    reviews: 31,
    category: "Jewellery",
    artisan: "Bhaben Sarma, Tezpur",
    image: "/images/jonbiri_necklace.png",
    badge: "Artisan Special",
    origin: "Karbi Anglong",
    giTag: false,
  },
  {
    id: 9,
    title: "Organic Assam Orthodox Whole Leaf Black Tea (250g)",
    price: 890,
    oldPrice: 1150,
    rating: 4.9,
    reviews: 58,
    category: "Spices & Tea",
    artisan: "Dibrugarh Tea Estates, Upper Assam",
    image: "/images/assam_orthodox_tea.png",
    badge: "GI Certified",
    origin: "Karbi Anglong",
    giTag: true,
  },
  {
    id: 10,
    title: "Karbi Anglong Organic Lakadong Turmeric Powder (500g)",
    price: 380,
    oldPrice: 490,
    rating: 5.0,
    reviews: 74,
    category: "Spices & Tea",
    artisan: "Karbi Organic Farmers Collective",
    image: "/images/karbi_turmeric.png",
    badge: "Organic Certified",
    origin: "Karbi Anglong",
    giTag: true,
  },
  {
    id: 11,
    title: "Artisanal Bhut Jolokia (Ghost Pepper) Chili Pickle (300g)",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 92,
    category: "Spices & Tea",
    artisan: "Golaghat Agro Artisans",
    image: "/images/bhut_jolokia_pickle.png",
    badge: "Bestseller",
    origin: "Nalbari",
    giTag: true,
  },
  {
    id: 12,
    title: "Kazi Nemu & Wild Cardamom Spiced Assam Chai (500g)",
    price: 540,
    oldPrice: 680,
    rating: 4.9,
    reviews: 35,
    category: "Spices & Tea",
    artisan: "Tezpur Herbal Blends, Tezpur",
    image: "/images/assam_orthodox_tea.png",
    badge: "Heritage Blend",
    origin: "Majuli",
    giTag: false,
  },
]

const POPULAR_SEARCHES = [
  "Assam Tea",
  "Bhut Jolokia",
  "Karbi Turmeric",
  "Muga Silk",
  "Jonbiri Necklace",
  "Eri Silk",
  "Cotton Gamusa",
  "Bamboo Lamp",
]

function SearchPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = React.useState(initialQuery)
  const [sortBy, setSortBy] = React.useState("relevance")
  const [showMobileFilters, setShowMobileFilters] = React.useState(false)
  const [activeFilters, setActiveFilters] = React.useState({ category: "", maxPrice: 50000, origin: "", giOnly: false })

  // Keep query state updated if URL search param changes
  React.useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleFilterChange = (filters) => {
    setActiveFilters(filters)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const handlePopularSearch = (term) => {
    setQuery(term)
    router.push(`/search?q=${encodeURIComponent(term)}`)
  }

  const handleClearQuery = () => {
    setQuery("")
    router.push("/search")
  }

  // Filter & Search calculation
  const filteredProducts = React.useMemo(() => {
    let result = [...ALL_PRODUCTS]

    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.artisan.toLowerCase().includes(q) ||
          (p.badge && p.badge.toLowerCase().includes(q))
      )
    }

    if (activeFilters.category) {
      result = result.filter((p) => p.category === activeFilters.category)
    }

    if (activeFilters.maxPrice) {
      result = result.filter((p) => p.price <= activeFilters.maxPrice)
    }

    if (activeFilters.origin) {
      result = result.filter((p) => p.origin === activeFilters.origin)
    }

    if (activeFilters.giOnly) {
      result = result.filter((p) => p.giTag)
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [query, activeFilters, sortBy])

  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      
      {/* Search Header Hero */}
      <section className="bg-forest text-white py-12 px-5 lg:px-8 relative overflow-hidden mb-8">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            🔍 Craft Search Engine
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Discover Authentic Assam Handcrafts
          </h1>
          <p className="text-forest-200 max-w-xl mx-auto text-xs sm:text-sm">
            Search across thousands of GI certified silks, tribal jewellery, and bamboo artisan creations.
          </p>

          {/* Interactive Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search Muga silk, Jonbiri necklace, Gamusa, Bamboo lamp..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white text-forest placeholder-forest-400 rounded-full pl-12 pr-28 py-4 text-sm font-medium outline-none shadow-xl border border-white/20 focus:ring-4 focus:ring-muga/30 transition-all"
              />
              <Search className="w-5 h-5 text-forest-400 absolute left-4 top-1/2 -translate-y-1/2" />
              
              {query && (
                <button
                  type="button"
                  onClick={handleClearQuery}
                  className="absolute right-24 top-1/2 -translate-y-1/2 text-forest-400 hover:text-forest p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-muga text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-muga/90 transition-colors shadow-md flex items-center gap-1"
              >
                Search
              </button>
            </div>
          </form>

          {/* Popular Tag Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-2">
            <span className="text-[11px] font-bold text-forest-300 uppercase tracking-wider">Popular:</span>
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => handlePopularSearch(term)}
                className="bg-white/10 hover:bg-muga/30 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/15 transition-all"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-muga/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Results Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-forest-100/40 shadow-sm mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 bg-forest-50 text-forest px-4 py-2 rounded-xl text-xs font-bold border border-forest-100"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-muga" />
              Filters
            </button>

            <p className="text-xs font-bold text-forest">
              {query ? (
                <>Results for &quot;<span className="text-muga font-extrabold">{query}</span>&quot;: </>
              ) : (
                <>Explore All Crafts: </>
              )}
              <span className="text-forest-500 font-semibold">{filteredProducts.length} items found</span>
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-bold text-forest-400 uppercase tracking-wider">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-forest-50/60 border border-forest-100 text-forest text-xs font-bold rounded-xl px-3 py-2 outline-none focus:border-forest cursor-pointer"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <div className={`w-full lg:w-72 shrink-0 ${showMobileFilters ? "block" : "hidden lg:block"}`}>
            <FilterPanel onFilterChange={handleFilterChange} />
          </div>

          {/* Right Results Grid */}
          <div className="flex-1 w-full">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="bg-white rounded-3xl border border-forest-100/40 p-12 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-forest-50 text-forest flex items-center justify-center mx-auto text-2xl">
                  🔍
                </div>
                <h3 className="font-heading font-bold text-2xl text-forest">No Crafts Match Your Search</h3>
                <p className="text-forest-500 text-xs sm:text-sm max-w-md mx-auto">
                  We couldn&apos;t find any items matching &quot;{query}&quot;. Try adjusting your keywords or clearing active filters.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleClearQuery}
                    className="bg-forest text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-forest-600 transition-colors"
                  >
                    View Full Catalog
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen pt-24 text-center text-forest font-semibold">
        Loading search results...
      </div>
    }>
      <SearchPageContent />
    </React.Suspense>
  )
}
