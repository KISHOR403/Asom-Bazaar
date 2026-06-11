import { formatPrice } from "../../lib/utils"

export default function OrderSummary({ items = [], subtotal = 0, shipping = 0, tax = 0 }) {
  const total = subtotal + shipping + tax

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm space-y-6">
      <h3 className="font-bold text-slate-800 text-lg">Your Order</h3>
      
      {/* Items list */}
      <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto pr-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between py-3 text-sm">
            <div className="space-y-0.5">
              <span className="font-medium text-slate-800 line-clamp-1">{item.title}</span>
              <span className="text-[10px] text-slate-400 font-semibold">Qty: {item.quantity}</span>
            </div>
            <span className="font-semibold text-slate-900">{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>

      {/* Bill details */}
      <div className="border-t border-slate-100 pt-4 space-y-2 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold text-slate-900">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          <span className="font-semibold text-slate-900">
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Estimated Tax</span>
          <span className="font-semibold text-slate-900">{formatPrice(tax)}</span>
        </div>
        <div className="border-t border-slate-100 pt-4 flex justify-between font-bold text-slate-900 text-base">
          <span>Order Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  )
}
