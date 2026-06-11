import Link from "next/link"
import Breadcrumb from "../../../components/common/Breadcrumb"

const artisansList = [
  { id: 1, name: "Pranab Kalita", craft: "Muga Silk Weaver", village: "Sualkuchi", avatar: "👨‍🌾", desc: "Crafting beautiful golden thread handlooms for over 30 years." },
  { id: 2, name: "Rumi Boro", craft: "Bamboo Artist", village: "Barpeta", avatar: "👩‍🌾", desc: "Weaving indigenous bamboo baskets and decor utilities." }
]

export default function ArtisansPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb items={[{ label: "Artisans" }]} />
      
      <div className="mt-6 max-w-xl space-y-2">
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Our Master Artisans</h1>
        <p className="text-sm text-slate-500">Every craft carries the heart and heritage of an Assamese weaver.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {artisansList.map((artisan) => (
          <div key={artisan.id} className="flex gap-6 p-6 rounded-xl border border-slate-100 bg-white items-start shadow-sm">
            <span className="text-6xl p-4 bg-slate-50 rounded-xl">{artisan.avatar}</span>
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                {artisan.craft}
              </span>
              <h3 className="text-lg font-bold text-slate-800">{artisan.name}</h3>
              <p className="text-xs font-semibold text-slate-400">Village: {artisan.village}, Assam</p>
              <p className="text-sm text-slate-600 leading-relaxed">{artisan.desc}</p>
              <Link href={`/artisans/${artisan.id}`} className="inline-block text-xs font-bold text-primary hover:underline pt-2">
                View Profile & Store →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
