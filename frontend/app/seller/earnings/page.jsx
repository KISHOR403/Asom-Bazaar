"use client"
import * as React from "react"
import { DollarSign, Download, Calendar, ArrowUpRight, TrendingUp, Info } from "lucide-react"

export default function SellerEarningsPage() {
  const [hoveredBar, setHoveredBar] = React.useState(null)

  // Last 12 months data
  const monthlyEarnings = [
    { month: "Aug", amount: 6200 },
    { month: "Sep", amount: 7800 },
    { month: "Oct", amount: 9200 },
    { month: "Nov", amount: 8400 },
    { month: "Dec", amount: 11000 },
    { month: "Jan", amount: 12500 },
    { month: "Feb", amount: 10800 },
    { month: "Mar", amount: 14000 },
    { month: "Apr", amount: 15600 },
    { month: "May", amount: 14200 },
    { month: "Jun", amount: 16500 },
    { month: "Jul", amount: 18240 }
  ]

  const transactions = [
    { date: "2 Jul 2025", order: "#AB-00234", sale: 2499, commission: 300, shipping: 80, earned: 2119 },
    { date: "1 Jul 2025", order: "#AB-00233", sale: 1899, commission: 228, shipping: 80, earned: 1591 },
    { date: "28 Jun 2025", order: "#AB-00232", sale: 3200, commission: 384, shipping: 80, earned: 2736 },
    { date: "26 Jun 2025", order: "#AB-00231", sale: 899, commission: 108, shipping: 80, earned: 711 },
    { date: "25 Jun 2025", order: "#AB-00230", sale: 599, commission: 72, shipping: 80, earned: 447 }
  ]

  // Find max value to scale bars
  const maxVal = Math.max(...monthlyEarnings.map(m => m.amount))
  const chartHeight = 140

  const handleDownload = (format) => {
    alert(`Downloading earnings statement in ${format} format...`)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">Earnings & Payouts</h1>
        <p className="text-sm text-slate-500 mt-1">Review your lifetime revenue, commission calculations, and payouts history</p>
      </div>

      {/* Financial Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2 card-3d">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Lifetime Earnings</span>
          <span className="text-xl md:text-2xl font-extrabold text-slate-800 block">₹1,24,840</span>
          <span className="text-[9px] text-emerald-600 font-bold flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-0.5" /> All-time sales
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2 card-3d">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">This Month</span>
          <span className="text-xl md:text-2xl font-extrabold text-slate-800 block">₹18,240</span>
          <span className="text-[9px] text-emerald-600 font-bold flex items-center">
            +12% vs last month
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2 card-3d">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Pending Payout</span>
          <span className="text-xl md:text-2xl font-extrabold text-slate-800 block">₹6,932</span>
          <span className="text-[9px] text-amber-500 font-bold flex items-center">
            SBI ••••4521 account
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2 card-3d">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Next Payout Date</span>
          <span className="text-xl md:text-2xl font-extrabold text-[#C9A84C] block">15 July 2025</span>
          <span className="text-[9px] text-slate-400 font-bold flex items-center">
            <Calendar className="h-3 w-3 mr-0.5" /> Monthly cycle
          </span>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div>
          <h3 className="font-extrabold font-heading text-lg text-slate-800">Monthly Earnings (Last 12 Months)</h3>
          <p className="text-xs text-slate-400 mt-0.5">Artisan revenue progression chart</p>
        </div>

        {/* Custom SVG Bar Chart */}
        <div className="relative w-full h-[180px] bg-slate-50/50 rounded-2xl border border-dashed border-slate-150 p-4 flex items-end justify-between overflow-hidden">
          <div className="absolute inset-x-0 bottom-8 top-4 flex flex-col justify-between pointer-events-none px-4">
            <div className="border-t border-slate-200/50 w-full" />
            <div className="border-t border-slate-200/50 w-full" />
            <div className="border-t border-slate-200/50 w-full" />
          </div>

          <div className="w-full h-[140px] flex items-end justify-between px-2 relative z-10">
            {monthlyEarnings.map((m, idx) => {
              const barPercentage = (m.amount / maxVal) * 100
              const barHeight = (m.amount / maxVal) * chartHeight
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center flex-1 group"
                  onMouseEnter={() => setHoveredBar(idx)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {/* Bar */}
                  <div 
                    className="w-4 sm:w-6 bg-[#C9A84C] group-hover:bg-[#1E4D34] rounded-t-md transition-all duration-500 ease-out relative cursor-pointer"
                    style={{ 
                      height: `${barHeight}px`,
                      animation: "growBar 1s ease-out forwards"
                    }}
                  />
                  {/* Label */}
                  <span className="text-[10px] text-slate-400 font-bold mt-2">{m.month}</span>
                </div>
              )
            })}
          </div>

          {/* Bar Tooltip */}
          {hoveredBar !== null && (
            <div 
              className="absolute bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-xl shadow-2xl pointer-events-none transition-all transform -translate-x-1/2"
              style={{
                left: `${(hoveredBar / (monthlyEarnings.length - 1)) * 82 + 9}%`,
                bottom: `${(monthlyEarnings[hoveredBar].amount / maxVal) * 80 + 35}px`
              }}
            >
              <p className="text-[9px] text-slate-350">{monthlyEarnings[hoveredBar].month}</p>
              <p className="text-xs text-[#C9A84C] mt-0.5">₹{monthlyEarnings[hoveredBar].amount.toLocaleString("en-IN")}</p>
            </div>
          )}
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="font-extrabold font-heading text-lg text-slate-800">Transaction History</h3>
            <p className="text-xs text-slate-400 mt-0.5">Detailed commission and shipping deductions per sale</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => handleDownload("PDF")}
              className="text-xs border border-slate-200 hover:bg-slate-50 font-bold px-3.5 py-2 rounded-xl flex items-center space-x-1.5 text-slate-600 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </button>
            <button 
              onClick={() => handleDownload("CSV")}
              className="text-xs border border-slate-200 hover:bg-slate-50 font-bold px-3.5 py-2 rounded-xl flex items-center space-x-1.5 text-slate-650 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CSV</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                <th className="pb-3">Date</th>
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Sale Price</th>
                <th className="pb-3">Commission (12%)</th>
                <th className="pb-3">Shipping Cost</th>
                <th className="pb-3 text-right">You Earned</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-slate-650 font-medium">
              {transactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3.5">{tx.date}</td>
                  <td className="py-3.5 font-bold text-slate-700">{tx.order}</td>
                  <td className="py-3.5 font-bold text-slate-800">₹{tx.sale.toLocaleString("en-IN")}</td>
                  <td className="py-3.5 text-rose-500 font-semibold">-₹{tx.commission}</td>
                  <td className="py-3.5 text-rose-505 font-semibold text-rose-500">-₹{tx.shipping}</td>
                  <td className="py-3.5 text-right font-extrabold text-[#1E4D34] text-sm">
                    ₹{tx.earned.toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        @keyframes growBar {
          from {
            height: 0px;
          }
        }
      `}</style>
    </div>
  )
}

