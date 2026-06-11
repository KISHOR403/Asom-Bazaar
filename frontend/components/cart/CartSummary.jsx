import Link from "next/link"
import { formatPrice } from "../../lib/utils"

export default function CartSummary({ subtotal = 0, shipping = 0, tax = 0 }) {
  const total = subtotal + shipping + tax

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
      <h3 className="font-bold text-slate-800 text-lg">Order Summary</h3>
      
      <div className="space-y-2 text-sm">
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
      </div>
      
      <div className="border-t border-slate-100 pt-4 flex justify-between font-bold text-slate-900 text-base">
        <span>Order Total</span>
        <span>{formatPrice(total)}</span>
      </div>

      <Link 
        href="/checkout"
        className="w-full flex items-center justify-center bg-primary hover:bg-primary/95 text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm"
      >
        Proceed to Checkout
      </Link>
    </div>
  )
}
