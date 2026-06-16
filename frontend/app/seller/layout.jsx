"use client"
import Sidebar from "../../components/layout/Sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, ShoppingCart, IndianRupee, User } from "lucide-react"

export default function SellerLayout({ children }) {
  const pathname = usePathname()

  const bottomNavItems = [
    { label: "Home", href: "/seller/dashboard", icon: LayoutDashboard },
    { label: "Products", href: "/seller/products", icon: Package },
    { label: "Orders", href: "/seller/orders", icon: ShoppingCart },
    { label: "Earnings", href: "/seller/earnings", icon: IndianRupee },
    { label: "Profile", href: "/seller/profile", icon: User },
  ]

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F4F7F5]">
      {/* Sidebar - Desktop Only */}
      <div className="hidden md:block">
        <Sidebar type="seller" />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto min-h-[calc(100vh-64px)] md:max-h-screen pb-20 md:pb-8">
        {children}
      </main>

      {/* Bottom Tab Bar - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F2318] border-t border-[#1B3527] px-4 py-2 flex justify-around items-center z-30 shadow-2xl">
        {bottomNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== "/seller/dashboard" && pathname?.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all ${
                isActive 
                  ? "text-[#C9A84C]" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="h-5.5 w-5.5" />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

