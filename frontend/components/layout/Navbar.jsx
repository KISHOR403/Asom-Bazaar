"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, BookOpen, HelpCircle, RefreshCw, Phone, ShieldCheck, Scale, Sparkles, Tag } from "lucide-react"
import useAuth from "../../hooks/useAuth"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [moreOpen, setMoreOpen] = React.useState(false)
  const [catOpen, setCatOpen] = React.useState(false)
  const { user, isAuthenticated, role, logout } = useAuth()

  const moreTimeoutRef = React.useRef(null)
  const catTimeoutRef = React.useRef(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdowns on route change
  React.useEffect(() => {
    setMoreOpen(false)
    setCatOpen(false)
    setMobileOpen(false)
  }, [pathname])

  if (pathname === "/become-a-seller") {
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-forest-100/10 shadow-sm" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🪷</span>
            <span className="font-heading font-bold text-xl text-forest tracking-wide">Asom Bazaar</span>
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold text-forest hover:text-forest-600 transition-colors"
          >
            Already a seller? <span className="underline">Sign In</span>
          </Link>
        </div>
      </header>
    )
  }

  const categoryItems = [
    { label: "All Products", href: "/products", desc: "Browse full artisan collection", icon: "🛍️" },
    { label: "Mekhela Chador", href: "/category/mekhela-chador", desc: "Pure Muga, Pat & Eri silks", icon: "🥻" },
    { label: "Tribal Jewellery", href: "/category/jewellery", desc: "Jonbiri, Gamkharu & Lokaparo", icon: "💍" },
    { label: "Bamboo & Cane", href: "/category/bamboo", desc: "Eco-friendly home & lamps", icon: "🎍" },
    { label: "Silk & Stoles", href: "/category/silk", desc: "Handwoven scarves & shawls", icon: "🪡" },
    { label: "Spices & Organic Tea", href: "/category/spices", desc: "Fresh from Karbi Anglong & Tea estates", icon: "🌿" },
  ]

  const moreItems = [
    { label: "Seller Guidelines", href: "/seller-guidelines", desc: "Standards, fees & dispatch policy", icon: BookOpen },
    { label: "Seller Support Desk", href: "/seller-support", desc: "Help for weavers & craft sellers", icon: HelpCircle },
    { label: "Returns & Exchange", href: "/returns-policy", desc: "7-day easy return policy", icon: RefreshCw },
    { label: "Contact Us", href: "/contact", desc: "Get in touch with Guwahati desk", icon: Phone },
    { label: "Privacy Policy", href: "/privacy-policy", desc: "Data protection & security", icon: ShieldCheck },
    { label: "Terms of Service", href: "/terms-of-service", desc: "Platform usage terms", icon: Scale },
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
          
          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(catTimeoutRef.current)
              setCatOpen(true)
            }}
            onMouseLeave={() => {
              catTimeoutRef.current = setTimeout(() => setCatOpen(false), 200)
            }}
          >
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="gold-underline flex items-center gap-1 text-sm font-medium text-forest-600 hover:text-forest transition-colors py-1"
            >
              Categories <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${catOpen ? "rotate-180 text-muga" : ""}`} />
            </button>

            {catOpen && (
              <div className="absolute top-full left-0 w-72 pt-3 animate-fade-up z-50">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-forest-100/40 p-3 shadow-2xl shadow-forest-900/15 space-y-1">
                  {categoryItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-forest-50/80 transition-colors group"
                      onClick={() => setCatOpen(false)}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-forest group-hover:text-muga transition-colors">{item.label}</p>
                        <p className="text-[10px] text-forest-400 leading-tight">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="gold-underline text-sm font-medium text-forest-600 hover:text-forest transition-colors py-1"
          >
            About
          </Link>

          <Link
            href="/artisans"
            className="gold-underline text-sm font-medium text-forest-600 hover:text-forest transition-colors py-1"
          >
            Artisans
          </Link>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(moreTimeoutRef.current)
              setMoreOpen(true)
            }}
            onMouseLeave={() => {
              moreTimeoutRef.current = setTimeout(() => setMoreOpen(false), 200)
            }}
          >
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="gold-underline flex items-center gap-1 text-sm font-medium text-forest-600 hover:text-forest transition-colors py-1"
            >
              More <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180 text-muga" : ""}`} />
            </button>

            {moreOpen && (
              <div className="absolute top-full right-0 w-80 pt-3 animate-fade-up z-50">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-forest-100/40 p-3 shadow-2xl shadow-forest-900/15 space-y-1">
                  <div className="px-3 py-1.5 border-b border-forest-100/20 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-muga">
                      Explore Resources & Help
                    </span>
                  </div>

                  {moreItems.map((item) => {
                    const IconComp = item.icon
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-forest-50/80 transition-colors group"
                        onClick={() => setMoreOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest flex items-center justify-center shrink-0 group-hover:bg-muga group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-forest group-hover:text-muga transition-colors">{item.label}</p>
                          <p className="text-[10px] text-forest-400 leading-tight">{item.desc}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

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
          {isAuthenticated ? (
            <>
              {role === "seller" ? (
                <Link
                  href="/seller/dashboard"
                  className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-forest text-white text-sm font-semibold hover:bg-forest-600 transition-colors shadow-sm"
                >
                  Seller Dashboard
                </Link>
              ) : (
                <Link
                  href="/become-a-seller"
                  className="hidden md:inline-flex items-center gap-1 h-10 px-5 rounded-full border border-muga text-muga hover:bg-muga hover:text-white text-sm font-semibold transition-all duration-300 shadow-sm"
                >
                  Become a Seller ↗
                </Link>
              )}
              <Link
                href="/profile"
                className="hidden md:inline-flex items-center gap-1 h-10 px-4 rounded-full text-forest-700 hover:text-forest text-sm font-semibold transition-colors"
              >
                <User className="h-[18px] w-[18px]" /> {user?.name?.split(" ")[0] || "Profile"}
              </Link>
              <button
                onClick={logout}
                className="hidden md:inline-flex items-center h-10 px-4 rounded-full text-red-600 hover:bg-red-50 text-sm font-semibold transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden md:inline-flex items-center h-10 px-4 text-forest-700 hover:text-forest text-sm font-semibold transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-forest text-white text-sm font-semibold hover:bg-forest-600 transition-colors shadow-sm"
              >
                Sign Up
              </Link>
              <Link
                href="/become-a-seller"
                className="hidden md:inline-flex items-center gap-1 h-10 px-5 rounded-full border border-muga text-muga hover:bg-muga hover:text-white text-sm font-semibold transition-all duration-300 shadow-sm"
              >
                Become a Seller ↗
              </Link>
            </>
          )}

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
        <div className="lg:hidden glass border-t border-border/50 animate-fade-up max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            <Link
              href="/products"
              className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              All Products
            </Link>
            <Link
              href="/about"
              className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/artisans"
              className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Artisans
            </Link>

            {/* Mobile More Section */}
            <div className="border-t border-forest-100/30 pt-3 mt-2 space-y-1">
              <span className="px-4 text-[10px] font-extrabold uppercase tracking-wider text-muga block mb-1">
                More Resources
              </span>
              {moreItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-forest-700 hover:bg-forest-50 flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>•</span> {item.label}
                </Link>
              ))}
            </div>

            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors flex items-center gap-2 mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="h-4 w-4" /> {user?.name || "Profile"}
                </Link>
                {role === "seller" ? (
                  <Link
                    href="/seller/dashboard"
                    className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Seller Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/become-a-seller"
                    className="px-4 py-3 rounded-lg text-sm font-semibold text-muga hover:bg-muga/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Become a Seller ↗
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout()
                    setMobileOpen(false)
                  }}
                  className="mt-2 text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-3 rounded-lg text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign Up
                </Link>
                <Link
                  href="/become-a-seller"
                  className="mt-2 flex items-center justify-center gap-2 h-11 rounded-lg border border-muga text-muga text-sm font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Become a Seller ↗
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
