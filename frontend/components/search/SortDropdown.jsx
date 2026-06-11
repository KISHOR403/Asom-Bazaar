"use client"
import * as React from "react"
import { ChevronDown } from "lucide-react"

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
]

export default function SortDropdown({ currentSort, onSortChange }) {
  const [open, setOpen] = React.useState(false)
  const selected = sortOptions.find(o => o.value === currentSort) || sortOptions[0]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 h-10 px-4 rounded-lg border border-forest-200 bg-white text-sm font-medium text-forest hover:bg-forest-50 transition-colors"
      >
        Sort by: {selected.label}
        <ChevronDown className="h-4 w-4 text-forest-400" />
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-48 bg-white border border-forest-100 rounded-xl shadow-lg z-10 py-1 overflow-hidden animate-fade-up">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onSortChange(opt.value)
                setOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                currentSort === opt.value
                  ? "bg-forest-50 text-forest font-bold"
                  : "text-forest-600 hover:bg-forest-50/50 hover:text-forest"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
