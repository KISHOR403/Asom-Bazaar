import { create } from "zustand"

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  role: null, // 'buyer' | 'seller' | 'admin'

  login: (userData, token) => {
    // Optionally persist to localStorage if running client-side
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token)
    }
    set({
      user: userData,
      token: token,
      isAuthenticated: true,
      role: userData?.role || "buyer"
    })
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
    }
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      role: null
    })
  },

  setUser: (userData) => set({ user: userData, role: userData?.role || null })
}))
