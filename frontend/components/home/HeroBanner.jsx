"use client"
import * as React from "react"
import Link from "next/link"
import { Star } from "lucide-react"

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
          <h1 className="text-6xl sm:text-7xl lg:text-[85px] font-extrabold leading-[1.05] tracking-tight text-forest font-heading">
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
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-forest text-muga text-base font-bold shadow-lg shadow-forest/25 hover:bg-forest-600 hover:text-muga-300 hover:shadow-xl hover:shadow-forest/35 transition-all btn-3d"
            >
              Shop Now <span className="text-lg">→</span>
            </Link>
            <button className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full border-2 border-forest text-forest text-base font-semibold hover:bg-forest hover:text-white transition-all">
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
            <div className="w-72 h-96 sm:w-80 sm:h-[440px] lg:w-[360px] lg:h-[480px] rounded-3xl bg-gradient-to-b from-ivory to-white border border-muga-100/50 shadow-2xl shadow-forest-900/8 overflow-hidden flex flex-col relative group">
              <img
                src="/images/muga_silk_scarf.png"
                alt="Muga Silk Mekhela"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent">
                <p className="text-xs font-semibold text-muga tracking-wider uppercase">Featured</p>
                <p className="font-heading text-xl font-bold text-forest mt-1">Muga Silk Mekhela</p>
                <p className="text-sm text-forest-400">Handwoven in Sualkuchi</p>
              </div>
            </div>
            {/* Floating accent badge */}
            <div className="absolute -top-4 -right-4 bg-muga text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse-gold z-10">
              Bestseller
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
