"use client"
import * as React from "react"
import Link from "next/link"

/* ─── Animated counter digit with flip effect ─── */
function FlipDigit({ value, prevValue }) {
  const isFlipping = value !== prevValue
  return (
    <div className="flip-3d-digit relative w-full h-full flex items-center justify-center overflow-hidden">
      <span
        key={value}
        className={`text-3xl sm:text-4xl font-mono font-extrabold text-white tabular-nums ${isFlipping ? "flip-anim" : ""}`}
      >
        {value}
      </span>
    </div>
  )
}

/* ─── Single counter unit ─── */
function CounterUnit({ value, label, delay }) {
  return (
    <div
      className="flex flex-col items-center stagger-in"
      style={{ animationDelay: delay }}
    >
      <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl bg-gradient-to-b from-forest-800/90 to-forest-900 border border-forest-700/40 counter-3d overflow-hidden">
        {/* Glass highlight top */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none rounded-t-2xl" />

        {/* Center divide line */}
        <div className="absolute inset-x-2 top-1/2 h-px bg-forest-700/30" />

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-muga/20" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-muga/20" />

        {/* Digit */}
        <FlipDigit value={value} prevValue={value} />

        {/* Bottom glow */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-muga/[0.06] to-transparent pointer-events-none" />
      </div>
      <span className="text-[10px] sm:text-[11px] text-forest-300 font-semibold uppercase tracking-[0.15em] mt-3">
        {label}
      </span>
    </div>
  )
}

export default function FlashSale() {
  const [time, setTime] = React.useState({ h: 2, m: 14, s: 33 })
  const prevTime = React.useRef(time)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        prevTime.current = prev
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

  /* ── Floating particles ── */
  const particles = React.useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${20 + Math.random() * 80}%`,
      size: 1 + Math.random() * 4,
      duration: `${6 + Math.random() * 10}s`,
      delay: `${Math.random() * 8}s`,
      opacity: 0.15 + Math.random() * 0.4,
    })), [])

  return (
    <section
      id="flash-sale"
      className="relative py-24 lg:py-32 overflow-hidden aurora-bg"
      style={{
        background: "linear-gradient(135deg, #06100B 0%, #0B1E15 20%, #102B1F 40%, #1B4332 60%, #0B1E15 80%, #06100B 100%)",
      }}
    >
      {/* ── Background Layers ── */}

      {/* Large glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[200px] opacity-20"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.4), transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-15"
           style={{ background: "radial-gradient(circle, rgba(27,67,50,0.8), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[120px] opacity-20"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.3), transparent 70%)" }} />

      {/* Radial lines emanating from center */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              rgba(201,168,76,0.3) 0deg 2deg,
              transparent 2deg 15deg
            )
          `,
          backgroundPosition: "center",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full particle-drift"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, rgba(201,168,76,${p.opacity}) 0%, transparent 70%)`,
              "--duration": p.duration,
              "--delay": p.delay,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 text-center space-y-10">

        {/* Badge with rotating border */}
        <div className="flex justify-center">
          <span className="glow-border-rotate inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muga px-6 py-2.5 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muga opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-muga" />
            </span>
            ⚡ Bihu Special Sale
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Up to{" "}
            <span className="relative inline-block">
              <span className="text-gold-shimmer">40% off</span>
              {/* Underline decoration */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C20 2 40 2 60 4C80 6 100 4 118 2" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
            {" "}on all
            <br className="hidden sm:block" />
            Silk Products
          </h2>
          <p className="text-forest-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Authentic Assamese silk at unbeatable prices. Limited time offer — grab yours before time runs out!
          </p>
        </div>

        {/* 3D Countdown */}
        <div className="flex items-start justify-center gap-3 sm:gap-5">
          <CounterUnit value={pad(time.h)} label="Hours" delay="0.1s" />

          <span className="text-3xl sm:text-4xl font-bold text-muga/40 mt-6 sm:mt-8 animate-pulse">:</span>

          <CounterUnit value={pad(time.m)} label="Minutes" delay="0.2s" />

          <span className="text-3xl sm:text-4xl font-bold text-muga/40 mt-6 sm:mt-8 animate-pulse">:</span>

          <CounterUnit value={pad(time.s)} label="Seconds" delay="0.3s" />
        </div>

        {/* CTA button */}
        <div className="pt-2">
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-3 h-14 px-10 rounded-full bg-gradient-to-r from-muga to-muga-400 text-forest-900 text-sm font-bold shadow-xl shadow-muga/20 hover:shadow-muga/40 transition-all duration-300 overflow-hidden"
          >
            {/* Hover shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="light-beam absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/4 h-full" />
            </div>

            {/* Button glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-muga/20 via-muga/40 to-muga/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

            <span className="relative z-10 flex items-center gap-2">
              Grab Deals
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 pt-4">
          {[
            { icon: "🔒", text: "Secure Payment" },
            { icon: "🚚", text: "Free Shipping" },
            { icon: "✨", text: "Handcrafted" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-forest-400 text-[11px] sm:text-xs font-medium">
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom border glow ── */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-muga/30 to-transparent" />
    </section>
  )
}
