"use client"
import * as React from "react"
import { Bell, ShieldCheck, ShoppingBag, Star, Package } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: "order", title: "New Order Received!", detail: "Order #AB-00234 for 'Eri Silk Mekhela Chador — Red Gold' was placed by Priya Sharma.", time: "2 Hours ago", read: false },
    { id: 2, type: "system", title: "Product Approved", detail: "Your product 'Muga Silk Mekhela Chador' has been approved by admin and is now live.", time: "Yesterday", read: true },
    { id: 3, type: "rating", title: "5 Star Review Received", detail: "Sneha Mishra left a 5-star review: 'Beautiful texture, very fast processing.'", time: "3 Days ago", read: true }
  ]

  const getIcon = (type) => {
    switch (type) {
      case "order": return <ShoppingBag className="h-4 w-4 text-emerald-600" />
      case "rating": return <Star className="h-4 w-4 text-amber-500 fill-current" />
      default: return <Bell className="h-4 w-4 text-blue-500" />
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Notifications</h1>
        <p className="text-sm text-slate-500 mt-1">Stay updated with orders, platform compliance notices, and buyer ratings</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-50">
        {notifications.map((notif) => (
          <div key={notif.id} className={`p-4.5 flex items-start space-x-4 hover:bg-slate-50/50 transition-all relative ${!notif.read ? "bg-emerald-50/10" : ""}`}>
            {/* Unread indicator */}
            {!notif.read && (
              <span className="absolute top-4.5 left-4.5 w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
            )}
            
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${
              !notif.read ? "bg-white border-emerald-100 shadow-sm" : "bg-slate-50 border-slate-100"
            }`}>
              {getIcon(notif.type)}
            </div>

            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-extrabold text-slate-800 text-xs">{notif.title}</h3>
                <span className="text-[10px] text-slate-400 font-semibold">{notif.time}</span>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed font-medium">{notif.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
