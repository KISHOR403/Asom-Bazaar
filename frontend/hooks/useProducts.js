"use client"
import * as React from "react"
import { api } from "../lib/api"

export default function useProducts(filters = {}) {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    let active = true

    const fetchProducts = async () => {
      setLoading(true)
      try {
        const res = await api.get("/products", { params: filters })
        if (active) {
          setProducts(res.data.products || [])
          setError(null)
        }
      } catch (err) {
        if (active) {
          setError(err.response?.data?.message || "Failed to fetch products")
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    fetchProducts()

    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)])

  return { products, loading, error }
}
