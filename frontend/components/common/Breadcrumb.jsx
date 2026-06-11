import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Breadcrumb({ items = [] }) {
  if (items.length === 0) return null

  return (
    <nav className="flex items-center space-x-1.5 text-xs font-semibold text-slate-400 py-4">
      <Link href="/" className="hover:text-slate-600">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center space-x-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          {item.href ? (
            <Link href={item.href} className="hover:text-slate-600">{item.label}</Link>
          ) : (
            <span className="text-slate-600 font-bold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
