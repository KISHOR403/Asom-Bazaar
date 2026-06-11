"use client"
import * as React from "react"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

export default function SellerProfilePage() {
  const [profile, setProfile] = React.useState({
    shopName: "Sualkuchi Golden Handlooms",
    weaverName: "Pranab Kalita",
    village: "Sualkuchi",
    bio: "Gold-threaded Muga silk sarees and Mekhela Chador since 1995."
  })

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-800">Artisan Profile</h1>
        <p className="text-sm text-slate-500 mt-1">Tell buyers about your story, weaving clusters, and legacy</p>
      </div>

      <form className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Shop Name</label>
            <Input name="shopName" value={profile.shopName} onChange={handleChange} required />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Master Artisan Name</label>
            <Input name="weaverName" value={profile.weaverName} onChange={handleChange} required />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Village / Production Cluster</label>
          <Input name="village" value={profile.village} onChange={handleChange} required />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Artisan Bio / Story</label>
          <textarea
            name="bio"
            rows="4"
            value={profile.bio}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-transparent p-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-slate-700"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Update Profile
        </Button>
      </form>
    </div>
  )
}
