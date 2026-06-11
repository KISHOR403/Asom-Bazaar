import ProductCard from "./ProductCard"

export default function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl">
        <span className="text-4xl block mb-2">🔍</span>
        <h3 className="font-semibold text-slate-700">No products found</h3>
        <p className="text-xs text-slate-400 mt-1">Try adjusting your filters or search keywords.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
