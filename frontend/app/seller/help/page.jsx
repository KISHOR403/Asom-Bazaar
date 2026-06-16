"use client"
import * as React from "react"
import { HelpCircle, Phone, Mail, MessageSquare } from "lucide-react"

export default function HelpPage() {
  const faqs = [
    { q: "How long does product verification take?", a: "Normally, Asom Bazaar admins review and approve newly uploaded creations within 24 hours to ensure artisan legitimacy." },
    { q: "How do I request a payouts cycle change?", a: "Standard payouts are monthly on the 15th. You can request weekly payouts by contacting support once you reach 50 successful deliveries." },
    { q: "Who pays for the return shipping fees?", a: "If the return is due to quality defects or wrong items, the seller covers return shipping. For buyer change-of-mind, platform parameters apply." }
  ]

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Help & Support</h1>
        <p className="text-sm text-slate-500 mt-1">Get answers to frequently asked questions or contact Asom Bazaar seller desk</p>
      </div>

      {/* Contact Channels */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-3.5 card-3d">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
            <Phone className="h-5 w-5" />
          </div>
          <div className="text-xs">
            <h4 className="font-extrabold text-slate-800">Call Support Desk</h4>
            <p className="text-slate-450 font-semibold mt-0.5">+91 361 245 9928</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-3.5 card-3d">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5" />
          </div>
          <div className="text-xs">
            <h4 className="font-extrabold text-slate-800">Email Seller Desk</h4>
            <p className="text-slate-450 font-semibold mt-0.5">sellers@asombazaar.com</p>
          </div>
        </div>
      </div>

      {/* FAQ Accordions */}
      <div className="space-y-4">
        <h3 className="font-extrabold font-heading text-lg text-slate-800 flex items-center">
          <HelpCircle className="h-5 w-5 mr-2 text-[#C9A84C]" />
          Frequently Asked Questions
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <h4 className="font-extrabold text-slate-800 text-sm">{faq.q}</h4>
              <p className="text-xs font-semibold text-slate-650 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
