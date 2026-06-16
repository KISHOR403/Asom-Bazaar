"use client"
import * as React from "react"
import { Star, MessageSquare } from "lucide-react"

export default function ReviewsPage() {
  const reviews = [
    { id: 1, buyer: "Priya Sharma", rating: 5, date: "3 July 2025", comment: "The Mekhela Chador is absolutely stunning! The weave quality is very authentic.", product: "Eri Silk Mekhela Chador — Red Gold" },
    { id: 2, buyer: "Sneha Mishra", rating: 4.8, date: "29 June 2025", comment: "Beautiful texture, very fast processing. Highly recommend Purnima's work.", product: "Muga Silk Stole" },
    { id: 3, buyer: "Ankit Baruah", rating: 4, date: "24 June 2025", comment: "Exquisite details. Had a small query about the size but seller solved it quickly.", product: "Tribal Gold Necklace" }
  ]

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Creations Reviews</h1>
        <p className="text-sm text-slate-500 mt-1">What buyers are saying about your handcrafted products</p>
      </div>

      {/* Summary card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-6">
        <div className="text-center">
          <span className="text-4xl font-extrabold text-slate-800">4.8</span>
          <div className="flex items-center justify-center text-amber-400 mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-4.5 w-4.5 fill-current" />
            ))}
          </div>
          <span className="text-[10px] text-slate-400 font-bold block mt-1.5 uppercase">Average Rating</span>
        </div>
        <div className="border-l border-slate-150 pl-6 space-y-1 text-xs text-slate-500 font-medium">
          <p>Approved products rating: <span className="text-emerald-700 font-bold">Excellent</span></p>
          <p>Total reviews received: <span className="text-slate-850 font-bold">24 reviews</span></p>
          <p>Response rate: <span className="text-slate-850 font-bold">100%</span></p>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold text-slate-800 text-sm">{rev.buyer}</span>
                <p className="text-[10px] text-slate-400 font-semibold">{rev.product}</p>
              </div>
              <div className="text-right">
                <span className="flex items-center text-xs font-bold text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current mr-1" />
                  {rev.rating} / 5
                </span>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium bg-slate-50 p-3 rounded-xl">
              &ldquo;{rev.comment}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
