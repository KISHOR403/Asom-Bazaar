import Link from "next/link"
import { Grid, Tag, ShoppingCart, TrendingUp, Settings, LogOut } from "lucide-react"

export default function Sidebar({ type = "seller" }) {
  const links = type === "admin" ? [
    { label: "Dashboard", href: "/admin/dashboard", icon: Grid },
    { label: "Users", href: "/admin/users", icon: Settings },
    { label: "Sellers", href: "/admin/sellers", icon: Settings },
    { label: "Products", href: "/admin/products", icon: Tag },
    { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { label: "Categories", href: "/admin/categories", icon: Settings },
    { label: "Analytics", href: "/admin/analytics", icon: TrendingUp },
  ] : [
    { label: "Dashboard", href: "/seller/dashboard", icon: Grid },
    { label: "My Products", href: "/seller/products", icon: Tag },
    { label: "Add Product", href: "/seller/products/add", icon: Settings },
    { label: "Orders", href: "/seller/orders", icon: ShoppingCart },
    { label: "Earnings", href: "/seller/earnings", icon: TrendingUp },
    { label: "Profile", href: "/seller/profile", icon: Settings },
  ]

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col h-screen sticky top-0 border-r border-slate-800">
      <div className="p-6">
        <Link href="/" className="font-heading font-extrabold text-xl text-primary tracking-wide">
          ASOM BAZAR
        </Link>
        <span className="block text-xs text-slate-500 mt-1 uppercase font-semibold">
          {type === "admin" ? "Admin Panel" : "Seller Dashboard"}
        </span>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <Link
              key={i}
              href={link.href}
              className="flex items-center px-4 py-3 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Icon className="h-5 w-5 mr-3 text-slate-400" />
              {link.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center w-full px-4 py-3 rounded-lg text-sm text-rose-400 hover:bg-rose-950/30 transition-colors">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  )
}
