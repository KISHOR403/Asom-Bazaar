"use client"
import * as React from "react"
import ProductGrid from "../../../../components/product/ProductGrid"
import Breadcrumb from "../../../../components/common/Breadcrumb"

const sampleProducts = [
  { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, rating: 5, category: "mekhela-chador", image: "🧣" },
  { id: 2, title: "Cotton Handwoven Gamusa", price: 450, rating: 5, category: "mekhela-chador", image: "🧣" },
  { id: 3, title: "Assamese Jonbiri Pendant", price: 3200, rating: 4.8, category: "jewellery", image: "💍" }
]

export default function CategoryDetailPage({ params }) {
  const slug = params?.slug

  // Format slug to user-friendly title
  const categoryTitle = slug
    ? slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "Category"

  const filtered = sampleProducts.filter(p => p.category === slug)

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb 
        items={[
          { label: "Category" },
          { label: categoryTitle }
        ]} 
      />

      <div className="mt-6">
        <h1 className="text-3xl font-extrabold font-heading text-slate-800 mb-2">{categoryTitle}</h1>
        <p className="text-sm text-slate-500 mb-8">Authentic designs handloomed and handcrafted across Assam</p>
        <ProductGrid products={filtered} />
      </div>
    </div>
  )
}
