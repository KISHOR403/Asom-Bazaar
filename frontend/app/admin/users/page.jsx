import { Badge } from "../../../components/ui/badge"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "buyer", status: "active" },
  { id: 2, name: "Pranab Kalita", email: "pranab@example.com", role: "seller", status: "active" }
]

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">User Directory</h1>
        <p className="text-sm text-slate-500 mt-1">Manage platform registrations and credentials</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 font-semibold text-slate-500">
              <th className="p-4">User ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((usr) => (
              <tr key={usr.id}>
                <td className="p-4 font-bold text-slate-800">#{usr.id}</td>
                <td className="p-4 font-semibold text-slate-800">{usr.name}</td>
                <td className="p-4 text-slate-600">{usr.email}</td>
                <td className="p-4">
                  <Badge variant={usr.role === "seller" ? "secondary" : "default"}>
                    {usr.role}
                  </Badge>
                </td>
                <td className="p-4 font-semibold text-emerald-600 capitalize">{usr.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
