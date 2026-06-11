"use client"
import * as React from "react"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-ivory to-forest-50/30">
      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-muga-100/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-forest-100/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 pb-16">
        {/* Left — Copy */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Pill badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-forest bg-forest-50 border border-forest-100 px-4 py-2 rounded-full">
            <span className="text-muga">✦</span> 100% Authentic • Handcrafted in Assam
          </span>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-forest">
            Wear the Soul
            <br />
            <span className="text-muga">of Assam</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-forest-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-body">
            Discover mekhela chadors, muga silk, tribal jewellery and rare handcrafts — made by real
            artisan women, delivered anywhere in India.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 h-13 px-8 py-3.5 rounded-full bg-forest text-white text-sm font-semibold shadow-lg shadow-forest/20 hover:bg-forest-600 hover:shadow-xl hover:shadow-forest/25 transition-all btn-3d"
            >
              Shop Now <span className="text-base">→</span>
            </Link>
            <button className="inline-flex items-center gap-2 h-13 px-8 py-3.5 rounded-full border-2 border-forest-200 text-forest text-sm font-semibold hover:bg-forest-50 transition-colors">
              Watch Our Story <span className="text-base">▶</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-forest-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-muga text-muga" />
              <span className="font-bold text-forest">4.9</span>
            </span>
            <span className="w-px h-4 bg-forest-200" />
            <span><span className="font-bold text-forest">2,400+</span> Products</span>
            <span className="w-px h-4 bg-forest-200" />
            <span><span className="font-bold text-forest">800+</span> Artisans</span>
          </div>
        </div>

        {/* Right — Floating product visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Ghost blur behind */}
          <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] bg-muga-200/30 rounded-full blur-[60px] animate-float-slow" />

          {/* Product card with depth */}
          <div className="relative animate-float">
            <div className="w-72 h-96 sm:w-80 sm:h-[440px] lg:w-[360px] lg:h-[480px] rounded-3xl bg-gradient-to-b from-ivory to-white border border-muga-100/50 shadow-2xl shadow-forest-900/8 overflow-hidden flex flex-col items-center justify-center">
              <span className="text-[140px] sm:text-[160px] lg:text-[180px] drop-shadow-lg select-none">🧣</span>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
                <p className="text-xs font-semibold text-muga tracking-wider uppercase">Featured</p>
                <p className="font-heading text-lg font-bold text-forest mt-1">Muga Silk Mekhela</p>
                <p className="text-sm text-forest-400">Handwoven in Sualkuchi</p>
              </div>
            </div>
            {/* Floating accent badge */}
            <div className="absolute -top-4 -right-4 bg-muga text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse-gold">
              Bestseller
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
