"use client"
import * as React from "react"
import { Filter, RotateCcw, Check, Sparkles, ShieldCheck, MapPin, Tag, ChevronDown } from "lucide-react"

const DEFAULT_CATEGORIES = [
  { id: "Mekhela Chador", label: "Mekhela Chador", icon: "🥻", count: 18 },
  { id: "Jewellery", label: "Tribal Jewellery", icon: "💍", count: 12 },
  { id: "Bamboo Crafts", label: "Bamboo & Cane", icon: "🎍", count: 14 },
  { id: "Silk & Stoles", label: "Silk & Stoles", icon: "🪡", count: 9 },
  { id: "Spices & Tea", label: "Organic Tea & Spices", icon: "🌿", count: 11 },
]

const PRICE_PRESETS = [
  { label: "Under ₹1k", max: 1000 },
  { label: "₹1k - ₹5k", max: 5000 },
  { label: "₹5k - ₹15k", max: 15000 },
  { label: "All Prices", max: 50000 },
]

const ORIGINS = ["Sualkuchi", "Majuli", "Nalbari", "Barpeta", "Karbi Anglong"]

export default function FilterPanel({ categories = DEFAULT_CATEGORIES, onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState(50000)
  const [selectedOrigin, setSelectedOrigin] = React.useState("")
  const [giOnly, setGiOnly] = React.useState(false)

  const handleCategorySelect = (catId) => {
    const val = selectedCategory === catId ? "" : catId
    setSelectedCategory(val)
    emitChange({ category: val, maxPrice, origin: selectedOrigin, giOnly })
  }

  const handlePriceChange = (val) => {
    setMaxPrice(val)
    emitChange({ category: selectedCategory, maxPrice: val, origin: selectedOrigin, giOnly })
  }

  const handleOriginSelect = (origin) => {
    const val = selectedOrigin === origin ? "" : origin
    setSelectedOrigin(val)
    emitChange({ category: selectedCategory, maxPrice, origin: val, giOnly })
  }

  const handleGiToggle = () => {
    const val = !giOnly
    setGiOnly(val)
    emitChange({ category: selectedCategory, maxPrice, origin: selectedOrigin, giOnly: val })
  }

  const handleReset = () => {
    setSelectedCategory("")
    setMaxPrice(50000)
    setSelectedOrigin("")
    setGiOnly(false)
    emitChange({ category: "", maxPrice: 50000, origin: "", giOnly: false })
  }

  const emitChange = (filters) => {
    onFilterChange?.(filters)
  }

  const isFiltered = selectedCategory || maxPrice < 50000 || selectedOrigin || giOnly

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-forest-100/50 p-6 shadow-xl shadow-forest-900/5 space-y-7">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-forest-100/30 pb-4">
        <div className="flex items-center gap-2 text-forest">
          <Filter className="w-4 h-4 text-muga" />
          <h3 className="font-heading font-extrabold text-base tracking-tight">Filter Crafts</h3>
        </div>
        {isFiltered && (
          <button
            onClick={handleReset}
            className="text-xs font-bold text-muga hover:text-muga-700 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      {/* Category Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-400">
            Category
          </span>
          <Tag className="w-3.5 h-3.5 text-forest-300" />
        </div>

        <div className="space-y-1.5">
          {DEFAULT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-forest text-white shadow-md shadow-forest-900/10"
                    : "text-forest-700 hover:bg-forest-50/80"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.label}</span>
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? "bg-muga text-white"
                      : "bg-forest-50 text-forest-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Price Slider Section */}
      <div className="space-y-4 border-t border-forest-100/30 pt-5">
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-400">
            Max Budget
          </span>
          <span className="text-sm font-extrabold text-forest font-heading bg-forest-50 px-3 py-1 rounded-full border border-forest-100/40">
            ₹{maxPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min="450"
          max="50000"
          step="500"
          value={maxPrice}
          onChange={(e) => handlePriceChange(parseInt(e.target.value))}
          className="w-full accent-muga h-2 bg-forest-100 rounded-lg appearance-none cursor-pointer"
        />

        {/* Quick presets */}
        <div className="grid grid-cols-2 gap-1.5">
          {PRICE_PRESETS.map((preset) => (
            <button
              key={preset.label}
              onClick={() => handlePriceChange(preset.max)}
              className={`text-[11px] font-bold py-1.5 px-2 rounded-xl transition-all border ${
                maxPrice === preset.max
                  ? "bg-muga/15 text-muga-800 border-muga"
                  : "bg-white text-forest-600 border-forest-100 hover:bg-forest-50"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Artisan Origin Cluster */}
      <div className="space-y-3 border-t border-forest-100/30 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-400">
            Artisan Region
          </span>
          <MapPin className="w-3.5 h-3.5 text-forest-300" />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {ORIGINS.map((origin) => {
            const isSelected = selectedOrigin === origin
            return (
              <button
                key={origin}
                onClick={() => handleOriginSelect(origin)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all ${
                  isSelected
                    ? "bg-forest text-white border-forest shadow-sm"
                    : "bg-forest-50/50 border-forest-100 text-forest-600 hover:bg-forest-100/50"
                }`}
              >
                {origin}
              </button>
            )
          })}
        </div>
      </div>

      {/* GI Certified Toggle */}
      <div className="border-t border-forest-100/30 pt-5">
        <button
          onClick={handleGiToggle}
          className={`w-full p-3 rounded-2xl border transition-all flex items-center justify-between ${
            giOnly
              ? "bg-emerald-50/80 border-emerald-300 text-emerald-800"
              : "bg-white border-forest-100 text-forest-700 hover:bg-forest-50/50"
          }`}
        >
          <div className="flex items-center gap-2 text-left">
            <ShieldCheck className={`w-4 h-4 ${giOnly ? "text-emerald-600" : "text-muga"}`} />
            <div>
              <p className="text-xs font-bold">GI Tag Certified</p>
              <p className="text-[10px] text-forest-400">Show official heritage certified crafts</p>
            </div>
          </div>
          <div
            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
              giOnly ? "bg-emerald-600 border-emerald-600 text-white" : "border-forest-200 bg-white"
            }`}
          >
            {giOnly && <Check className="w-3.5 h-3.5" />}
          </div>
        </button>
      </div>

    </div>
  )
}
