import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Users, ShoppingBag, ArrowUpRight, ShieldCheck } from "lucide-react"

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Users", value: "3,240", icon: Users, desc: "20 new registrations today" },
    { title: "Active Sellers", value: "128", icon: ShieldCheck, desc: "5 pending verification" },
    { title: "Pending Products", value: "8", icon: ShoppingBag, desc: "Requires commission review" },
    { title: "Platform Revenue", value: "₹82,450", icon: ArrowUpRight, desc: "Calculated at 10% platform share" }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Admin Control Center</h1>
        <p className="text-sm text-slate-500 mt-1">Review registrations, approve craft catalogs, and run analytics.</p>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-extrabold text-slate-900">{stat.value}</span>
                <p className="text-[10px] text-slate-400 font-semibold mt-1">{stat.desc}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
