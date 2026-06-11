"use client"
import * as React from "react"

export default function FilterPanel({ categories = ["Mekhela Chador", "Jewellery", "Bamboo Crafts"], onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState(20000)

  const handleCategorySelect = (cat) => {
    const val = selectedCategory === cat ? "" : cat
    setSelectedCategory(val)
    onFilterChange?.({ category: val, maxPrice })
  }

  const handlePriceChange = (e) => {
    const val = parseInt(e.target.value)
    setMaxPrice(val)
    onFilterChange?.({ category: selectedCategory, maxPrice: val })
  }

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm space-y-6">
      <h3 className="font-bold text-slate-800 text-base">Filters</h3>
      
      {/* Categories */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Category</span>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                selectedCategory === cat
                  ? "bg-primary/5 text-primary font-semibold"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price slider */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Max Price</span>
          <span className="text-sm font-bold text-slate-700">₹{maxPrice.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min="500"
          max="50000"
          step="500"
          value={maxPrice}
          onChange={handlePriceChange}
          className="w-full accent-primary"
        />
      </div>
    </div>
  )
}
