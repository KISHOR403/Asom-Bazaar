"use client"
import * as React from "react"
import FilterPanel from "../../../components/common/FilterPanel"
import ProductGrid from "../../../components/product/ProductGrid"
import Breadcrumb from "../../../components/common/Breadcrumb"
import { Search, Grid, LayoutList, SlidersHorizontal, Sparkles, X, ChevronDown } from "lucide-react"

const sampleProducts = [
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
]

export default function ProductsPage() {
  const [products] = React.useState(sampleProducts)
  const [filteredProducts, setFilteredProducts] = React.useState(sampleProducts)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [sortBy, setSortBy] = React.useState("featured")
  const [showMobileFilters, setShowMobileFilters] = React.useState(false)
  const [activeFilters, setActiveFilters] = React.useState({ category: "", maxPrice: 50000, origin: "", giOnly: false })

  const handleFilter = React.useCallback((filters) => {
    setActiveFilters(filters)
  }, [])

  // Apply search, filters & sort
  React.useEffect(() => {
    let result = [...products]

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.artisan.toLowerCase().includes(q)
      )
    }

    // Category
    if (activeFilters.category) {
      result = result.filter((p) => p.category === activeFilters.category)
    }

    // Price
    if (activeFilters.maxPrice) {
      result = result.filter((p) => p.price <= activeFilters.maxPrice)
    }

    // Region
    if (activeFilters.origin) {
      result = result.filter((p) => p.origin === activeFilters.origin)
    }

    // GI Tag
    if (activeFilters.giOnly) {
      result = result.filter((p) => p.giTag)
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    setFilteredProducts(result)
  }, [products, searchQuery, activeFilters, sortBy])

  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-forest text-white py-12 px-5 lg:px-8 relative overflow-hidden mb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🪷</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muga bg-muga/20 px-3 py-1 rounded-full border border-muga/30">
                Direct From Master Weavers
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Assamese Craft Catalog
            </h1>
            <p className="text-forest-200 text-xs sm:text-sm max-w-xl">
              Explore authentic Muga silk, tribal jewellery, and hand-carved bamboo creations directly from Assam&apos;s artisan villages.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              placeholder="Search silk, gamusa, jewellery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-forest-200 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none focus:bg-white/20 transition-all"
            />
            <Search className="w-4 h-4 text-forest-200 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-muga/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Breadcrumb items={[{ label: "Products" }]} />

        {/* Controls & Active Filters Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-forest-100/40 shadow-sm">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden flex items-center gap-2 bg-forest-50 text-forest px-4 py-2 rounded-xl text-xs font-bold border border-forest-100"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-muga" />
              Filters
            </button>
            
            <p className="text-xs font-bold text-forest">
              Showing <span className="text-muga">{filteredProducts.length}</span> authentic items
            </p>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-bold text-forest-400 uppercase tracking-wider">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-forest-50/60 border border-forest-100 text-forest text-xs font-bold rounded-xl px-3 py-2 outline-none focus:border-forest cursor-pointer"
            >
              <option value="featured">Featured Creations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Main Grid & Sidebar Layout */}
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          
          {/* Filter Sidebar */}
          <div className={`w-full md:w-72 shrink-0 ${showMobileFilters ? "block" : "hidden md:block"}`}>
            <FilterPanel onFilterChange={handleFilter} />
          </div>

          {/* Product Grid Area */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>

        </div>

      </div>
    </div>
  )
}
