import Sidebar from "../../components/layout/Sidebar"

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar type="admin" />
      <main className="flex-1 p-8 overflow-y-auto max-h-screen">
        {children}
      </main>
    </div>
  )
}
