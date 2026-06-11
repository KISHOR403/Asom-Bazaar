"use client"
import * as React from "react"

export default function ProductImages({ images = ["🧣"] }) {
  const [activeImage, setActiveImage] = React.useState(0)

  return (
    <div className="space-y-4">
      {/* Active Display */}
      <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center text-9xl border border-slate-100">
        {images[activeImage]}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center text-2xl border-2 transition-all ${
                activeImage === i ? "border-primary" : "border-transparent"
              }`}
            >
              {img}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
