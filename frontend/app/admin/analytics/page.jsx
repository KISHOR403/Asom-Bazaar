export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Business Analytics</h1>
        <p className="text-sm text-slate-500 mt-1">Monitor sales conversions, artisan earnings distribution, and visitor logs</p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm text-center py-24 space-y-2">
        <span className="text-5xl block">📊</span>
        <h2 className="text-lg font-bold text-slate-800">Analytics Dashboard</h2>
        <p className="text-xs text-slate-400 max-w-sm mx-auto">
          Detailed metrics showing regional weaver distribution and monthly revenue reports are updated in real-time.
        </p>
      </div>
    </div>
  )
}
