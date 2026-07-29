"use client"
import * as React from "react"

/* ─── Floating gold particles ─── */
function GoldParticles() {
  const particles = React.useMemo(() =>
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 3,
      duration: `${5 + Math.random() * 8}s`,
      delay: `${Math.random() * 6}s`,
      opacity: 0.2 + Math.random() * 0.5,
    })), [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
  )
}

/* ─── Orbiting 3D Ring around the phone ─── */
function OrbitRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Ring 1 */}
      <div
        className="absolute w-80 h-80 rounded-full orbit-ring"
        style={{
          border: "1.5px solid rgba(201, 168, 76, 0.2)",
          boxShadow: "0 0 20px rgba(201,168,76,0.1)",
        }}
      >
        {/* Orbiting dot */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-muga shadow-[0_0_12px_rgba(201,168,76,0.6)]" />
      </div>
      {/* Ring 2 – reverse, larger */}
      <div
        className="absolute w-96 h-96 rounded-full"
        style={{
          border: "1px solid rgba(201, 168, 76, 0.08)",
          animation: "orbit-ring 18s linear infinite reverse",
          transformStyle: "preserve-3d",
          transform: "rotateX(70deg)",
        }}
      >
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muga/40 shadow-[0_0_8px_rgba(201,168,76,0.4)]" />
      </div>
    </div>
  )
}

