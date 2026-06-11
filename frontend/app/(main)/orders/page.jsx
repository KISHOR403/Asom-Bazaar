import Link from "next/link"
import Breadcrumb from "../../../components/common/Breadcrumb"
import { Badge } from "../../../components/ui/badge"
import { formatPrice } from "../../../lib/utils"

const sampleOrders = [
  { id: "order_mock_12345", date: "11 Jun 2026", status: "processing", total: 19425, item: "Muga Silk Mekhela Chador" }
]

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb items={[{ label: "My Orders" }]} />
      <h1 className="text-2xl font-bold font-heading text-slate-800 mt-6 mb-8">Order History</h1>

      {sampleOrders.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl">
          <p className="text-slate-500 font-medium">You haven&apos;t placed any orders yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
          {sampleOrders.map((ord) => (
            <div key={ord.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-800 text-sm">{ord.id}</span>
                  <Badge variant="secondary">{ord.status}</Badge>
                </div>
                <p className="text-xs text-slate-400 font-medium">Placed on: {ord.date}</p>
                <p className="text-sm text-slate-600 font-semibold">{ord.item}</p>
              </div>
              <div className="text-left sm:text-right space-y-2">
                <span className="font-extrabold text-slate-900 block text-base">{formatPrice(ord.total)}</span>
                <Link
                  href={`/orders/${ord.id}`}
                  className="inline-block text-xs font-bold text-primary hover:underline"
                >
                  Track Order →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
