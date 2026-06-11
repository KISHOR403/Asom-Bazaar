"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import { Input } from "../../../../../components/ui/input"
import { Button } from "../../../../../components/ui/button"
import ImageUploader from "../../../../../components/common/ImageUploader"

export default function EditProductPage({ params }) {
  const router = useRouter()
  const productId = params?.productId
  const [images, setImages] = React.useState(["🧣"])
  
  const [formData, setFormData] = React.useState({
    title: "Muga Silk Mekhela Chador",
    category: "Mekhela Chador",
    price: "18500",
    stock: "4",
    description: "This Muga Silk Mekhela Chador is directly hand-woven by award-winning weavers of Sualkuchi."
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Edit product submit", { productId, ...formData, images })
    router.push("/seller/products")
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Edit Creation</h1>
        <p className="text-sm text-slate-500 mt-1">Update details for product ID: {productId}</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Product Title</label>
            <Input name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-slate-700"
            >
              <option>Mekhela Chador</option>
              <option>Jewellery</option>
              <option>Bamboo & Cane</option>
              <option>Tea</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Price (INR)</label>
            <Input name="price" type="number" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Available Stock</label>
            <Input name="stock" type="number" value={formData.stock} onChange={handleChange} required />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-transparent p-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-slate-700"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Product Images</label>
          <ImageUploader images={images} onChange={setImages} />
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="flex-1">
            Save Changes
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/seller/products")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
