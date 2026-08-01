"use client"
import * as React from "react"
import Link from "next/link"
import { ShieldCheck, CheckCircle2, AlertTriangle, Scale, Package, DollarSign, Award, ArrowRight } from "lucide-react"

export default function SellerGuidelinesPage() {
  const sections = [
    {
      icon: "🧵",
      title: "1. Authenticity & Quality Standards",
      desc: "Asom Bazaar is dedicated exclusively to authentic Assamese handicraft and handloom items.",
      points: [
        "All silk items must declare composition (Pure Muga, Pat, Eri, or Cotton Handloom).",
        "Powerloom products passing as handlooms are strictly prohibited.",
        "Bamboo and cane items must undergo proper treatment against moisture and pest damage.",
        "Teas and spices must meet FSSAI labeling standards and indicate harvest location."
      ]
    },
    {
      icon: "📦",
      title: "2. Packaging & Shipping Standards",
      desc: "Ensuring products reach buyers safely in eco-friendly packaging.",
      points: [
        "Use eco-friendly cloth or recyclable cardboard packaging.",
        "Include mandatory silk mark / artisan tag if applicable.",
        "Orders must be dispatched within 48 hours of order confirmation.",
        "Handover to Shiprocket pickup partner with proper shipping label pasted."
      ]
    },
    {
      icon: "💰",
      title: "3. Commission & Payout Terms",
      desc: "Transparent and fair fee structure designed for rural artisan growth.",
      points: [
        "Platform commission is flat 8% for verified rural artisans and craft clusters.",
        "Payouts are processed automatically every 7 days directly to your verified bank account.",
        "No listing fees or monthly subscription fees.",
        "Clear breakdown of all sales and commissions available in Seller Dashboard."
      ]
    },
    {
      icon: "🔄",
      title: "4. Returns & Buyer Dispute Policy",
      desc: "Balancing artisan protection with buyer satisfaction.",
      points: [
        "7-day replacement guarantee for damaged or wrong items shipped.",
        "Handcrafted natural variations in color/weave are not considered defects.",
        "Seller desk assists in mediating any buyer questions or customization requests."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      {/* Header */}
      <section className="bg-forest text-white py-16 px-5 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            📜 Partner Guidelines
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">Artisan & Seller Guidelines</h1>
          <p className="text-forest-200 max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to know about listing, selling, and delivering authentic Assam craft products on Asom Bazaar.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-16 space-y-12">
        
        {/* Intro banner */}
        <div className="bg-white p-8 rounded-3xl border border-forest-100/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="font-heading font-bold text-2xl text-forest">Ready to start selling?</h2>
            <p className="text-forest-600 text-xs sm:text-sm">Join over 3,500+ verified artisans from across Assam today.</p>
          </div>
          <Link
            href="/become-a-seller"
            className="bg-muga text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-muga/90 transition-colors shrink-0 flex items-center gap-2"
          >
            Become a Seller <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Guidelines Accordion/Grid */}
        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-forest-100/30 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{sec.icon}</span>
                <div>
                  <h3 className="font-heading font-bold text-xl text-forest">{sec.title}</h3>
                  <p className="text-xs text-forest-500">{sec.desc}</p>
                </div>
              </div>

              <div className="border-t border-forest-100/20 pt-4">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {sec.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-muga shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Help Notice */}
        <div className="bg-forest-50 p-6 rounded-2xl border border-forest-100/30 text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-muga">Need Assistance with Guidelines?</p>
          <p className="text-xs sm:text-sm text-forest-600">
            Our Seller Support desk is ready to assist you in Assamese, English, or Hindi.
          </p>
          <Link
            href="/seller-support"
            className="inline-block text-xs font-bold text-forest hover:underline"
          >
            Visit Seller Support Center →
          </Link>
        </div>

      </div>
    </div>
  )
}
