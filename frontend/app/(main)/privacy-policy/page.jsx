"use client"
import * as React from "react"
import { ShieldCheck, Lock, Eye, Server, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      {/* Header */}
      <section className="bg-forest text-white py-16 px-5 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            🔒 Trust & Security
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">Privacy Policy</h1>
          <p className="text-forest-200 max-w-xl mx-auto text-sm sm:text-base">
            Last Updated: August 2026. Your privacy and data security are our top priorities.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16 space-y-10">
        
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-forest-100/30 shadow-sm space-y-8 text-xs sm:text-sm text-forest-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-muga" />
              1. Overview & Commitment
            </h2>
            <p>
              Asom Bazaar (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the Asom Bazaar digital platform connecting Assam artisans with buyers. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make purchases through our platform.
            </p>
          </section>

          <section className="space-y-3 border-t border-forest-100/20 pt-6">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <Lock className="w-5 h-5 text-muga" />
              2. Information We Collect
            </h2>
            <p>We may collect personal information including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Account Information:</strong> Name, email address, phone number, and password when you register.</li>
              <li><strong>Shipping & Billing:</strong> Delivery addresses, pincodes, and recipient phone numbers.</li>
              <li><strong>Artisan Verification Details:</strong> Aadhaar numbers, bank account numbers, and IFSC codes (for registered sellers only).</li>
              <li><strong>Payment Info:</strong> All payment transactions are encrypted and processed securely via Razorpay. We do not store full credit card or debit card numbers on our servers.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-forest-100/20 pt-6">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <Eye className="w-5 h-5 text-muga" />
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Processing orders, shipping products, and managing order status updates via SMS/WhatsApp.</li>
              <li>Disbursing weekly artisan payouts directly to verified bank accounts.</li>
              <li>Improving platform performance, anti-fraud verification, and customer support.</li>
              <li>Sending promotional offers, craft stories, and discounts (you can opt out at any time).</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-forest-100/20 pt-6">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <Server className="w-5 h-5 text-muga" />
              4. Data Protection & Third Parties
            </h2>
            <p>
              We do not sell or rent your personal information to third parties. We share data strictly with essential logistics partners (Shiprocket) for delivery, payment gateways (Razorpay) for transactions, and regulatory bodies if required by Indian law.
            </p>
          </section>

          <section className="space-y-3 border-t border-forest-100/20 pt-6">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <FileText className="w-5 h-5 text-muga" />
              5. Contact Us Regarding Privacy
            </h2>
            <p>
              If you have any questions or data deletion requests, please contact our Data Protection Officer at:
              <br />
              <strong>Email:</strong> privacy@asombazaar.com | <strong>Address:</strong> Asom Bazaar Office, GS Road, Dispur, Guwahati, Assam 781006.
            </p>
          </section>

        </div>

      </div>
    </div>
  )
}
