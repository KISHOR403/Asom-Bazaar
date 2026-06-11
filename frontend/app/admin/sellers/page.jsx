import Link from "next/link"
import { Badge } from "../../../components/ui/badge"

const sellersList = [
  { id: 1, name: "Pranab Kalita", cluster: "Sualkuchi Weavers", status: "verified" },
  { id: 2, name: "Gita Das", cluster: "Barpeta Handicrafts", status: "pending" }
]

export default function AdminSellersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Sellers & Weavers</h1>
        <p className="text-sm text-slate-500 mt-1">Review artisan portfolios and grant seller licenses</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 font-semibold text-slate-500">
              <th className="p-4">Seller ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Cluster Location</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sellersList.map((sel) => (
              <tr key={sel.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-slate-800">#SEL0{sel.id}</td>
                <td className="p-4 font-semibold text-slate-800">{sel.name}</td>
                <td className="p-4 text-slate-600">{sel.cluster}</td>
                <td className="p-4">
                  <Badge variant={sel.status === "verified" ? "secondary" : "default"}>
                    {sel.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <Link
                    href={`/admin/sellers/${sel.id}`}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Manage Verification
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
