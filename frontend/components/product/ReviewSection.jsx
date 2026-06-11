import { Star } from "lucide-react"

const sampleReviews = [
  { id: 1, name: "Bidisha Sarmah", rating: 5, date: "24 May 2026", comment: "Absolutely gorgeous Muga Mekhela! The zari work is exquisite. Worth every rupee." },
  { id: 2, name: "Arup Pathak", rating: 4, date: "10 May 2026", comment: "Beautiful gamusa. Authentic feel, and really nice hand-woven cotton texture." }
]

export default function ReviewSection({ reviews = sampleReviews }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-heading text-slate-900">Customer Reviews</h2>
      
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div key={rev.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-slate-800">{rev.name}</span>
              <span className="text-[10px] text-slate-400 font-semibold">{rev.date}</span>
            </div>
            
            <div className="flex items-center text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < rev.rating ? "fill-current" : "text-slate-200"}`}
                />
              ))}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
