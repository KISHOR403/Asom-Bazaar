"use client"
import * as React from "react"

export default function FilterSidebar({ facets, filters, onFilterChange }) {
  const categories = facets?.categories || []
  const { minPrice = "", maxPrice = "" } = filters

  const handlePriceSubmit = (e) => {
    e.preventDefault()
    onFilterChange("price", { min: e.target.min.value, max: e.target.max.value })
  }

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-heading text-lg font-bold text-forest mb-4 pb-2 border-b border-forest-100">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <li key={cat.key}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.category === cat.key}
                    onChange={() => onFilterChange("category", filters.category === cat.key ? null : cat.key)}
                    className="w-4 h-4 rounded border-forest-200 text-muga focus:ring-muga cursor-pointer"
                  />
                  <span className={`text-sm flex-1 transition-colors ${
                    filters.category === cat.key ? "text-forest font-bold" : "text-forest-600 group-hover:text-forest"
                  }`}>
                    {cat.key.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <span className="text-xs text-forest-300">({cat.doc_count})</span>
                </label>
              </li>
            ))
          ) : (
            <li className="text-sm text-forest-400">No categories found</li>
          )}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-heading text-lg font-bold text-forest mb-4 pb-2 border-b border-forest-100">
          Price Range
        </h3>
        <form onSubmit={handlePriceSubmit} className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-400 text-sm">₹</span>
              <input
                type="number"
                name="min"
                defaultValue={minPrice}
                placeholder="Min"
                className="w-full pl-7 pr-3 py-2 text-sm rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-muga bg-white text-forest"
              />
            </div>
            <span className="text-forest-300">-</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-400 text-sm">₹</span>
              <input
                type="number"
                name="max"
                defaultValue={maxPrice}
                placeholder="Max"
                className="w-full pl-7 pr-3 py-2 text-sm rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-muga bg-white text-forest"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-9 rounded-lg bg-forest-50 text-forest text-sm font-semibold hover:bg-forest-100 transition-colors"
          >
            Apply Price
          </button>
        </form>
      </div>
    </aside>
  )
}
