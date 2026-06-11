"use client"
import * as React from "react"

export default function SizeSelector({ sizes = ["Standard", "M", "L", "XL"], selectedSize, onChange }) {
  return (
    <div className="space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Select Size</span>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange?.(size)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
              selectedSize === size
                ? "border-primary bg-primary/5 text-primary"
                : "border-slate-200 hover:border-slate-300 text-slate-600"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
