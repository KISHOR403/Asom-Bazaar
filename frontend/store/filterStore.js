import { create } from "zustand"

export const useFilterStore = create((set) => ({
  searchQuery: "",
  category: "",
  maxPrice: 25000,
  sortBy: "popular",

  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategory: (cat) => set({ category: cat }),
  setMaxPrice: (price) => set({ maxPrice: price }),
  setSortBy: (sort) => set({ sortBy: sort }),
  
  resetFilters: () => set({
    searchQuery: "",
    category: "",
    maxPrice: 25000,
    sortBy: "popular"
  })
}))
