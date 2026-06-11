"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"
import ImageUploader from "../../../../components/common/ImageUploader"

export default function AddProductPage() {
  const router = useRouter()
  const [images, setImages] = React.useState([])
  const [formData, setFormData] = React.useState({
    title: "",
    category: "Mekhela Chador",
    price: "",
    stock: "",
    description: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Add product submit", { ...formData, images })
    router.push("/seller/products")
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Add New Creation</h1>
        <p className="text-sm text-slate-500 mt-1">Upload details of your handcrafted product.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Product Title</label>
            <Input name="title" placeholder="Muga Silk Mekhela..." value={formData.title} onChange={handleChange} required />
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
            <Input name="price" type="number" placeholder="5000" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Available Stock</label>
            <Input name="stock" type="number" placeholder="5" value={formData.stock} onChange={handleChange} required />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Describe the weaving materials, patterns, etc..."
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

        <Button type="submit" className="w-full">
          Submit for Admin Approval
        </Button>
      </form>
    </div>
  )
}
