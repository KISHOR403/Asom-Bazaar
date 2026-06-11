import Link from "next/link"

const shopLinks = [
  { label: "All Products", href: "/products" },
  { label: "Mekhela Chador", href: "/category/mekhela-chador" },
  { label: "Silk & Stoles", href: "/category/silk" },
  { label: "Jewellery", href: "/category/jewellery" },
  { label: "Handicrafts", href: "/category/handicrafts" },
  { label: "Spices & Tea", href: "/category/spices" },
]

const sellerLinks = [
  { label: "Become a Seller", href: "/seller" },
  { label: "Seller Guidelines", href: "#" },
  { label: "Seller Dashboard", href: "/seller/dashboard" },
  { label: "Seller Support", href: "#" },
]

const helpLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Track Order", href: "/orders" },
  { label: "Returns Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-forest-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪷</span>
              <span className="font-heading font-bold text-xl text-white">
                Asom Bazaar
              </span>
            </div>
            <p className="text-sm text-forest-300 leading-relaxed max-w-xs">
              Bringing authentic Assam to every corner of India. Every purchase empowers a rural artisan.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {["Instagram", "Facebook", "WhatsApp", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-forest-600 hover:bg-muga text-forest-200 hover:text-forest-900 transition-colors text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muga mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-forest-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muga mb-5">
              Sellers
            </h4>
            <ul className="space-y-3">
              {sellerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-forest-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muga mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-forest-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-forest-600 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forest-400 text-center sm:text-left">
            © 2026 Asom Bazaar | Made with ❤️ in Assam, India
          </p>
          <div className="flex items-center gap-4 text-[10px] font-semibold text-forest-400 uppercase tracking-wider">
            <span className="flex items-center gap-1">🔒 Razorpay Secured</span>
            <span className="flex items-center gap-1">🛡️ SSL Certified</span>
            <span className="flex items-center gap-1">🚚 Shiprocket Powered</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
