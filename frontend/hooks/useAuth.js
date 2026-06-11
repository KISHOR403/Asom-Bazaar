"use client"
import * as React from "react"
import { useAuthStore } from "../store/authStore"
import { api } from "../lib/api"

export default function useAuth() {
  const store = useAuthStore()

  const handleLogin = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password })
      store.login(res.data.user, res.data.token)
      return { success: true }
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Login failed"
      }
    }
  }

  const handleRegister = async (userData) => {
    try {
      const res = await api.post("/auth/register", userData)
      store.login(res.data.user, res.data.token)
      return { success: true }
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Registration failed"
      }
    }
  }

  const handleLogout = () => {
    store.logout()
  }

  return {
    user: store.user,
    token: store.token,
    isAuthenticated: store.isAuthenticated,
    role: store.role,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout
  }
}
