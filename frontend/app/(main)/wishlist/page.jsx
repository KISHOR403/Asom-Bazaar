import Link from "next/link"
import Breadcrumb from "../../../components/common/Breadcrumb"
import ProductGrid from "../../../components/product/ProductGrid"

const sampleWishlist = [
  { id: 3, title: "Assamese Jonbiri Pendant", price: 3200, rating: 4.8, category: "Jewellery", image: "💍" }
]

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb items={[{ label: "Wishlist" }]} />
      <h1 className="text-2xl font-bold font-heading text-slate-800 mt-6 mb-8">My Wishlist</h1>

      {sampleWishlist.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-slate-200 rounded-xl space-y-4">
          <span className="text-5xl block">❤️</span>
          <h2 className="text-lg font-bold text-slate-700">Your wishlist is empty</h2>
          <p className="text-xs text-slate-400">Save your favorite handcrafted items here.</p>
          <Link href="/products" className="inline-block bg-primary hover:bg-primary/95 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors">
            Shop Catalog
          </Link>
        </div>
      ) : (
        <ProductGrid products={sampleWishlist} />
      )}
    </div>
  )
}
