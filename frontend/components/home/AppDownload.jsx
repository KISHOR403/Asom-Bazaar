export default function AppDownload() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-forest via-forest-600 to-forest relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-muga/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Shop Anytime,
            <br />
            <span className="text-muga">Anywhere</span>
          </h2>
          <p className="text-forest-200 text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
            Download the Asom Bazaar app for exclusive deals, faster checkout, and artisan story notifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl px-6 py-3 transition-colors">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <p className="text-[10px] text-forest-200 leading-none">Download on the</p>
                <p className="text-sm font-bold leading-tight">App Store</p>
              </div>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl px-6 py-3 transition-colors">
              <span className="text-2xl">▶️</span>
              <div className="text-left">
                <p className="text-[10px] text-forest-200 leading-none">Get it on</p>
                <p className="text-sm font-bold leading-tight">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* 3D Phone mockup */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative">
            {/* Reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-muga/10 rounded-full blur-xl" />

            {/* Phone */}
            <div className="w-56 h-[440px] rounded-[2.5rem] bg-gradient-to-b from-forest-700 to-forest-900 border-4 border-forest-600 shadow-2xl shadow-black/30 overflow-hidden animate-float flex flex-col items-center justify-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-forest-800 rounded-b-2xl" />
              <span className="text-7xl mb-3">🪷</span>
              <p className="text-white font-heading text-lg font-bold">Asom Bazaar</p>
              <p className="text-forest-300 text-[10px] mt-1">Crafted in Assam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
