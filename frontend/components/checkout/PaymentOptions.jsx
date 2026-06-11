"use client"
import * as React from "react"
import { CreditCard, Truck } from "lucide-react"

export default function PaymentOptions({ selectedOption, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-slate-800 text-lg">Select Payment Method</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Razorpay Option */}
        <button
          type="button"
          onClick={() => onChange?.("razorpay")}
          className={`flex gap-4 p-4 rounded-xl border items-center text-left transition-all ${
            selectedOption === "razorpay"
              ? "border-primary bg-primary/5 text-primary"
              : "border-slate-200 hover:border-slate-300 text-slate-700"
          }`}
        >
          <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
            <CreditCard className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Online Payment</h4>
            <p className="text-[10px] text-slate-400">Cards, UPI, Netbanking (Razorpay)</p>
          </div>
        </button>

        {/* COD Option */}
        <button
          type="button"
          onClick={() => onChange?.("cod")}
          className={`flex gap-4 p-4 rounded-xl border items-center text-left transition-all ${
            selectedOption === "cod"
              ? "border-primary bg-primary/5 text-primary"
              : "border-slate-200 hover:border-slate-300 text-slate-700"
          }`}
        >
          <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
            <Truck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Cash on Delivery</h4>
            <p className="text-[10px] text-slate-400">Pay when item is delivered</p>
          </div>
        </button>
      </div>
    </div>
  )
}
