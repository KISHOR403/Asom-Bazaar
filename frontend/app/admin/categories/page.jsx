"use client"
import * as React from "react"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

const initialCategories = [
  { id: 1, name: "Mekhela Chador", slug: "mekhela-chador" },
  { id: 2, name: "Jewellery", slug: "jewellery" },
  { id: 3, name: "Bamboo & Cane", slug: "bamboo-cane" }
]

export default function AdminCategoriesPage() {
  const [list, setList] = React.useState(initialCategories)
  const [newName, setNewName] = React.useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    if (!newName.trim()) return
    const slug = newName.toLowerCase().replace(/\s+/g, "-")
    setList([...list, { id: list.length + 1, name: newName, slug }])
    setNewName("")
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Categories Manager</h1>
        <p className="text-sm text-slate-500 mt-1">Configure product taxonomy and search slugs</p>
      </div>

      <form onSubmit={handleAdd} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex gap-4">
        <Input
          placeholder="New Category Name (e.g. Assamese Tea)"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <Button type="submit">Create Category</Button>
      </form>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 font-semibold text-slate-500">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Slug</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {list.map((cat) => (
              <tr key={cat.id}>
                <td className="p-4 font-mono text-xs">#{cat.id}</td>
                <td className="p-4 font-semibold text-slate-800">{cat.name}</td>
                <td className="p-4 font-mono text-xs text-slate-500">{cat.slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
