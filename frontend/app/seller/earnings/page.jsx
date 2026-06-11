import { formatPrice } from "../../../lib/utils"

const payouts = [
  { id: "pay_01", amount: 20000, date: "05 Jun 2026", status: "completed" },
  { id: "pay_02", amount: 15000, date: "28 May 2026", status: "completed" }
]

export default function SellerEarningsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Earnings & Payouts</h1>
        <p className="text-sm text-slate-500 mt-1">Review your lifetime revenue, commission rates, and banking records</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lifetime Earnings</span>
          <span className="text-3xl font-extrabold text-slate-900 block">{formatPrice(45200)}</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Payout</span>
          <span className="text-3xl font-extrabold text-slate-900 block">{formatPrice(10200)}</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Platform Fee</span>
          <span className="text-3xl font-extrabold text-slate-900 block">10%</span>
        </div>
      </div>

      {/* Payout list */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-800 text-lg">Payout History</h3>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 font-semibold text-slate-500">
                <th className="p-4">Reference ID</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Paid Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payouts.map((pay) => (
                <tr key={pay.id}>
                  <td className="p-4 font-mono text-xs">{pay.id}</td>
                  <td className="p-4 font-semibold text-slate-800">{formatPrice(pay.amount)}</td>
                  <td className="p-4 text-slate-500 text-xs">{pay.date}</td>
                  <td className="p-4 font-semibold text-emerald-600 capitalize">{pay.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
