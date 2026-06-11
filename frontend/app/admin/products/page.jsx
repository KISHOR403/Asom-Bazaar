"use client"
import * as React from "react"
import { Badge } from "../../../components/ui/badge"
import { formatPrice } from "../../../lib/utils"

const pendingProducts = [
  { id: 4, title: "Handcrafted Bamboo Storage Basket", price: 890, seller: "Gita Das", status: "pending" }
]

export default function AdminProductsPage() {
  const [list, setList] = React.useState(pendingProducts)

  const handleApprove = (id) => {
    setList(list.filter(p => p.id !== id))
    console.log(`Product ${id} approved`)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Catalog Approvals</h1>
        <p className="text-sm text-slate-500 mt-1">Review products before they are listed publicly</p>
      </div>

      {list.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 font-medium">No pending products for approval.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 font-semibold text-slate-500">
                <th className="p-4">Title</th>
                <th className="p-4">Seller</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {list.map((prod) => (
                <tr key={prod.id}>
                  <td className="p-4 font-semibold text-slate-800">{prod.title}</td>
                  <td className="p-4 font-semibold text-slate-600">{prod.seller}</td>
                  <td className="p-4 font-semibold text-slate-900">{formatPrice(prod.price)}</td>
                  <td className="p-4">
                    <Badge>{prod.status}</Badge>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleApprove(prod.id)}
                      className="text-xs font-bold text-primary hover:underline bg-transparent border-0"
                    >
                      Approve & Publish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
