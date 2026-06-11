"use client"
import Link from "next/link"
import { Home, Grid, Heart, ShoppingBag, User } from "lucide-react"
import { usePathname } from "next/navigation"

export default function MobileNav() {
  const pathname = usePathname()

  const links = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/products", icon: Grid, label: "Shop" },
    { href: "/wishlist", icon: Heart, label: "Wishlist" },
    { href: "/cart", icon: ShoppingBag, label: "Cart" },
    { href: "/profile", icon: User, label: "Profile" },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-forest-100/50 h-16 z-40 flex items-center justify-around px-4 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`flex flex-col items-center justify-center transition-colors ${
              isActive ? "text-forest" : "text-forest-400 hover:text-forest"
            }`}
          >
            <link.icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : ""}`} />
            <span className={`text-[10px] mt-1 ${isActive ? "font-bold" : "font-medium"}`}>
              {link.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
