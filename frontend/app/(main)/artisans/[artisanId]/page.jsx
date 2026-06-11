import Breadcrumb from "../../../../components/common/Breadcrumb"
import ProductGrid from "../../../../components/product/ProductGrid"

export default function ArtisanDetailPage({ params }) {
  const artisanId = params?.artisanId

  const artisan = {
    id: artisanId,
    name: "Pranab Kalita",
    craft: "Muga Silk Weaver",
    village: "Sualkuchi",
    avatar: "👨‍🌾",
    bio: "Pranab Kalita has been weaving the premium Muga silk at Sualkuchi for over three decades. Muga is known for its natural golden shine and durability. Every Mekhela Chador he designs takes about 15-20 days of handloom work. He is committed to teaching younger generations the heritage trade.",
    products: [
      { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, rating: 5, category: "Mekhela Chador", image: "🧣" }
    ]
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb 
        items={[
          { label: "Artisans", href: "/artisans" },
          { label: artisan.name }
        ]} 
      />

      <div className="flex flex-col md:flex-row gap-10 items-start mt-6 border-b border-slate-100 pb-12">
        <span className="text-9xl p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm self-center md:self-start">
          {artisan.avatar}
        </span>
        <div className="flex-1 space-y-4">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">
            {artisan.craft}
          </span>
          <h1 className="text-3xl font-extrabold font-heading text-slate-800">{artisan.name}</h1>
          <p className="text-xs font-bold text-slate-400">Location: {artisan.village}, Kamrup, Assam</p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">{artisan.bio}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold font-heading text-slate-800 mb-8">Creations by {artisan.name}</h2>
        <ProductGrid products={artisan.products} />
      </div>
    </div>
  )
}
