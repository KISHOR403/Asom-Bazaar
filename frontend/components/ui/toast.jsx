"use client"
import * as React from "react"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

// A simple global state/emitter for toast messages
let toastListeners = []
let toasts = []

export function toast(message, type = "default") {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast = { id, message, type }
  toasts = [...toasts, newToast]
  toastListeners.forEach(listener => listener(toasts))
  
  // Auto remove
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id)
    toastListeners.forEach(listener => listener(toasts))
  }, 4000)
}

export function ToastProvider() {
  const [activeToasts, setActiveToasts] = React.useState([])

  React.useEffect(() => {
    toastListeners.push(setActiveToasts)
    return () => {
      toastListeners = toastListeners.filter(l => l !== setActiveToasts)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm">
      {activeToasts.map(t => (
        <div
          key={t.id}
          className={cn(
            "flex items-center justify-between p-4 rounded-md shadow-lg border border-border text-sm font-medium transition-all transform animate-in slide-in-from-bottom-5",
            t.type === "success" && "bg-emerald-600 text-white border-emerald-700",
            t.type === "error" && "bg-destructive text-white border-destructive-foreground",
            t.type === "default" && "bg-background text-foreground"
          )}
        >
          <span>{t.message}</span>
          <button 
            onClick={() => {
              toasts = toasts.filter(item => item.id !== t.id)
              toastListeners.forEach(listener => listener(toasts))
            }}
            className="ml-4 p-1 rounded-full hover:bg-black/10 text-current"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
