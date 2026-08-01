"use client"
import * as React from "react"
import Link from "next/link"
import { Phone, Mail, HelpCircle, MessageSquare, ShieldCheck, FileText, CheckCircle2, ChevronDown } from "lucide-react"

export default function SellerSupportPage() {
  const [openFaq, setOpenFaq] = React.useState(null)

  const faqs = [
    {
      q: "How long does product verification take?",
      a: "Normally, Asom Bazaar admins review and approve newly uploaded creations within 24 hours to ensure artisan legitimacy and quality standards."
    },
    {
      q: "How do payouts work for sellers?",
      a: "Payouts are transferred directly to your verified bank account every 7 days (or on the 15th and 30th of every month depending on your chosen payout frequency)."
    },
    {
      q: "Who pays for return shipping fees?",
      a: "If a return occurs due to defect or dispatch of an incorrect item, the seller covers shipping. For buyer change of mind, standard platform policy applies."
    },
    {
      q: "Do I need a GST number to sell on Asom Bazaar?",
      a: "For small rural handicraft artisans (earning under ₹20 Lakhs annually), GST exemption rules apply under govt craft schemes. Our desk will guide you during registration."
    },
    {
      q: "How do I print shipping labels for orders?",
      a: "Log in to your Seller Dashboard, go to Orders, select the new order and click 'Generate Shipping Label'. Shiprocket pickup agent will collect the packed item."
    }
  ]

  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      {/* Header */}
      <section className="bg-forest text-white py-16 px-5 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            🤝 Dedicated Seller Desk
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">Seller Support Center</h1>
          <p className="text-forest-200 max-w-xl mx-auto text-sm sm:text-base">
            We are here to support Assam&apos;s weavers, craftsmen, and small producers at every step of your digital journey.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-16 space-y-12">
        
        {/* Contact Channels */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-forest-100/30 shadow-sm space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest flex items-center justify-center mx-auto sm:mx-0">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-forest">Call Seller Desk</h3>
            <p className="text-xs text-forest-500">Mon-Sat: 9 AM - 7 PM</p>
            <p className="text-sm font-bold text-forest">+91 361 245 9928</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-forest-100/30 shadow-sm space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-muga/10 text-muga flex items-center justify-center mx-auto sm:mx-0">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-forest">Email Seller Support</h3>
            <p className="text-xs text-forest-500">24-hour response time</p>
            <p className="text-sm font-bold text-forest">sellers@asombazaar.com</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-forest-100/30 shadow-sm space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto sm:mx-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-forest">WhatsApp Helpline</h3>
            <p className="text-xs text-forest-500">Assamese / Hindi / English</p>
            <p className="text-sm font-bold text-emerald-700">+91 98765 00000</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-forest-50 p-8 rounded-3xl border border-forest-100/30 space-y-4">
          <h2 className="font-heading font-bold text-xl text-forest">Quick Actions for Sellers</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/seller/dashboard"
              className="bg-white p-4 rounded-2xl border border-forest-100/30 text-center font-bold text-xs text-forest hover:bg-forest text-forest hover:text-white transition-colors"
            >
              📊 Go to Seller Dashboard
            </Link>
            <Link
              href="/become-a-seller"
              className="bg-white p-4 rounded-2xl border border-forest-100/30 text-center font-bold text-xs text-forest hover:bg-forest text-forest hover:text-white transition-colors"
            >
              📝 Register New Artisan Account
            </Link>
            <Link
              href="/seller-guidelines"
              className="bg-white p-4 rounded-2xl border border-forest-100/30 text-center font-bold text-xs text-forest hover:bg-forest text-forest hover:text-white transition-colors"
            >
              📜 View Quality & Shipping Guidelines
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white p-8 rounded-3xl border border-forest-100/30 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-muga" />
            <h2 className="font-heading font-bold text-2xl text-forest">Seller Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-forest-100/40 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-forest flex items-center justify-between hover:bg-forest-50/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? "rotate-180 text-muga" : "text-forest-400"}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-forest-600 leading-relaxed border-t border-forest-100/20 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
