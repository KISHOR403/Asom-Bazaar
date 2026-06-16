"use client"
import * as React from "react"
import { Search, ShoppingBag, Truck, Calendar, Phone, Check, RefreshCw } from "lucide-react"

export default function SellerOrdersPage() {
  const [filter, setFilter] = React.useState("All")
  const [search, setSearch] = React.useState("")
  const [statusMenuOpen, setStatusMenuOpen] = React.useState(null) // ID of order showing status dropdown

  const [orders, setOrders] = React.useState([
    {
      id: "#AB-00234",
      date: "2 July 2025",
      buyer: "Priya Sharma",
      location: "Bangalore",
      product: "Eri Silk Mekhela Chador — Red Gold",
      amount: 2499,
      status: "Shipped",
      tracking: "Shiprocket #SR928374",
      eta: "5 July 2025",
      phone: "+919876543210"
    },
    {
      id: "#AB-00233",
      date: "1 July 2025",
      buyer: "Rahul Das",
      location: "Guwahati",
      product: "Muga Silk Stole",
      amount: 1899,
      status: "Delivered",
      tracking: "Shiprocket #SR928120",
      eta: "3 July 2025",
      phone: "+919876543211"
    },
    {
      id: "#AB-00232",
      date: "28 June 2025",
      buyer: "Ankit Baruah",
      location: "Tezpur",
      product: "Tribal Gold Necklace",
      amount: 3200,
      status: "Packed",
      tracking: "Label Generated",
      eta: "2 July 2025",
      phone: "+919876543212"
    },
    {
      id: "#AB-00231",
      date: "26 June 2025",
      buyer: "Sneha Mishra",
      location: "Delhi",
      product: "Bamboo Wall Art",
      amount: 899,
      status: "Delivered",
      tracking: "Shiprocket #SR927899",
      eta: "29 June 2025",
      phone: "+919876543213"
    },
    {
      id: "#AB-00230",
      date: "25 June 2025",
      buyer: "Rohan Kalita",
      location: "Dibrugarh",
      product: "Gamosa Set x3",
      amount: 599,
      status: "Returned",
      tracking: "Returned to Origin",
      eta: "--",
      phone: "+919876543214"
    }
  ])

  // Status badge styling map
  const statusBadges = {
    "New": "bg-slate-100 text-slate-700 border-slate-200",
    "Packed": "bg-blue-50 text-blue-700 border-blue-200",
    "Shipped": "bg-amber-50 text-amber-700 border-amber-200",
    "Delivered": "bg-emerald-55 text-emerald-800 border-emerald-100 bg-emerald-50",
    "Returned": "bg-rose-50 text-rose-800 border-rose-200"
  }

  // Filter and search logic
  const filteredOrders = orders.filter(ord => {
    const matchesFilter = filter === "All" || ord.status === filter
    const matchesSearch = ord.id.toLowerCase().includes(search.toLowerCase()) || 
                          ord.buyer.toLowerCase().includes(search.toLowerCase()) ||
                          ord.product.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Handle status update
  const handleUpdateStatus = (id, newStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.id === id) {
        return { ...o, status: newStatus }
      }
      return o
    }))
    setStatusMenuOpen(null)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Orders Hub</h1>
        <p className="text-sm text-slate-500 mt-1">Track and manage client orders, packing labels, and logistics pickups</p>
      </div>

      {/* Filter and Search controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Order ID, product, or buyer name..."
            className="w-full h-11 border border-slate-200 rounded-xl pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
          />
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-500">
          {["All", "New", "Packed", "Shipped", "Delivered", "Returned"].map((status) => {
            const count = status === "All" ? orders.length : orders.filter(o => o.status === status).length
            return (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-xl border transition-all ${
                  filter === status
                    ? "bg-[#1E4D34] text-white border-[#1E4D34] shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100"
                }`}
              >
                {status} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((ord) => (
            <div key={ord.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
              {/* Header bar */}
              <div className="bg-slate-50/70 border-b border-slate-100 px-5 py-3.5 flex flex-wrap justify-between items-center text-xs font-semibold text-slate-500 gap-2">
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-slate-800 text-sm">{ord.id}</span>
                  <span className="text-slate-305">|</span>
                  <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1" /> {ord.date}</span>
                </div>
                <div>
                  Buyer: <span className="font-bold text-slate-700">{ord.buyer}</span> ({ord.location})
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl p-2 bg-slate-50 border border-slate-100 rounded-xl">👗</span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{ord.product}</h4>
                      <p className="text-xs text-slate-400 font-semibold mt-1">Single Unit • Handcrafted Authentic</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-slate-900">₹{ord.amount.toLocaleString("en-IN")}</span>
                    <span className={`block mt-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase text-center ${statusBadges[ord.status]}`}>
                      {ord.status}
                    </span>
                  </div>
                </div>

                {/* Logistics */}
                <div className="bg-[#F8FAF9] p-3.5 rounded-xl border border-slate-100/50 flex flex-col sm:flex-row justify-between text-xs text-slate-500 font-medium gap-2">
                  <p className="flex items-center">
                    <Truck className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                    Tracking: <span className="text-slate-800 font-bold ml-1">{ord.tracking}</span>
                  </p>
                  <p>
                    Expected delivery: <span className="text-slate-800 font-bold">{ord.eta}</span>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap justify-between items-center pt-3 border-t border-slate-50 gap-2">
                  <div className="flex space-x-2">
                    <button className="text-xs bg-slate-105 hover:bg-slate-150 border border-slate-200 text-slate-650 font-bold px-3 py-2 rounded-xl transition-all">
                      View Details
                    </button>
                    
                    {/* Update Status Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => setStatusMenuOpen(statusMenuOpen === ord.id ? null : ord.id)}
                        className="text-xs bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl transition-all flex items-center space-x-1"
                      >
                        <RefreshCw className="h-3.5 w-3.5 mr-1" />
                        <span>Update Status</span>
                      </button>

                      {statusMenuOpen === ord.id && (
                        <div className="absolute left-0 mt-2 w-36 bg-white border border-slate-100 rounded-xl shadow-xl z-20 p-1.5 space-y-0.5">
                          {["Packed", "Shipped", "Delivered", "Returned"].map((st) => (
                            <button
                              key={st}
                              onClick={() => handleUpdateStatus(ord.id, st)}
                              className="w-full text-left text-xs font-bold text-slate-650 hover:bg-slate-50 p-2 rounded-lg transition-colors flex items-center justify-between"
                            >
                              <span>{st}</span>
                              {ord.status === st && <Check className="h-3.5 w-3.5 text-emerald-600" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${ord.phone.replace("+", "")}?text=Hi%20${encodeURIComponent(ord.buyer)},%20this%20is%2520Purnima%20from%20Asom%20Bazaar%20regarding%20order%20${ord.id}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs bg-[#25D366]/10 hover:bg-[#25D366]/20 text-emerald-750 font-bold px-3.5 py-2 rounded-xl transition-all flex items-center space-x-1.5"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Contact via WA</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-slate-100 shadow-sm text-center space-y-3">
            <ShoppingBag className="h-10 w-10 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-700 text-sm">No Orders Found</h4>
            <p className="text-xs text-slate-400">Try adjusting your filter or search query.</p>
          </div>
        )}
      </div>
    </div>
  )
}

