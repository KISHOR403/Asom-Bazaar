import ProductCard from "./ProductCard"

const sampleRelated = [
  { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, rating: 5, category: "Mekhela Chador", image: "🧣" },
  { id: 3, title: "Assamese Jonbiri Pendant", price: 3200, rating: 4.8, category: "Jewellery", image: "💍" }
]

export default function RelatedProducts({ products = sampleRelated }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-heading text-slate-900">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  )
}
