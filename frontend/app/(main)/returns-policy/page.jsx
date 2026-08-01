"use client"
import * as React from "react"
import Link from "next/link"
import { RefreshCw, ShieldCheck, CheckCircle2, AlertCircle, Truck, ArrowLeftRight } from "lucide-react"

export default function ReturnsPolicyPage() {
  const steps = [
    { title: "1. Initiate Return", desc: "Go to your Orders page within 7 days of delivery and click 'Request Return / Exchange'." },
    { title: "2. QC Verification", desc: "Upload a quick photo or description of the issue (damage, size discrepancy, wrong item)." },
    { title: "3. Doorstep Pickup", desc: "Our logistics partner will collect the item from your doorstep at zero hassle." },
    { title: "4. Instant Refund/Replacement", desc: "Once picked up, refund is initiated to your original payment method or UPI within 3 business days." },
  ]

  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      {/* Header */}
      <section className="bg-forest text-white py-16 px-5 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            🔄 Buyer Guarantee
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">Returns & Exchange Policy</h1>
          <p className="text-forest-200 max-w-xl mx-auto text-sm sm:text-base">
            We stand behind every authentic Assamese handloom and handicraft product. Enjoy 7-day hassle-free returns.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-16 space-y-12">
        
        {/* Policy Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-forest-100/30 shadow-sm space-y-2 text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
              7 Days
            </div>
            <h3 className="font-heading font-bold text-lg text-forest">7-Day Easy Return Window</h3>
            <p className="text-xs text-forest-500">Return or exchange within 7 days of receiving your package.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-forest-100/30 shadow-sm space-y-2 text-center">
            <div className="w-12 h-12 rounded-2xl bg-muga/10 text-muga flex items-center justify-center mx-auto text-xl font-bold">
              🚚
            </div>
            <h3 className="font-heading font-bold text-lg text-forest">Free Doorstep Pickup</h3>
            <p className="text-xs text-forest-500">Our delivery team picks up the product right from your home.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-forest-100/30 shadow-sm space-y-2 text-center">
            <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest flex items-center justify-center mx-auto text-xl font-bold">
              💳
            </div>
            <h3 className="font-heading font-bold text-lg text-forest">Fast Refund Credit</h3>
            <p className="text-xs text-forest-500">Money credited back to bank/UPI within 3-5 business days.</p>
          </div>
        </div>

        {/* Return Workflow */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-forest-100/30 shadow-sm space-y-8">
          <h2 className="font-heading font-bold text-2xl text-forest">How to Return an Item</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-forest-50/60 p-5 rounded-2xl border border-forest-100/30 space-y-2">
                <h4 className="font-heading font-bold text-base text-forest">{step.title}</h4>
                <p className="text-xs text-forest-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligible & Non-Eligible Items */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-700 font-bold font-heading text-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <span>Eligible for Return</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-forest-700">
              <li className="flex items-start gap-2">✓ Items received with manufacturing defects or transit damage</li>
              <li className="flex items-start gap-2">✓ Incorrect size, color, or wrong item delivered</li>
              <li className="flex items-start gap-2">✓ Unused sarees & stoles with original tags intact</li>
              <li className="flex items-start gap-2">✓ Handicrafts & bamboo items with missing components</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-heading text-xl">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              <span>Handloom Natural Characteristics</span>
            </div>
            <p className="text-xs text-forest-600 leading-relaxed">
              Please note: Hand-woven Muga and Pat silk fabrics naturally possess subtle slubs, color gradients, and motif variations. These are marks of authentic artisan craftsmanship, not defect.
            </p>
            <ul className="space-y-2 text-xs text-forest-600">
              <li>• Perishable food items (Teas, Spices) cannot be returned once opened unless damaged.</li>
              <li>• Custom hand-tailored items made to order are eligible for free alterations.</li>
            </ul>
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-forest p-8 rounded-3xl text-white text-center space-y-4">
          <h3 className="font-heading font-bold text-2xl">Need to Track or Return an Order?</h3>
          <p className="text-forest-200 text-xs sm:text-sm max-w-md mx-auto">
            Log in to your account and manage your orders directly from the orders dashboard.
          </p>
          <Link
            href="/orders"
            className="inline-block bg-muga text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-muga/90 transition-colors shadow-lg"
          >
            Go to My Orders
          </Link>
        </div>

      </div>
    </div>
  )
}
