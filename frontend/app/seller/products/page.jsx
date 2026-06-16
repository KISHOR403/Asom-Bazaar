"use client"
import * as React from "react"
import Link from "next/link"
import { Plus, Search, Filter, Edit2, ShoppingBag, CheckCircle, Clock } from "lucide-react"

export default function SellerProductsPage() {
  const [search, setSearch] = React.useState("")
  const [filter, setFilter] = React.useState("All")

  const [products, setProducts] = React.useState([
    { id: 1, title: "Muga Silk Mekhela Chador — Red & Gold", category: "Silk & Sarees", price: 18500, stock: 4, status: "Approved", code: "MS-01", emoji: "👗" },
    { id: 2, title: "Traditional Cotton Gamusa", category: "Weaves", price: 450, stock: 12, status: "Approved", code: "CG-02", emoji: "🧣" },
    { id: 3, title: "Eri Silk Shawl — Natural Dye", category: "Silk & Sarees", price: 3499, stock: 3, status: "Pending", code: "ES-03", emoji: "🧶" },
    { id: 4, title: "Handcrafted Bamboo Storage Basket", category: "Bamboo & Cane", price: 899, stock: 0, status: "Approved", code: "BB-04", emoji: "🧺" }
  ])

  // Filter & Search logic
  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === "All" || p.status === filter
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.code.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">My Creations</h1>
          <p className="text-sm text-slate-500 mt-1">Manage, edit, and check approval status of your Assamese handicrafts</p>
        </div>
        <Link
          href="/seller/products/add"
          className="flex items-center justify-center space-x-1.5 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/10 btn-3d self-start sm:self-auto"
        >
          <Plus className="h-4.5 w-4.5" />
          <span>Upload Creation</span>
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Items</span>
          <span className="text-lg font-extrabold text-slate-800">{products.length}</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Approved</span>
          <span className="text-lg font-extrabold text-emerald-600">
            {products.filter(p => p.status === "Approved").length}
          </span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Pending Review</span>
          <span className="text-lg font-extrabold text-amber-500 font-semibold">
            {products.filter(p => p.status === "Pending").length}
          </span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or SKU..."
            className="w-full h-11 border border-slate-200 rounded-xl pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
          />
        </div>

        <div className="flex space-x-2">
          {["All", "Approved", "Pending"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                filter === status
                  ? "bg-[#1E4D34] text-white border-[#1E4D34]"
                  : "bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Products list grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <div key={prod.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex space-x-4 hover:shadow-md transition-all relative">
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-3xl shrink-0">
                {prod.emoji}
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">{prod.code}</span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center space-x-0.5 ${
                    prod.status === "Approved" 
                      ? "bg-emerald-50 text-emerald-800 border-emerald-100"
                      : "bg-amber-50 text-amber-800 border-amber-100"
                  }`}>
                    {prod.status === "Approved" ? <CheckCircle className="h-2.5 w-2.5" /> : <Clock className="h-2.5 w-2.5" />}
                    <span>{prod.status}</span>
                  </span>
                </div>

                <h3 className="font-bold text-slate-800 text-sm truncate pr-6">{prod.title}</h3>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-extrabold text-slate-950">₹{prod.price.toLocaleString("en-IN")}</span>
                  <span className={`text-xs font-semibold ${prod.stock === 0 ? "text-red-500 font-bold" : "text-slate-450"}`}>
                    {prod.stock === 0 ? "Out of Stock" : `${prod.stock} items left`}
                  </span>
                </div>
              </div>

              {/* Edit button hover trigger */}
              <Link
                href={`/seller/products/add`}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-[#C9A84C] hover:bg-slate-50 rounded-lg transition-all"
                title="Edit product info"
              >
                <Edit2 className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white p-12 rounded-2xl border border-slate-100 shadow-sm text-center space-y-3">
            <ShoppingBag className="h-10 w-10 text-slate-350 mx-auto" />
            <h4 className="font-bold text-slate-700 text-sm">No Products Found</h4>
            <p className="text-xs text-slate-400">Add a new handmade creation or search with a different term.</p>
          </div>
        )}
      </div>
    </div>
  )
}

