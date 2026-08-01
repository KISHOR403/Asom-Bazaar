"use client"
import * as React from "react"
import Link from "next/link"
import { Heart, ShieldCheck, Sparkles, Users, Award, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Artisans Onboarded", value: "3,500+" },
    { label: "Assam Districts Covered", value: "33" },
    { label: "Authentic Crafts Sold", value: "25,000+" },
    { label: "Fair Trade Income Generated", value: "₹2.4 Cr+" },
  ]

  const values = [
    {
      title: "Preserving Heritage",
      desc: "Every weave of Muga silk, bamboo craft, and handmade piece carries centuries of Assamese cultural tradition.",
      icon: "🪷",
    },
    {
      title: "Direct Artisan Impact",
      desc: "We eliminate middlemen so rural weavers and crafters receive fair prices and sustainable livelihoods.",
      icon: "🤝",
    },
    {
      title: "100% Authentic GI Tagged",
      desc: "Certified authentic products sourced directly from weavers in Sualkuchi, Majuli, and indigenous clusters.",
      icon: "🛡️",
    },
    {
      title: "Sustainable & Eco-Friendly",
      desc: "Natural dyes, biodegradable bamboo, and organic silks crafted in harmony with nature.",
      icon: "🌿",
    },
  ]

  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-forest text-white py-20 px-5 lg:px-8">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            🪷 Our Story & Mission
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Bringing Authentic Assam to <br className="hidden sm:inline" />
            <span className="text-muga">Every Corner of India</span>
          </h1>
          <p className="text-forest-200 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Asom Bazaar is a digital bridge connecting rural master weavers, tribal artisans, and traditional craft clusters of Assam directly to conscious buyers across the country.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-muga text-white px-7 py-3.5 rounded-full font-semibold hover:bg-muga/90 transition-colors text-sm shadow-lg shadow-muga-900/20"
            >
              Explore Collection <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/become-a-seller"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors text-sm border border-white/20"
            >
              Join as Artisan
            </Link>
          </div>
        </div>

        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-muga/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-400/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Impact Stats */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-forest-100/30 shadow-xl shadow-forest-900/5">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 border-r last:border-r-0 border-forest-100/20">
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-forest">{stat.value}</p>
              <p className="text-xs sm:text-sm text-forest-500 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-muga">Why We Exist</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest leading-tight">
              Preserving Centuries of Craft, Empowering Rural Homes
            </h2>
            <p className="text-forest-600 text-sm sm:text-base leading-relaxed">
              Assam is home to world-renowned golden Muga silk, intricate bamboo artistry, tribal handlooms, and rich organic teas. Yet, for decades, master artisans faced exploitation from intermediaries and limited market reach.
            </p>
            <p className="text-forest-600 text-sm sm:text-base leading-relaxed">
              Asom Bazaar was created to digitize and democratize Assam&apos;s artisan economy. We provide end-to-end support including quality certification, packaging, photography, and seamless digital payouts directly to artisan bank accounts.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Direct payment to artisan accounts without middleman fees",
                "Authenticity verification and GI tag certification",
                "Pan-India doorstep delivery with secure logistics",
                "Dedicated seller training for rural weavers"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-forest-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-muga shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-forest-100/30 rounded-3xl p-8 border border-forest-100/40 space-y-6">
              <div className="text-4xl">🌿</div>
              <h3 className="font-heading text-2xl font-bold text-forest">The Asom Bazaar Commitment</h3>
              <p className="text-forest-600 text-sm leading-relaxed">
                Every product listed on our platform passes strict artisan verification standards. When you buy a Mekhela Chador or a cane handicraft here, you are keeping a legacy alive and nourishing a village ecosystem.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-forest-100/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-50 flex items-center justify-center text-forest text-xl font-bold">
                  🪷
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muga">Heritage Sourced</p>
                  <p className="text-xs text-forest-600 font-semibold">Directly from Sualkuchi & Majuli Artisans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-forest-50/50 py-20 px-5 lg:px-8 border-y border-forest-100/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muga">Our Guiding Pillars</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest">What Drives Asom Bazaar</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-forest-100/30 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="text-3xl">{v.icon}</div>
                <h3 className="font-heading font-bold text-lg text-forest">{v.title}</h3>
                <p className="text-forest-600 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
