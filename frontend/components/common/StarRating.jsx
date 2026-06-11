"use client"
import * as React from "react"
import { Star } from "lucide-react"

export default function StarRating({ rating = 0, interactive = false, onChange, size = 4 }) {
  const [hoverRating, setHoverRating] = React.useState(null)
  
  const activeRating = hoverRating !== null ? hoverRating : rating

  return (
    <div className="flex gap-0.5 items-center">
      {[...Array(5)].map((_, idx) => {
        const value = idx + 1
        return (
          <button
            key={idx}
            type="button"
            disabled={!interactive}
            onClick={() => onChange?.(value)}
            onMouseEnter={() => interactive && setHoverRating(value)}
            onMouseLeave={() => interactive && setHoverRating(null)}
            className={`text-amber-500 transition-transform ${interactive ? "hover:scale-110 cursor-pointer" : "cursor-default"}`}
          >
            <Star 
              className={`fill-current`} 
              style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
              fill={value <= activeRating ? "currentColor" : "none"}
              stroke={value <= activeRating ? "currentColor" : "#cbd5e1"}
            />
          </button>
        )
      })}
    </div>
  )
}
