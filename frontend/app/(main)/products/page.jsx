"use client"
import * as React from "react"
import FilterPanel from "../../../components/common/FilterPanel"
import ProductGrid from "../../../components/product/ProductGrid"
import Breadcrumb from "../../../components/common/Breadcrumb"

const sampleProducts = [
  { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, rating: 5, category: "Mekhela Chador", image: "🧣" },
  { id: 2, title: "Traditional Cotton Gamusa", price: 450, rating: 5, category: "Mekhela Chador", image: "🧣" },
  { id: 3, title: "Assamese Jonbiri Pendant", price: 3200, rating: 4.8, category: "Jewellery", image: "💍" },
  { id: 4, title: "Handcrafted Bamboo Storage Basket", price: 890, rating: 4.6, category: "Bamboo Crafts", image: "🧺" },
]

export default function ProductsPage() {
  const [filtered, setFiltered] = React.useState(sampleProducts)

  const handleFilter = ({ category, maxPrice }) => {
    let result = sampleProducts
    if (category) {
      result = result.filter(p => p.category === category)
    }
    result = result.filter(p => p.price <= maxPrice)
    setFiltered(result)
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb items={[{ label: "Products" }]} />
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="w-full md:w-64 shrink-0">
          <FilterPanel onFilterChange={handleFilter} />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold font-heading mb-6">Assamese Craft Catalog</h1>
          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  )
}
