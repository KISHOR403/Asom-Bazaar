"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  IndianRupee, 
  Camera, 
  Star, 
  Megaphone, 
  User, 
  Landmark, 
  Bell, 
  HelpCircle, 
  LogOut 
} from "lucide-react"

export default function Sidebar({ type = "seller" }) {
  const pathname = usePathname()

  const sellerInfo = {
    name: "Purnima Bora",
    location: "Sualkuchi, Assam",
    rating: 4.8,
    verified: true
  }

  const mainMenuLinks = [
    { label: "Dashboard", href: "/seller/dashboard", icon: LayoutDashboard },
    { label: "My Products", href: "/seller/products", icon: Package },
    { label: "Orders", href: "/seller/orders", icon: ShoppingCart },
    { label: "Earnings", href: "/seller/earnings", icon: IndianRupee },
    { label: "Upload Product", href: "/seller/products/add", icon: Camera },
    { label: "Reviews", href: "/seller/reviews", icon: Star },
    { label: "Promotions", href: "/seller/promotions", icon: Megaphone },
  ]

  const accountLinks = [
    { label: "My Profile", href: "/seller/profile", icon: User },
    { label: "Bank Details", href: "/seller/bank-details", icon: Landmark },
    { label: "Notifications", href: "/seller/notifications", icon: Bell },
    { label: "Help & Support", href: "/seller/help", icon: HelpCircle },
  ]

  const adminLinks = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Users", href: "/admin/users", icon: User },
    { label: "Sellers", href: "/admin/sellers", icon: Landmark },
    { label: "Products", href: "/admin/products", icon: Package },
    { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { label: "Categories", href: "/admin/categories", icon: Megaphone },
  ]

  const links = type === "admin" ? adminLinks : mainMenuLinks

  const renderLink = (link) => {
    const Icon = link.icon
    const isActive = pathname === link.href || (link.href !== "/seller/dashboard" && pathname?.startsWith(link.href))

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`relative flex items-center px-4 py-3 text-sm font-medium transition-all group overflow-hidden ${
          isActive 
            ? "bg-[#1E4D34] text-white" 
            : "text-slate-400 hover:text-white hover:bg-[#122A1E]/50"
        }`}
      >
        {/* Active Left Gold Border */}
        {isActive && (
          <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#C9A84C] transition-all duration-300" />
        )}
        <Icon className={`h-5 w-5 mr-3 transition-colors ${isActive ? "text-[#C9A84C]" : "text-slate-500 group-hover:text-slate-300"}`} />
        <span>{link.label}</span>
      </Link>
    )
  }

  return (
    <aside className="w-[240px] bg-[#0F2318] text-white flex flex-col h-screen sticky top-0 border-r border-[#1B3527] overflow-y-auto scrollbar-hide shrink-0 z-20">
      {/* Brand Header */}
      <div className="p-5 border-b border-[#1B3527]/50">
        <Link href="/" className="flex items-center space-x-2 font-heading font-extrabold text-lg tracking-wide text-white">
          <span className="text-xl">🪷</span>
          <div>
            <span className="block font-bold">Asom Bazaar</span>
            <span className="block text-[10px] text-[#C9A84C] tracking-widest font-semibold uppercase leading-none mt-0.5">
              {type === "admin" ? "Admin Hub" : "Seller Hub"}
            </span>
          </div>
        </Link>
      </div>

      {/* Seller Profile Card */}
      {type === "seller" && (
        <div className="p-4 mx-4 my-4 bg-[#142E1F] border border-[#1E4D34] rounded-xl shadow-inner">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg shadow-md border-2 border-[#C9A84C]/60">
              👩
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{sellerInfo.name}</p>
              <p className="text-[11px] text-slate-400 truncate">{sellerInfo.location}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs pt-2.5 border-t border-[#1E4D34]/60">
            <span className="flex items-center font-semibold text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current mr-1" />
              {sellerInfo.rating} Rating
            </span>
            {sellerInfo.verified && (
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium flex items-center space-x-0.5">
                <span>✅</span>
                <span>Verified</span>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <div className="flex-1 py-2 space-y-6">
        {type === "seller" ? (
          <>
            <div>
              <span className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                Main Menu
              </span>
              <nav className="space-y-0.5">
                {mainMenuLinks.map(renderLink)}
              </nav>
            </div>
            <div>
              <span className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                Account
              </span>
              <nav className="space-y-0.5">
                {accountLinks.map(renderLink)}
              </nav>
            </div>
          </>
        ) : (
          <div>
            <span className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
              Admin Menu
            </span>
            <nav className="space-y-0.5">
              {adminLinks.map(renderLink)}
            </nav>
          </div>
        )}
      </div>

      {/* Logout Footer */}
      <div className="p-4 border-t border-[#1B3527]/50 bg-[#0A1810]">
        <Link 
          href="/logout"
          className="flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-950/20 hover:text-rose-300 transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Link>
      </div>
    </aside>
  )
}

