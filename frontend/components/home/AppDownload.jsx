export default function AppDownload() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-forest via-forest-900 to-muga-900/60 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-muga/15 rounded-full blur-[100px]" />

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
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl px-6 py-3 transition-colors w-full sm:w-auto">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <p className="text-[10px] text-forest-200 leading-none">Download on the</p>
                <p className="text-sm font-bold leading-tight">App Store</p>
              </div>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl px-6 py-3 transition-colors w-full sm:w-auto">
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
            {/* Reflection / Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-8 bg-black/40 rounded-full blur-xl" />

            {/* Phone */}
            <div className="w-64 h-[480px] rounded-[3rem] bg-forest-950 border-[6px] border-forest-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-float flex flex-col relative z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-forest-950 rounded-b-3xl z-20 flex items-center justify-center">
                <div className="w-12 h-1.5 bg-forest-800 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="flex-1 flex flex-col pt-8 bg-ivory text-forest text-[11px] overflow-hidden select-none">
                {/* App Header */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-forest-100 bg-white">
                  <span className="font-heading font-extrabold text-sm tracking-tight text-forest">🪷 Asom Bazaar</span>
                  <div className="w-5 h-5 rounded-full bg-forest-100 overflow-hidden">
                    <img src="/images/artisan_rumi.png" alt="User avatar" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* App Hero Banner */}
                <div className="m-3 p-3 rounded-2xl bg-gradient-to-br from-forest to-forest-800 text-white relative overflow-hidden">
                  <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-muga/20 rounded-full blur-lg" />
                  <p className="font-semibold text-xs leading-tight">Authentic Handloom</p>
                  <p className="text-[9px] text-forest-200 mt-0.5">Flat 15% Off App-only</p>
                  <button className="mt-2 bg-muga text-white font-bold text-[8px] px-2 py-0.5 rounded-full">Shop Now</button>
                </div>

                {/* App Categories */}
                <div className="px-3">
                  <p className="font-bold text-[10px] text-forest-600 mb-1.5">Categories</p>
                  <div className="flex gap-2 overflow-x-hidden">
                    {['Sarees', 'Jewellery', 'Crafts'].map((cat) => (
                      <span key={cat} className="px-2.5 py-1 rounded-full bg-white border border-forest-100 text-[9px] font-semibold text-forest-700 shadow-sm">{cat}</span>
                    ))}
                  </div>
                </div>

                {/* App Product Grid */}
                <div className="p-3 flex-1 flex flex-col min-h-0">
                  <p className="font-bold text-[10px] text-forest-600 mb-1.5">Featured Collection</p>
                  <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden">
                    <div className="bg-white rounded-xl border border-forest-100/50 p-1.5 flex flex-col justify-between">
                      <div className="h-14 rounded-lg bg-forest-50 overflow-hidden relative">
                        <img src="/images/eri_silk_mekhela.png" alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-[8px] truncate leading-none mt-1">Eri Mekhela</p>
                        <p className="font-extrabold text-[9px] text-muga mt-0.5">₹2,499</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-forest-100/50 p-1.5 flex flex-col justify-between">
                      <div className="h-14 rounded-lg bg-forest-50 overflow-hidden relative">
                        <img src="/images/jonbiri_necklace.png" alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-[8px] truncate leading-none mt-1">Jonbiri Necklace</p>
                        <p className="font-extrabold text-[9px] text-muga mt-0.5">₹1,899</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Navigation */}
                <div className="border-t border-forest-100 bg-white px-4 py-2 flex items-center justify-between text-forest-400 text-[9px]">
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
    </section>
  )
}
