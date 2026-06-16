"use client"
import * as React from "react"
import { Landmark, CheckCircle, ShieldCheck } from "lucide-react"

export default function BankDetailsPage() {
  const bankDetails = {
    holder: "Purnima Bora",
    bank: "State Bank of India (SBI)",
    branch: "Sualkuchi Branch",
    accountNumber: "•••• •••• 4521",
    ifsc: "SBIN0002131"
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Bank Details</h1>
        <p className="text-sm text-slate-500 mt-1">Configure your destination account details for automatic monthly payouts</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex items-center space-x-3.5 border-b border-slate-50 pb-4">
          <Landmark className="h-6 w-6 text-[#C9A84C]" />
          <div>
            <h3 className="font-extrabold text-slate-800 text-sm">Primary Payout Method</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Direct Bank Transfer (NEFT/IMPS)</p>
          </div>
        </div>

        {/* Bank metadata fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-650">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Account Holder Name</span>
            <span className="text-slate-800 block text-sm">{bankDetails.holder}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Bank Name</span>
            <span className="text-slate-800 block text-sm">{bankDetails.bank}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Account Number</span>
            <span className="text-slate-800 block text-sm font-mono">{bankDetails.accountNumber}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">IFSC Code</span>
            <span className="text-slate-800 block text-sm font-mono">{bankDetails.ifsc}</span>
          </div>
          <div className="col-span-full space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Branch Details</span>
            <span className="text-slate-800 block text-sm">{bankDetails.branch}</span>
          </div>
        </div>

        {/* Verification Alert */}
        <div className="bg-emerald-50/50 border border-emerald-150 p-4 rounded-xl flex items-center space-x-3 text-emerald-800">
          <ShieldCheck className="h-5 w-5 shrink-0" />
          <div className="text-xs font-medium">
            <h4 className="font-extrabold">Account Status: Verified</h4>
            <p className="text-emerald-700 mt-0.5">We processed a ₹1.00 deposit validation check successfully. Automated payouts are active.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
