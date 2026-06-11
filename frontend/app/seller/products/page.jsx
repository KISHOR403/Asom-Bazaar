import Link from "next/link"
import { Badge } from "../../../components/ui/badge"
import { formatPrice } from "../../../lib/utils"

const sellerProducts = [
  { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, stock: 4, status: "approved", code: "MS-01" },
  { id: 2, title: "Traditional Cotton Gamusa", price: 450, stock: 12, status: "approved", code: "CG-02" }
]

export default function SellerProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold font-heading text-slate-800">My Creations</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and edit your products listed on Asom Bazar</p>
        </div>
        <Link
          href="/seller/products/add"
          className="bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-sm"
        >
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 font-semibold text-slate-500">
              <th className="p-4">SKU / Code</th>
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sellerProducts.map((prod) => (
              <tr key={prod.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-mono text-xs">{prod.code}</td>
                <td className="p-4 font-semibold text-slate-800">{prod.title}</td>
                <td className="p-4 font-semibold text-slate-900">{formatPrice(prod.price)}</td>
                <td className="p-4 text-slate-600">{prod.stock} left</td>
                <td className="p-4">
                  <Badge variant="secondary">{prod.status}</Badge>
                </td>
                <td className="p-4 text-right">
                  <Link
                    href={`/seller/products/${prod.id}/edit`}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
