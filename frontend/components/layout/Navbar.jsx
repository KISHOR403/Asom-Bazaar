"use client"
import * as React from "react"
import Link from "next/link"
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: "Sarees", href: "/category/mekhela-chador" },
    { label: "Jewellery", href: "/category/jewellery" },
    { label: "Handicrafts", href: "/category/handicrafts" },
    { label: "Silk", href: "/category/silk" },
    { label: "Spices", href: "/category/spices" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass ${
        scrolled
          ? "shadow-lg shadow-forest-900/10 border-b border-forest-100/30"
          : "shadow-md shadow-forest-900/2"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-[72px] items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🪷</span>
          <span className="font-heading font-bold text-2xl tracking-tight text-forest">
            Asom Bazaar
          </span>
        </Link>

        {/* Center nav links — desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="gold-underline text-sm font-medium text-forest-600 hover:text-forest transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <button className="gold-underline flex items-center gap-1 text-sm font-medium text-forest-600 hover:text-forest transition-colors py-1">
            More <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-forest-50 text-forest-500 hover:text-forest transition-colors"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href="/wishlist"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-forest-50 text-forest-500 hover:text-forest transition-colors"
          >
            <Heart className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href="/cart"
            className="relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-forest-50 text-forest-500 hover:text-forest transition-colors"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-muga text-[10px] font-bold text-white">
              2
            </span>
          </Link>
          <Link
            href="/login"
            className="hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-forest text-white text-sm font-semibold hover:bg-forest-600 transition-colors shadow-sm"
          >
            Sign In
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-forest-50 text-forest-500"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border/50 animate-fade-up">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 flex items-center justify-center gap-2 h-11 rounded-lg bg-forest text-white text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              <User className="h-4 w-4" /> Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
