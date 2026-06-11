import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {/* Prev */}
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage <= 1}
        className="p-2 rounded-lg border border-slate-200 hover:border-slate-300 disabled:opacity-50 text-slate-600 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Pages */}
      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1
        return (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={`w-9 h-9 rounded-lg border text-sm font-semibold transition-all ${
              currentPage === page
                ? "border-primary bg-primary text-white"
                : "border-slate-200 hover:border-slate-300 text-slate-600"
            }`}
          >
            {page}
          </button>
        )
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="p-2 rounded-lg border border-slate-200 hover:border-slate-300 disabled:opacity-50 text-slate-600 transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
