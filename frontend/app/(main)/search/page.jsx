"use client"
import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import SearchBar from "../../../components/common/SearchBar"
import ProductGrid from "../../../components/product/ProductGrid"
import FilterSidebar from "../../../components/search/FilterSidebar"
import SortDropdown from "../../../components/search/SortDropdown"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const query = searchParams.get("q") || ""
  const category = searchParams.get("category") || ""
  const minPrice = searchParams.get("minPrice") || ""
  const maxPrice = searchParams.get("maxPrice") || ""
  const sort = searchParams.get("sort") || "relevance"

  const [data, setData] = React.useState({ products: [], facets: {}, total: 0, loading: true })

  React.useEffect(() => {
    const fetchResults = async () => {
      setData(prev => ({ ...prev, loading: true }))
      try {
        const params = new URLSearchParams()
        if (query) params.append("q", query)
        if (category) params.append("category", category)
        if (minPrice) params.append("minPrice", minPrice)
        if (maxPrice) params.append("maxPrice", maxPrice)
        if (sort) params.append("sort", sort)

        const res = await fetch(`http://localhost:5000/api/products/search?${params.toString()}`)
        if (res.ok) {
          const result = await res.json()
          setData({ products: result.products, facets: result.facets, total: result.total, loading: false })
        } else {
          setData(prev => ({ ...prev, loading: false }))
        }
      } catch (err) {
        setData(prev => ({ ...prev, loading: false }))
      }
    }

    fetchResults()
  }, [query, category, minPrice, maxPrice, sort])

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (key === "price") {
      if (value.min) params.set("minPrice", value.min)
      else params.delete("minPrice")
      if (value.max) params.set("maxPrice", value.max)
      else params.delete("maxPrice")
    } else {
      if (value) params.set(key, value)
      else params.delete(key)
    }
    router.push(`/search?${params.toString()}`)
  }

  const handleSortChange = (newSort) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", newSort)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <div className="bg-ivory min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-8">
        
        {/* Header & Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold font-heading text-forest">
              {query ? `Search results for "${query}"` : "Explore Catalog"}
            </h1>
            <p className="text-sm text-forest-400">
              {data.loading ? "Searching..." : `${data.total} items found`}
            </p>
          </div>
          <div className="w-full md:w-auto">
            <SearchBar initialQuery={query} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sidebar Filters */}
          <FilterSidebar 
            facets={data.facets} 
            filters={{ category, minPrice, maxPrice }} 
            onFilterChange={handleFilterChange} 
          />

          {/* Right Results Area */}
          <div className="flex-1 space-y-6 w-full">
            {/* Sort & View Options */}
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-forest-100 shadow-sm">
              <p className="text-sm font-medium text-forest-600">
                Showing {data.products.length} results
              </p>
              <SortDropdown currentSort={sort} onSortChange={handleSortChange} />
            </div>

            {/* Results Grid */}
            {data.loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="bg-white h-80 rounded-2xl border border-forest-50" />
                ))}
              </div>
            ) : (
              <ProductGrid products={data.products} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