export default function AppDownload() {
  return (
    <section
      id="app-download"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #06100B 0%, #0B1E15 30%, #1B4332 60%, #102B1F 100%)",
      }}
    >
      {/* ── Background Layers ── */}
      {/* Aurora glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-30"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.3), transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
           style={{ background: "radial-gradient(circle, rgba(27,67,50,0.6), transparent 70%)" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <GoldParticles />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left – Copy ── */}
        <div className="text-center lg:text-left space-y-8">
          {/* Chip badge */}
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muga bg-muga/10 border border-muga/20 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-muga animate-pulse" />
            Mobile App
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Shop Anytime,
            <br />
            <span className="text-gold-shimmer">Anywhere</span>
          </h2>

          <p className="text-forest-200/80 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Download the Asom Bazaar app for exclusive deals, faster checkout, and artisan story notifications.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-8 justify-center lg:justify-start">
            {[
              { value: "50K+", label: "Downloads" },
              { value: "4.8", label: "Rating ⭐" },
              { value: "100%", label: "Authentic" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-muga font-heading">{stat.value}</p>
                <p className="text-[11px] text-forest-300 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="group relative inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-muga/30 text-white rounded-2xl px-7 py-4 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm overflow-hidden">
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 light-beam bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/3 h-full" />
              </div>
              <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="text-left relative z-10">
                <p className="text-[10px] text-forest-300 leading-none tracking-wide">Download on the</p>
                <p className="text-sm font-bold leading-tight mt-0.5">App Store</p>
              </div>
            </button>

            <button className="group relative inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-muga/30 text-white rounded-2xl px-7 py-4 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 light-beam bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/3 h-full" />
              </div>
              <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.60938 1.81445L13.793 11.9988L3.61328 22.1816C3.22266 21.7715 3 21.1543 3 20.3984V3.60156C3 2.8418 3.22266 2.22461 3.60938 1.81445ZM14.5 12.707L17.1523 15.3594L5.96094 21.7305L14.5 12.707ZM14.5 11.293L5.95703 2.26953L17.1523 8.64062L14.5 11.293ZM17.8516 9.13281L20.4727 10.6406C21.1758 11.0547 21.1758 12.9453 20.4727 13.3594L17.8477 14.8672L14.916 11.9988L17.8516 9.13281Z" />
              </svg>
              <div className="text-left relative z-10">
                <p className="text-[10px] text-forest-300 leading-none tracking-wide">Get it on</p>
                <p className="text-sm font-bold leading-tight mt-0.5">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* ── Right – 3D Phone Mockup ── */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative" style={{ perspective: "1200px" }}>
            {/* Orbit rings */}
            <OrbitRing />

            {/* Phone glow reflection */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-16 bg-muga/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-10 bg-muga/20 rounded-full blur-xl" />

            {/* Phone */}
            <div className="phone-3d-float">
              <div className="relative w-[280px] h-[540px] rounded-[3rem] bg-gradient-to-b from-forest-900 to-forest-950 border-[6px] border-forest-700/50 overflow-hidden flex flex-col aura-glow">
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none z-30 rounded-[2.6rem]" />

                {/* Light sweep on phone */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-30 rounded-[2.6rem]">
                  <div className="light-beam absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent w-1/3 h-full" style={{ animationDelay: "2s" }} />
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-forest-950 rounded-b-3xl z-20 flex items-center justify-center">
                  <div className="w-14 h-[3px] bg-forest-700/60 rounded-full" />
                </div>

                {/* Screen Content */}
                <div className="flex-1 flex flex-col pt-9 bg-ivory text-forest text-[11px] overflow-hidden select-none relative z-10">
                  {/* App Header */}
                  <div className="px-4 py-2.5 flex items-center justify-between border-b border-forest-100 bg-white/90 backdrop-blur-sm">
                    <span className="font-heading font-extrabold text-[15px] tracking-tight text-forest">🪷 Asom Bazaar</span>
                    <div className="w-6 h-6 rounded-full bg-forest-100 overflow-hidden ring-2 ring-muga/30">
                      <img src="/images/artisan_rumi.png" alt="User avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* App Hero Banner */}
                  <div className="m-3 p-4 rounded-2xl bg-gradient-to-br from-forest to-forest-800 text-white relative overflow-hidden">
                    <div className="absolute -right-3 -bottom-3 w-20 h-20 bg-muga/20 rounded-full blur-lg" />
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-muga/10 to-transparent" />
                    <p className="font-semibold text-[13px] leading-tight relative z-10">Authentic Handloom</p>
                    <p className="text-[10px] text-forest-200 mt-1 relative z-10">Flat 15% Off App-only</p>
                    <button className="mt-2.5 bg-muga text-white font-bold text-[9px] px-3 py-1 rounded-full relative z-10 shadow-md shadow-muga/30">
                      Shop Now
                    </button>
                  </div>

                  {/* App Categories */}
                  <div className="px-3">
                    <p className="font-bold text-[10px] text-forest-600 mb-2">Categories</p>
                    <div className="flex gap-2 overflow-x-hidden">
                      {["Sarees", "Jewellery", "Crafts"].map((cat) => (
                        <span key={cat} className="px-3 py-1.5 rounded-full bg-white border border-forest-100 text-[9px] font-semibold text-forest-700 shadow-sm">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* App Product Grid */}
                  <div className="p-3 flex-1 flex flex-col min-h-0">
                    <p className="font-bold text-[10px] text-forest-600 mb-2">Featured Collection</p>
                    <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden">
                      <div className="bg-white rounded-xl border border-forest-100/50 p-2 flex flex-col justify-between shadow-sm">
                        <div className="h-16 rounded-lg bg-forest-50 overflow-hidden relative">
                          <img src="/images/eri_silk_mekhela.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold text-[8px] truncate leading-none mt-1.5">Eri Mekhela</p>
                          <p className="font-extrabold text-[10px] text-muga mt-0.5">₹2,499</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl border border-forest-100/50 p-2 flex flex-col justify-between shadow-sm">
                        <div className="h-16 rounded-lg bg-forest-50 overflow-hidden relative">
                          <img src="/images/jonbiri_necklace.png" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-semibold text-[8px] truncate leading-none mt-1.5">Jonbiri Necklace</p>
                          <p className="font-extrabold text-[10px] text-muga mt-0.5">₹1,899</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Navigation */}
                  <div className="border-t border-forest-100 bg-white/90 backdrop-blur-sm px-5 py-2.5 flex items-center justify-between text-forest-400 text-[9px]">
                    <span className="text-forest font-bold">🏠 Home</span>
                    <span>🔍 Search</span>
                    <span>🛒 Cart</span>
                    <span>👤 Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
