"use client"
import * as React from "react"
import Link from "next/link"
import { Star, X, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Heart } from "lucide-react"

/* ─── Story Slides Data ─── */
const STORY_SLIDES = [
  {
    id: 1,
    tag: "HERITAGE & WEAVES",
    title: "The Golden Threads of Sualkuchi",
    subtitle: "Sualkuchi, known as the Manchester of the East, has been weaving pure Muga Silk for over 1,000 years. Muga silk is naturally golden and grows shinier with every wash.",
    image: "/images/mekhela_silk_hero.png",
    stat: "1,000+ Years",
    statLabel: "Living Tradition",
  },
  {
    id: 2,
    tag: "REAL ARTISANS",
    title: "Meet Purnima & The Weavers",
    subtitle: "“Weaving for 22 years in my village home. Through Asom Bazaar, my handwoven Mekhela Chadors reach families across India with fair prices.”",
    image: "/images/artisan_purnima.png",
    stat: "800+ Women",
    statLabel: "Empowered Artisans",
    artisanBadge: "Purnima Bora • Sualkuchi, Assam",
  },
  {
    id: 3,
    tag: "TRIBAL JEWELLERY",
    title: "Hand-chased Ornaments",
    subtitle: "Every Jonbiri, Doogdoogi, and Lokaparo necklace is crafted in pure silver plated with 24k gold leaf using age-old Assamese goldsmith techniques.",
    image: "/images/jonbiri_necklace.png",
    stat: "100% Pure",
    statLabel: "Hand-chased Craft",
  },
  {
    id: 4,
    tag: "SUSTAINABLE LIVES",
    title: "Eco-friendly Bamboo & Crafts",
    subtitle: "From organic Eri silk silkworm rearing to hand-carved bamboo lamps by Rumi Boro, our marketplace keeps ancient sustainable arts thriving.",
    image: "/images/artisan_rumi.png",
    stat: "Zero Plastic",
    statLabel: "Sustainable Natural Fibers",
    artisanBadge: "Rumi Boro • Barpeta, Assam",
  },
]

