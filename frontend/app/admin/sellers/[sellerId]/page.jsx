"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import { Badge } from "../../../../components/ui/badge"
import { Button } from "../../../../components/ui/button"

export default function AdminSellerDetailPage({ params }) {
  const router = useRouter()
  const sellerId = params?.sellerId

  const seller = {
    id: sellerId,
    name: "Gita Das",
    cluster: "Barpeta Handicrafts",
    experience: "12 years",
    status: "pending",
    docs: ["Aadhar Card", "Craftsman Card"]
  }

  const handleAction = (status) => {
    console.log(`Seller ${sellerId} verification status set to: ${status}`)
    router.push("/admin/sellers")
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Verification Portfolio</h1>
        <p className="text-sm text-slate-500 mt-1">Review credentials for Seller ID: {sellerId}</p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-800">{seller.name}</h2>
          <Badge>{seller.status}</Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-slate-400 block text-xs uppercase">Cluster</span>
            <span className="font-semibold text-slate-700">{seller.cluster}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-400 block text-xs uppercase">Experience</span>
            <span className="font-semibold text-slate-700">{seller.experience}</span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="font-semibold text-slate-400 block text-xs uppercase">Submitted Documents</span>
          <div className="flex gap-2">
            {seller.docs.map((doc, idx) => (
              <span key={idx} className="bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600">
                📄 {doc}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4 border-t border-slate-100">
          <Button onClick={() => handleAction("approved")} className="flex-1">
            Approve Seller
          </Button>
          <Button onClick={() => handleAction("rejected")} variant="destructive" className="flex-1">
            Reject Seller
          </Button>
        </div>
      </div>
    </div>
  )
}
