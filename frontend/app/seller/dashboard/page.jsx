import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tag, ShoppingBag, IndianRupee, TrendingUp } from "lucide-react"

export default function SellerDashboardPage() {
  const stats = [
    { title: "Total Sales", value: "₹45,200", icon: IndianRupee, desc: "+12% from last month" },
    { title: "Active Products", value: "12", icon: Tag, desc: "2 out of stock" },
    { title: "Total Orders", value: "24", icon: ShoppingBag, desc: "4 pending delivery" },
    { title: "Commission Paid", value: "₹4,520", icon: TrendingUp, desc: "10% platform rate" }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Welcome back, Pranab!</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your handloom creations and track customer orders.</p>
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
