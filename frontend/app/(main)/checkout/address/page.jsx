"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import AddressForm from "../../../../components/checkout/AddressForm"
import OrderSummary from "../../../../components/checkout/OrderSummary"
import Breadcrumb from "../../../../components/common/Breadcrumb"

const sampleItems = [
  { id: 1, title: "Muga Silk Mekhela Chador", price: 18500, category: "Mekhela Chador", quantity: 1 }
]

export default function CheckoutAddressPage() {
  const router = useRouter()

  const handleAddressSubmit = (address) => {
    console.log("Address saved", address)
    router.push("/checkout/payment")
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb 
        items={[
          { label: "Checkout", href: "/checkout" },
          { label: "Shipping Address" }
        ]} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <AddressForm onSubmit={handleAddressSubmit} />
        </div>
        <div>
          <OrderSummary items={sampleItems} subtotal={18500} tax={925} shipping={0} />
        </div>
      </div>
    </div>
  )
}
