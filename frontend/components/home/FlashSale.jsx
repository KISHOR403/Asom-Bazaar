"use client"
import * as React from "react"
import Link from "next/link"

export default function FlashSale() {
  const [time, setTime] = React.useState({ h: 2, m: 14, s: 33 })

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { h = 0; m = 0; s = 0 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n) => String(n).padStart(2, "0")

  return (
    <section className="py-20 lg:py-24 bg-forest-900 relative overflow-hidden">
      {/* Gold particle dots decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-muga/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center space-y-8">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muga bg-muga/10 border border-muga/20 px-4 py-2 rounded-full animate-pulse-gold">
          ⚡ Bihu Special Sale
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Up to <span className="text-muga">40% off</span> on all Silk Products
        </h2>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-3">
          {[
            { val: pad(time.h), label: "Hours" },
            { val: pad(time.m), label: "Minutes" },
            { val: pad(time.s), label: "Seconds" },
          ].map((unit, i) => (
            <React.Fragment key={unit.label}>
              {i > 0 && (
                <span className="text-3xl font-bold text-muga/60 -mt-5">:</span>
              )}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-xl bg-forest-800 border border-forest-700 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-mono font-bold text-white tabular-nums">
                    {unit.val}
                  </span>
                  {/* Flip line */}
                  <div className="absolute inset-x-0 top-1/2 h-px bg-forest-700/50" />
                </div>
                <span className="text-[10px] text-forest-400 font-semibold uppercase tracking-wider mt-2">
                  {unit.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 h-13 px-10 py-3.5 rounded-full bg-muga text-forest-900 text-sm font-bold shadow-lg shadow-muga/25 hover:bg-muga-400 transition-all btn-3d"
        >
          Grab Deals →
        </Link>
      </div>
    </section>
  )
}
