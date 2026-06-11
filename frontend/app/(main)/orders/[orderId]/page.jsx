import Link from "next/link"
import Breadcrumb from "../../../../components/common/Breadcrumb"
import { Badge } from "../../../../components/ui/badge"
import { formatPrice } from "../../../../lib/utils"

export default function OrderDetailPage({ params }) {
  const orderId = params?.orderId

  const order = {
    id: orderId,
    date: "11 Jun 2026",
    status: "Processing",
    total: 19425,
    items: [
      { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, quantity: 1 }
    ],
    address: {
      name: "John Doe",
      street: "House 10, Sualkuchi Weaving Cluster",
      city: "Guwahati",
      state: "Assam",
      pin: "781103"
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb 
        items={[
          { label: "My Orders", href: "/orders" },
          { label: orderId }
        ]} 
      />

      <div className="max-w-3xl mx-auto mt-6 space-y-8">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold font-heading text-slate-800">Order Tracking</h1>
            <p className="text-xs text-slate-400 font-semibold">Order ID: {orderId}</p>
          </div>
          <Badge variant="secondary" className="text-xs px-3 py-1">{order.status}</Badge>
        </div>

        {/* Shipping details */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-3">
          <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Delivery Address</h3>
          <p className="text-sm font-semibold text-slate-700">{order.address.name}</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            {order.address.street}, {order.address.city}, {order.address.state} - {order.address.pin}
          </p>
        </div>

        {/* Order items */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm divide-y divide-slate-100">
          <div className="p-6">
            <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Order Items</h3>
          </div>
          {order.items.map((item) => (
            <div key={item.id} className="p-6 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm text-slate-800">{item.title}</h4>
                <p className="text-xs text-slate-400 font-semibold mt-1">Quantity: {item.quantity}</p>
              </div>
              <span className="font-extrabold text-slate-900 text-sm">{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
          <div className="p-6 flex justify-between font-bold text-slate-900 text-base">
            <span>Total Paid</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