/* ─── Custom Interactive Story Showcase Modal ─── */
function StoryModal({ isOpen, onClose }) {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isVisible, setIsVisible] = React.useState(false)
  const [liked, setLiked] = React.useState(false)
  const timerRef = React.useRef(null)

  const currentSlide = STORY_SLIDES[activeSlideIndex]

  // Entrance & exit handling
  React.useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setIsVisible(true))
      document.body.style.overflow = "hidden"
      setActiveSlideIndex(0)
      setIsPlaying(true)
    } else {
      setIsVisible(false)
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Auto advance timer
  React.useEffect(() => {
    if (!isOpen || !isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % STORY_SLIDES.length)
    }, 6000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isOpen, isPlaying, activeSlideIndex])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === " ") setIsPlaying((p) => !p)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, activeSlideIndex])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose(), 350)
  }

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % STORY_SLIDES.length)
  }

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + STORY_SLIDES.length) % STORY_SLIDES.length)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Dark Blurred Backdrop */}
      <div
        className={`absolute inset-0 bg-forest-950/85 backdrop-blur-xl transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Main Story Container */}
      <div
        className={`relative w-full max-w-3xl aspect-[9/14] sm:aspect-[16/10] bg-forest-900 rounded-3xl overflow-hidden border border-muga/20 shadow-2xl shadow-black/80 flex flex-col justify-between transition-all duration-500 z-10 ${
          isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-6 opacity-0"
        }`}
      >
        {/* Background Image with smooth Ken Burns zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            key={currentSlide.id}
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover animate-float-slow scale-105 transition-transform duration-[6000ms]"
            style={{ filter: "brightness(0.55) contrast(1.1)" }}
          />
          {/* Gradient vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-transparent to-transparent" />
        </div>

        {/* ── TOP HEADER ── */}
        <div className="relative z-20 p-4 sm:p-6 space-y-4">
          {/* Progress Bars (Story Style) */}
          <div className="flex items-center gap-2">
            {STORY_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() => setActiveSlideIndex(idx)}
                className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              >
                <div
                  className={`h-full bg-muga transition-all duration-300 ${
                    idx === activeSlideIndex
                      ? isPlaying
                        ? "w-full transition-[width] duration-[6000ms] ease-linear"
                        : "w-full"
                      : idx < activeSlideIndex
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Top Bar Controls */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-wide flex items-center gap-1.5">
                🪷 Asom Bazaar <span className="text-xs text-muga font-semibold font-body">Our Story</span>
              </span>
              {currentSlide.artisanBadge && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-forest-200 bg-forest-900/60 border border-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-muga" />
                  {currentSlide.artisanBadge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                title={isPlaying ? "Pause story" : "Play story"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                title="Close story"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── MIDDLE CLICK ZONES (Prev/Next) ── */}
        <div className="absolute inset-y-16 inset-x-0 z-10 flex justify-between pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-1/4 h-full pointer-events-auto flex items-center justify-start pl-4 group opacity-0 hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </button>
          <button
            onClick={handleNext}
            className="w-1/4 h-full pointer-events-auto flex items-center justify-end pr-4 group opacity-0 hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
              <ChevronRight className="w-6 h-6" />
            </div>
          </button>
        </div>

        {/* ── BOTTOM CONTENT OVERLAY ── */}
        <div className="relative z-20 p-5 sm:p-8 space-y-4 max-w-2xl">
          {/* Category Chip */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muga bg-muga/15 border border-muga/30 px-3 py-1 rounded-full backdrop-blur-md">
              ✦ {currentSlide.tag}
            </span>
            <span className="text-xs text-forest-300 font-medium">
              Chapter {activeSlideIndex + 1} of {STORY_SLIDES.length}
            </span>
          </div>

          {/* Title */}
          <h3 key={currentSlide.title} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading leading-tight animate-fade-up">
            {currentSlide.title}
          </h3>

          {/* Subtitle */}
          <p key={currentSlide.subtitle} className="text-xs sm:text-sm text-forest-100/90 leading-relaxed font-body line-clamp-3 sm:line-clamp-none animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {currentSlide.subtitle}
          </p>

          {/* Footer Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
            {/* Stat */}
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold text-muga font-heading">{currentSlide.stat}</span>
              <span className="text-[11px] text-forest-300 uppercase tracking-wider">{currentSlide.statLabel}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLiked((l) => !l)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  liked
                    ? "bg-rose-500/20 border-rose-500 text-rose-400"
                    : "bg-white/10 border-white/15 text-white hover:bg-white/20"
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-rose-500 text-rose-500" : ""}`} />
              </button>
              <Link
                href="/products"
                onClick={handleClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muga text-forest-950 font-bold text-xs sm:text-sm hover:bg-muga-400 transition-all shadow-lg shadow-muga/20"
              >
                Explore Collection →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroBanner() {
  const [isStoryOpen, setIsStoryOpen] = React.useState(false)

  return (
    <>
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
              <button
                onClick={() => setIsStoryOpen(true)}
                className="group inline-flex items-center justify-center gap-3 h-14 px-10 rounded-full border-2 border-forest text-forest text-base font-semibold hover:bg-forest hover:text-white transition-all duration-300"
              >
                Watch Our Story
                {/* Animated play icon */}
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-forest/10 group-hover:bg-white/20 transition-all duration-300">
                  <span className="absolute inset-0 rounded-full border-2 border-forest/20 group-hover:border-white/30 animate-ping opacity-30" />
                  <svg
                    className="w-3.5 h-3.5 text-forest group-hover:text-white transition-colors ml-0.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M4 2.5v11l10-5.5L4 2.5z" />
                  </svg>
                </span>
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

      {/* Brand Story Showcase Modal */}
      <StoryModal isOpen={isStoryOpen} onClose={() => setIsStoryOpen(false)} />
    </>
  )
}
