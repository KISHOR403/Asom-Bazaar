"use client"
import * as React from "react"
import { Megaphone, Percent, Gift, ArrowUpRight } from "lucide-react"

export default function PromotionsPage() {
  const campaigns = [
    { id: 1, title: "Bihu Festival Bonanza", discount: "Flat 10% Off", status: "Active", participants: 182, expiry: "25 Aug 2025" },
    { id: 2, title: "Handmade Sualkuchi Silk Expo", discount: "Free Shipping", status: "Upcoming", participants: 45, expiry: "05 Sep 2025" }
  ]

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Promotions & Campaigns</h1>
        <p className="text-sm text-slate-500 mt-1">Boost your creation visibility by participating in seasonal cultural sales campaigns</p>
      </div>

      {/* Grid of active campaigns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {campaigns.map((camp) => (
          <div key={camp.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                  camp.status === "Active" 
                    ? "bg-emerald-50 text-emerald-800 border-emerald-100"
                    : "bg-blue-50 text-blue-800 border-blue-100"
                }`}>
                  {camp.status}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">Ends {camp.expiry}</span>
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm">{camp.title}</h3>
              <p className="text-xs font-semibold text-[#C9A84C] flex items-center">
                <Percent className="h-3.5 w-3.5 mr-1" /> {camp.discount}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-50 flex justify-between items-center text-xs">
              <span className="text-slate-450">{camp.participants} artisans participating</span>
              <button className="bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold px-3.5 py-1.5 rounded-xl transition-all btn-3d">
                Join Campaign
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Coupon Generator Box */}
      <div className="bg-[#0F2318] text-white p-6 rounded-2xl relative overflow-hidden shadow-xl">
        <span className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/25 rounded-full blur-xl"></span>
        <div className="space-y-3 max-w-md">
          <h4 className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest flex items-center">
            <Gift className="h-4 w-4 mr-2" />
            Artisan Custom Discount Coupons
          </h4>
          <h3 className="font-heading font-extrabold text-lg text-white">Create Private Referral Codes</h3>
          <p className="text-xs text-slate-300 leading-normal">
            Generate customized coupon codes (e.g. PURNIMA10) to share directly with your Instagram or Facebook followers.
          </p>
          <button className="pt-2 text-xs font-bold text-[#C9A84C] hover:underline flex items-center">
            Launch Coupon Wizard <ArrowUpRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
