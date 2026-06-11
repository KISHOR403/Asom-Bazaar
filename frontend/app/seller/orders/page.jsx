import { Badge } from "../../../components/ui/badge"
import { formatPrice } from "../../../lib/utils"

const sellerOrders = [
  { id: "ord_09876", product: "Muga Silk Mekhela Chador", qty: 1, buyer: "John Doe", total: 18500, date: "11 Jun 2026", status: "processing" }
]

export default function SellerOrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Customer Orders</h1>
        <p className="text-sm text-slate-500 mt-1">Track orders, ship products, and view fulfillment logs</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 font-semibold text-slate-500">
              <th className="p-4">Order ID</th>
              <th className="p-4">Product Details</th>
              <th className="p-4">Buyer</th>
              <th className="p-4">Date</th>
              <th className="p-4">Revenue</th>
              <th className="p-4">Fulfillment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sellerOrders.map((ord) => (
              <tr key={ord.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-slate-800">{ord.id}</td>
                <td className="p-4">
                  <span className="font-semibold block text-slate-800">{ord.product}</span>
                  <span className="text-xs text-slate-400 font-medium">Quantity: {ord.qty}</span>
                </td>
                <td className="p-4 font-semibold text-slate-700">{ord.buyer}</td>
                <td className="p-4 text-slate-500 text-xs">{ord.date}</td>
                <td className="p-4 font-semibold text-slate-900">{formatPrice(ord.total)}</td>
                <td className="p-4">
                  <Badge variant="secondary">{ord.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
