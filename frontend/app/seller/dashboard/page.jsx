"use client"
import * as React from "react"
import Link from "next/link"
import { 
  IndianRupee, 
  ShoppingBag, 
  Package, 
  Star, 
  ArrowUpRight, 
  Bell, 
  Plus, 
  Camera, 
  AlertTriangle, 
  TrendingUp, 
  ChevronRight,
  Info,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react"

export default function SellerDashboardPage() {
  // Chart Tabs State
  const [activeTab, setActiveTab] = React.useState("This Year") // "This Month" | "Last 3 Months" | "This Year"
  const [hoveredDot, setHoveredDot] = React.useState(null) // index of hovered dot
  const [notificationOpen, setNotificationOpen] = React.useState(false)

  // Quick Action / Stock update modal
  const [stockToUpdate, setStockToUpdate] = React.useState(null)
  const [newStockVal, setNewStockVal] = React.useState("")
  const [productsList, setProductsList] = React.useState([
    { id: 1, title: "Eri Silk Mekhela Chador", price: 2499, stock: 5, status: "Live", sales: "4 sold this month", rating: 4.9, img: "👗" },
    { id: 2, title: "Muga Silk Stole", price: 1899, stock: 3, status: "Live", sales: "2 sold this month", rating: 4.7, img: "🧣" },
    { id: 3, title: "Tribal Gold Necklace", price: 3200, stock: 2, status: "Pending", sales: "Waiting for approval", rating: null, img: "📿" },
    { id: 4, title: "Bodo Dokhona", price: 2800, stock: 0, status: "OOS", sales: "Out of stock", rating: 4.8, img: "👘" }
  ])

  // Count animation state for stats cards (triggers on load)
  const [earningsCount, setEarningsCount] = React.useState(15000)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setEarningsCount((prev) => {
        if (prev >= 18240) {
          clearInterval(timer)
          return 18240
        }
        return prev + 180
      })
    }, 20)
    return () => clearInterval(timer)
  }, [])

  // Chart datasets
  const chartData = {
    "This Month": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      values: [3200, 4800, 3800, 6440],
      points: [
        { x: 30, y: 140 },
        { x: 120, y: 100 },
        { x: 210, y: 120 },
        { x: 300, y: 60 }
      ]
    },
    "Last 3 Months": {
      labels: ["May", "June", "July"],
      values: [14200, 16500, 18240],
      points: [
        { x: 30, y: 130 },
        { x: 165, y: 90 },
        { x: 300, y: 50 }
      ]
    },
    "This Year": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      values: [4800, 6200, 9500, 12100, 14200, 16500, 18240],
      points: [
        { x: 20, y: 160 },
        { x: 67, y: 145 },
        { x: 114, y: 115 },
        { x: 161, y: 95 },
        { x: 208, y: 78 },
        { x: 255, y: 58 },
        { x: 302, y: 40 }
      ]
    }
  }

  const currentDataset = chartData[activeTab]

  const handleUpdateStockSubmit = (e) => {
    e.preventDefault()
    if (!stockToUpdate) return
    setProductsList(prev => prev.map(p => {
      if (p.id === stockToUpdate.id) {
        return { 
          ...p, 
          stock: parseInt(newStockVal) || 0,
          status: (parseInt(newStockVal) || 0) > 0 ? "Live" : "OOS"
        }
      }
      return p
    }))
    setStockToUpdate(null)
    setNewStockVal("")
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Top Bar Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-6 rounded-2xl border border-slate-100 shadow-sm gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800 flex items-center">
            Good morning, Purnima 👋
          </h1>
          <p className="text-sm text-slate-500 mt-1">Here&apos;s your shop overview today from Sualkuchi hub.</p>
        </div>
        <div className="flex items-center space-x-3 self-end md:self-auto">
          {/* Notification Button */}
          <div className="relative">
            <button 
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-600 border border-slate-100 transition-colors relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </button>

            {/* Micro panel dropdown */}
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-100 rounded-xl shadow-xl z-30 p-4 transition-all duration-300 transform origin-top-right">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-slate-800 text-sm">Recent Alerts</h4>
                  <Link href="/seller/notifications" className="text-xs text-[#C9A84C] font-semibold hover:underline">View All</Link>
                </div>
                <div className="space-y-3">
                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100/50 flex space-x-2">
                    <span className="text-emerald-600 text-base">🟢</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">NEW ORDER</p>
                      <p className="text-[11px] text-slate-600">Order #AB-00235 received (Eri Silk - ₹2,499)</p>
                      <span className="text-[9px] text-slate-400">2 mins ago</span>
                    </div>
                  </div>
                  <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-100/50 flex space-x-2">
                    <span className="text-amber-500 text-base">⭐</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800">NEW REVIEW</p>
                      <p className="text-[11px] text-slate-600">Priya gave 5 stars: &ldquo;Beautiful quality!&rdquo;</p>
                      <span className="text-[9px] text-slate-400">1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/seller/products/add"
            className="flex items-center space-x-2 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-sm btn-3d"
          >
            <Plus className="h-4 w-4" />
            <span>Add Product</span>
          </Link>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Earnings Card */}
        <div className="bg-white p-5 rounded-2xl border-t-4 border-amber-500 shadow-sm card-3d flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="flex justify-between items-center text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Total Earnings</span>
              <div className="p-1.5 bg-amber-50 text-amber-500 rounded-lg"><IndianRupee className="h-4 w-4" /></div>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mt-2">
              ₹{earningsCount.toLocaleString("en-IN")}
            </h3>
          </div>
          <p className="text-xs text-emerald-600 font-semibold flex items-center mt-2">
            <span className="text-sm mr-1">↑</span> +12% vs last month
          </p>
        </div>

        {/* Orders Card */}
        <div className="bg-white p-5 rounded-2xl border-t-4 border-emerald-600 shadow-sm card-3d flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="flex justify-between items-center text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Orders This Month</span>
              <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg"><ShoppingBag className="h-4 w-4" /></div>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mt-2">34</h3>
          </div>
          <p className="text-xs text-emerald-600 font-semibold flex items-center mt-2">
            <span className="text-sm mr-1">↑</span> +8 new today
          </p>
        </div>

        {/* Products Card */}
        <div className="bg-white p-5 rounded-2xl border-t-4 border-blue-500 shadow-sm card-3d flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="flex justify-between items-center text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Products Listed</span>
              <div className="p-1.5 bg-blue-50 text-blue-505 rounded-lg"><Package className="h-4 w-4 text-blue-500" /></div>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mt-2">12</h3>
          </div>
          <p className="text-xs text-amber-500 font-semibold flex items-center mt-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-1.5 animate-pulse"></span>
            2 pending approval
          </p>
        </div>

        {/* Rating Card */}
        <div className="bg-white p-5 rounded-2xl border-t-4 border-orange-500 shadow-sm card-3d flex flex-col justify-between min-h-[140px]">
          <div>
            <div className="flex justify-between items-center text-slate-400">
              <span className="text-xs font-bold uppercase tracking-wider">Rating</span>
              <div className="p-1.5 bg-orange-50 text-orange-500 rounded-lg"><Star className="h-4 w-4 fill-current" /></div>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mt-2">4.8 / 5</h3>
          </div>
          <p className="text-xs text-slate-500 font-semibold mt-2">
            47 customer reviews
          </p>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main details: Chart, Orders, Products) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Earnings Chart Section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-extrabold font-heading text-lg text-slate-800">Your Earnings This Year</h3>
                <p className="text-xs text-slate-400">Sales revenue progression overview</p>
              </div>

              {/* Toggles */}
              <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-500 self-start">
                {["This Month", "Last 3 Months", "This Year"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      activeTab === tab 
                        ? "bg-white text-[#1E4D34] shadow-sm" 
                        : "hover:text-slate-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive SVG Line Chart */}
            <div className="relative w-full h-[220px] bg-slate-50/50 rounded-xl border border-dashed border-slate-100 p-4 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 320 180" preserveAspectRatio="none">
                <defs>
                  {/* Gradient for area fill */}
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="40" x2="320" y2="40" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="90" x2="320" y2="90" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="140" x2="320" y2="140" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="3 3" />

                {/* Shaded Area Chart */}
                <path
                  d={`M ${currentDataset.points[0].x} 180 
                      L ${currentDataset.points.map(p => `${p.x} ${p.y}`).join(" L ")} 
                      L ${currentDataset.points[currentDataset.points.length - 1].x} 180 Z`}
                  fill="url(#chartGrad)"
                  className="transition-all duration-500 ease-in-out"
                />

                {/* Line Chart */}
                <path
                  d={`M ${currentDataset.points.map(p => `${p.x} ${p.y}`).join(" L ")}`}
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500 ease-in-out"
                  style={{
                    strokeDasharray: 1000,
                    strokeDashoffset: 0,
                    animation: "drawChart 1.5s ease-out forwards"
                  }}
                />

                {/* Interactive Dots */}
                {currentDataset.points.map((point, index) => (
                  <g key={index}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={hoveredDot === index ? 6 : 4}
                      fill={hoveredDot === index ? "#1E4D34" : "#C9A84C"}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHoveredDot(index)}
                      onMouseLeave={() => setHoveredDot(null)}
                    />
                  </g>
                ))}
              </svg>

              {/* Chart Tooltip */}
              {hoveredDot !== null && currentDataset.labels[hoveredDot] && (
                <div 
                  className="absolute bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg shadow-lg pointer-events-none transition-all"
                  style={{
                    left: `${(currentDataset.points[hoveredDot].x / 320) * 85 + 5}%`,
                    top: `${(currentDataset.points[hoveredDot].y / 180) * 70 + 5}%`
                  }}
                >
                  <p className="text-[9px] text-slate-300 font-semibold">{currentDataset.labels[hoveredDot]}</p>
                  <p className="text-xs text-[#C9A84C]">₹{currentDataset.values[hoveredDot].toLocaleString("en-IN")}</p>
                </div>
              )}
            </div>

            {/* Under-chart Metrics */}
            <div className="flex flex-wrap justify-between items-center text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100 gap-2">
              <div>
                Total earned: <span className="text-slate-800">₹18,240</span>
              </div>
              <div className="hidden sm:block text-slate-300">|</div>
              <div>
                Pending payout: <span className="text-slate-800">₹3,400</span>
              </div>
              <div className="hidden sm:block text-slate-300">|</div>
              <div>
                Next payout: <span className="text-[#C9A84C] font-bold">15 July</span>
              </div>
            </div>
          </div>

          {/* Recent Orders Section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-extrabold font-heading text-lg text-slate-800">Latest Orders</h3>
                <p className="text-xs text-slate-400">Manage your most recent incoming orders</p>
              </div>
              <Link href="/seller/orders" className="text-xs text-[#C9A84C] font-bold hover:underline flex items-center space-x-1">
                <span>View All Orders</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 pr-2">ORDER ID</th>
                    <th className="pb-3 pr-2">PRODUCT</th>
                    <th className="pb-3 pr-2">BUYER</th>
                    <th className="pb-3 pr-2">AMOUNT</th>
                    <th className="pb-3">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { id: "#AB-00234", prod: "Eri Silk Mekhela", buyer: "Priya S.", amount: "₹2,499", status: "Shipped", badge: "bg-amber-100 text-amber-800 border-amber-200" },
                    { id: "#AB-00233", prod: "Muga Stole", buyer: "Rahul D.", amount: "₹1,899", status: "Delivered", badge: "bg-emerald-100 text-emerald-800 border-emerald-200" },
                    { id: "#AB-00232", prod: "Tribal Necklace", buyer: "Ankit B.", amount: "₹3,200", status: "Packed", badge: "bg-blue-100 text-blue-800 border-blue-200" },
                    { id: "#AB-00231", prod: "Bamboo Wall Art", buyer: "Sneha M.", amount: "₹899", status: "Delivered", badge: "bg-emerald-100 text-emerald-800 border-emerald-200" },
                    { id: "#AB-00230", prod: "Gamosa Set x3", buyer: "Rohan K.", amount: "₹599", status: "Returned", badge: "bg-rose-100 text-rose-800 border-rose-200" },
                  ].map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-50/50">
                      <td className="py-3 font-bold text-slate-700">{ord.id}</td>
                      <td className="py-3 text-slate-600 font-medium">{ord.prod}</td>
                      <td className="py-3 text-slate-600">{ord.buyer}</td>
                      <td className="py-3 font-bold text-slate-800">{ord.amount}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${ord.badge}`}>
                          {ord.status === "Shipped" ? "🟡 " : ord.status === "Delivered" ? "✅ " : ord.status === "Packed" ? "🔵 " : ord.status === "Returned" ? "🔴 " : ""}
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Products Summary list */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-extrabold font-heading text-lg text-slate-800">Your Listed Products (12)</h3>
                <p className="text-xs text-slate-400">Creations currently status check</p>
              </div>
              <div className="flex space-x-2">
                <Link href="/seller/products/add" className="text-xs bg-slate-50 border border-slate-200 hover:bg-slate-100 font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1 text-slate-700">
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add New</span>
                </Link>
                <Link href="/seller/products" className="text-xs bg-slate-50 border border-slate-200 hover:bg-slate-100 font-bold px-3 py-1.5 rounded-lg text-slate-700">
                  Filter
                </Link>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {productsList.map((prod) => (
                <div key={prod.id} className="py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className="text-2xl p-2 bg-slate-50 border border-slate-100 rounded-xl shadow-inner">{prod.img}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-800 truncate">{prod.title}</p>
                      <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-semibold mt-1">
                        <span>{prod.sales}</span>
                        {prod.rating && (
                          <span className="flex items-center text-amber-500 font-bold">
                            <Star className="h-3 w-3 fill-current mr-0.5" />
                            {prod.rating}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 shrink-0">
                    <div className="text-right">
                      <p className="text-sm font-extrabold text-slate-850">₹{prod.price}</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Stock: {prod.stock}</p>
                    </div>

                    <div>
                      {prod.status === "Live" && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center space-x-1">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Live</span>
                        </span>
                      )}
                      {prod.status === "Pending" && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100 flex items-center space-x-1 group relative cursor-help">
                          <Clock className="h-3 w-3" />
                          <span>Pending</span>
                          <span className="absolute bottom-full right-0 mb-1 hidden group-hover:block bg-slate-900 text-white text-[9px] p-1.5 rounded-md w-32 shadow-lg text-center z-15">
                            Waiting for admin review
                          </span>
                        </span>
                      )}
                      {prod.status === "OOS" && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-750 border border-rose-100 flex items-center space-x-1">
                          <AlertCircle className="h-3 w-3 text-rose-500" />
                          <span>OOS</span>
                        </span>
                      )}
                    </div>

                    <div>
                      {prod.status === "OOS" ? (
                        <button 
                          onClick={() => {
                            setStockToUpdate(prod)
                            setNewStockVal("5")
                          }}
                          className="text-xs bg-[#1E4D34]/10 hover:bg-[#1E4D34]/20 text-[#1E4D34] font-bold px-2.5 py-1.5 rounded-lg transition-all"
                        >
                          Update Stock
                        </button>
                      ) : (
                        <Link 
                          href={`/seller/products/${prod.id}/edit`}
                          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-2.5 py-1.5 rounded-lg transition-all"
                        >
                          Edit
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Payout Summary & Notifications Card) */}
        <div className="space-y-6">
          {/* Quick Actions Card Row Inside sidebar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-extrabold font-heading text-lg text-slate-800">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link 
                href="/seller/products/add" 
                className="p-3 bg-emerald-50/50 hover:bg-emerald-50 rounded-xl border border-emerald-100/50 flex items-center space-x-3 transition-all cursor-pointer group"
              >
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Camera className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-800">Add New Product</p>
                  <p className="text-[10px] text-slate-400">Upload pictures and set prices</p>
                </div>
              </Link>

              <Link 
                href="/seller/orders?filter=New" 
                className="p-3 bg-blue-50/50 hover:bg-blue-50 rounded-xl border border-blue-100/50 flex items-center space-x-3 transition-all cursor-pointer group"
              >
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><ShoppingBag className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover:text-blue-800">Pending Orders (3)</p>
                  <p className="text-[10px] text-slate-400">Pack items ready for pickup</p>
                </div>
              </Link>

              <Link 
                href="/seller/reviews" 
                className="p-3 bg-amber-50/50 hover:bg-amber-50 rounded-xl border border-amber-100/50 flex items-center space-x-3 transition-all cursor-pointer group"
              >
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><Star className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover:text-amber-800">Reply to Reviews (2)</p>
                  <p className="text-[10px] text-slate-400">Keep customer satisfaction high</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Payout Summary Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 relative overflow-hidden">
            <span className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/10 rounded-full blur-xl"></span>
            
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold font-heading text-lg text-slate-800 flex items-center">
                <span className="mr-2">💰</span> Earnings Summary
              </h3>
              <div className="group relative">
                <Info className="h-4 w-4 text-slate-400 cursor-help" />
                <span className="absolute bottom-full right-0 mb-1 hidden group-hover:block bg-slate-900 text-white text-[9px] p-2 rounded-md w-44 shadow-lg leading-normal z-10 font-normal">
                  Transferred directly to your bank every 15th of the month.
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>This month&apos;s sales</span>
                <span className="text-slate-850 font-bold">₹8,240</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Platform commission (12%)</span>
                <span className="text-rose-600">-₹988</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Shipping deduction</span>
                <span className="text-rose-600">-₹320</span>
              </div>
              <div className="border-t border-slate-100 pt-2.5 flex justify-between text-slate-800 font-bold text-sm">
                <span>Your payout</span>
                <span className="text-[#1E4D34]">₹6,932</span>
              </div>
            </div>

            <div className="pt-3.5 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
              <p className="flex justify-between">
                <span>Next payout date:</span>
                <span className="font-bold text-slate-800">15 July 2025</span>
              </p>
              <p className="flex justify-between">
                <span>Payout to:</span>
                <span className="font-bold text-slate-800">SBI ••••4521</span>
              </p>
            </div>

            <Link 
              href="/seller/earnings" 
              className="block text-center text-xs text-[#C9A84C] font-bold pt-2 hover:underline border-t border-slate-100/50"
            >
              View Full Earnings Report →
            </Link>
          </div>

          {/* Notifications Panel */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold font-heading text-lg text-slate-800 flex items-center">
                <span className="mr-2">🔔</span> Notifications (3 new)
              </h3>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-emerald-50/35 rounded-xl border border-emerald-100/40 relative">
                <span className="absolute top-3 left-3 text-emerald-600 text-xs">🟢</span>
                <div className="pl-5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-extrabold text-slate-800 tracking-wider">NEW ORDER</span>
                    <span className="text-[9px] text-slate-400 font-semibold">2m ago</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">Order #AB-00235 received</p>
                  <p className="text-[10px] text-slate-400 font-medium">Eri Silk — ₹2,499</p>
                </div>
              </div>

              <div className="p-3 bg-amber-50/35 rounded-xl border border-amber-100/40 relative">
                <span className="absolute top-3 left-3 text-amber-500 text-xs">⭐</span>
                <div className="pl-5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-extrabold text-slate-800 tracking-wider">NEW REVIEW</span>
                    <span className="text-[9px] text-slate-400 font-semibold">1h ago</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">Priya gave you 5 stars</p>
                  <p className="text-[10px] text-slate-400 font-medium italic">&ldquo;Beautiful quality!&rdquo;</p>
                </div>
              </div>

              <div className="p-3 bg-red-50/35 rounded-xl border border-red-100/40 relative">
                <span className="absolute top-3 left-3 text-red-500 text-xs">⚠️</span>
                <div className="pl-5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-extrabold text-slate-800 tracking-wider">LOW STOCK</span>
                    <span className="text-[9px] text-slate-400 font-semibold">Yesterday</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">Tribal Necklace</p>
                  <p className="text-[10px] text-slate-400 font-medium">Only 1 left in stock</p>
                </div>
              </div>
            </div>

            <Link 
              href="/seller/notifications" 
              className="block text-center text-xs text-slate-500 font-bold pt-2 hover:underline border-t border-slate-150"
            >
              View All →
            </Link>
          </div>
        </div>
      </div>

      {/* Stock Update Mock Modal */}
      {stockToUpdate && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm border border-slate-100 shadow-2xl space-y-4 transform scale-100 animate-in fade-in zoom-in-95 duration-200">
            <div>
              <h3 className="font-extrabold font-heading text-lg text-slate-800">Update Stock Quantity</h3>
              <p className="text-xs text-slate-400 mt-0.5">{stockToUpdate.title}</p>
            </div>
            <form onSubmit={handleUpdateStockSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quantity in Stock</label>
                <input
                  type="number"
                  min="0"
                  required
                  value={newStockVal}
                  onChange={(e) => setNewStockVal(e.target.value)}
                  className="w-full h-11 border border-slate-200 rounded-xl px-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E4D34] text-slate-700"
                  placeholder="e.g. 5"
                />
              </div>
              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStockToUpdate(null)}
                  className="w-1/2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 bg-[#1E4D34] hover:bg-[#122A1E] text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950/20 transition-all"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Style for line chart draw keyframe */}
      <style jsx>{`
        @keyframes drawChart {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}

