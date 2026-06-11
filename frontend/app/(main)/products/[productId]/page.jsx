"use client"
import * as React from "react"
import ProductImages from "../../../../components/product/ProductImages"
import ProductDetails from "../../../../components/product/ProductDetails"
import SizeSelector from "../../../../components/product/SizeSelector"
import ReviewSection from "../../../../components/product/ReviewSection"
import RelatedProducts from "../../../../components/product/RelatedProducts"
import Breadcrumb from "../../../../components/common/Breadcrumb"

export default function ProductDetailPage({ params }) {
  const productId = params?.productId
  const [selectedSize, setSelectedSize] = React.useState("Standard")

  // Mock product details
  const product = {
    id: productId,
    title: "Muga Silk Mekhela Chador",
    price: 18500,
    rating: 5,
    category: "Mekhela Chador",
    images: ["🧣", "🧣", "🧣"],
    description: "This Muga Silk Mekhela Chador is directly hand-woven by national award-winning weavers of Sualkuchi, the silk town of Assam. It features authentic golden thread (Zari) work representing Assamese symbols like the Kalka and Kaziranga rhinoceros."
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb 
        items={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div>
          <ProductImages images={product.images} />
        </div>
        <div className="space-y-6">
          <ProductDetails product={product} />
          <SizeSelector 
            selectedSize={selectedSize} 
            onChange={setSelectedSize} 
          />
        </div>
      </div>

      <div className="border-t border-slate-100 my-16 pt-12">
        <ReviewSection />
      </div>

      <div className="border-t border-slate-100 my-16 pt-12">
        <RelatedProducts />
      </div>
    </div>
  )
}
