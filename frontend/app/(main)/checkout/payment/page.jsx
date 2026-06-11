"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import PaymentOptions from "../../../../components/checkout/PaymentOptions"
import OrderSummary from "../../../../components/checkout/OrderSummary"
import Breadcrumb from "../../../../components/common/Breadcrumb"
import { openRazorpayCheckout } from "../../../../lib/razorpay"

const sampleItems = [
  { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, category: "Mekhela Chador", quantity: 1 }
]

export default function CheckoutPaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = React.useState("razorpay")

  const handlePlaceOrder = () => {
    if (paymentMethod === "razorpay") {
      openRazorpayCheckout({
        orderId: "order_mock_12345",
        amount: 19425 * 100, // in paise
        email: "buyer@example.com",
        phone: "9876543210",
        onSuccess: (res) => {
          console.log("Payment successful", res)
          router.push("/orders/order_mock_12345")
        },
        onFailure: (err) => {
          console.error("Payment failed", err)
        }
      })
    } else {
      console.log("Placing COD order")
      router.push("/orders/order_mock_12345")
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb 
        items={[
          { label: "Checkout", href: "/checkout" },
          { label: "Payment" }
        ]} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
          <PaymentOptions selectedOption={paymentMethod} onChange={setPaymentMethod} />
          
          <button
            type="button"
            onClick={handlePlaceOrder}
            className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm"
          >
            Confirm & Pay {paymentMethod === "cod" ? "(COD)" : ""}
          </button>
        </div>
        <div>
          <OrderSummary items={sampleItems} subtotal={18500} tax={925} shipping={0} />
        </div>
      </div>
    </div>
  )
}
