"use client"
import * as React from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SearchBar({ placeholder = "Search for Mekhela Chador, jewellery...", onSearch, initialQuery = "" }) {
  const [query, setQuery] = React.useState(initialQuery)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query)
    } else {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-muga bg-white text-forest shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-400">
        <Search className="h-4 w-4" />
      </div>
      <button type="submit" className="hidden">Search</button>
    </form>
  )
}
