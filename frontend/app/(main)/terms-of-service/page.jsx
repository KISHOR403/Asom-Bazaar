"use client"
import * as React from "react"
import { Scale, FileCheck, ShieldAlert, Gavel } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      {/* Header */}
      <section className="bg-forest text-white py-16 px-5 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            ⚖️ Legal Agreement
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">Terms of Service</h1>
          <p className="text-forest-200 max-w-xl mx-auto text-sm sm:text-base">
            Please read these terms carefully before using the Asom Bazaar platform.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16 space-y-10">
        
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-forest-100/30 shadow-sm space-y-8 text-xs sm:text-sm text-forest-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <Scale className="w-5 h-5 text-muga" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or placing an order on Asom Bazaar (the &quot;Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using our services.
            </p>
          </section>

          <section className="space-y-3 border-t border-forest-100/20 pt-6">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-muga" />
              2. Artisan Authenticity & Product Descriptions
            </h2>
            <p>
              Asom Bazaar facilitates direct sales between verified artisans/sellers of Assam and buyers across India. We ensure all product descriptions, pricing, and GI-tag authentications are accurate to the best of our knowledge. Minor variations in dye batch, handloom weave motifs, and natural bamboo textures are inherent traits of authentic craftsmanship.
            </p>
          </section>

          <section className="space-y-3 border-t border-forest-100/20 pt-6">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-muga" />
              3. User Accounts & Responsibilities
            </h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account login credentials. Any unauthorized use of your account should be reported to our support desk immediately. We reserve the right to suspend accounts engaged in fraudulent activities or violation of seller guidelines.
            </p>
          </section>

          <section className="space-y-3 border-t border-forest-100/20 pt-6">
            <h2 className="font-heading font-bold text-xl text-forest flex items-center gap-2">
              <Gavel className="w-5 h-5 text-muga" />
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with the Platform shall be subject to the exclusive jurisdiction of the courts located in Guwahati, Assam.
            </p>
          </section>

        </div>

      </div>
    </div>
  )
}
