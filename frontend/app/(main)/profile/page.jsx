"use client"
import * as React from "react"
import Breadcrumb from "../../../components/common/Breadcrumb"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

export default function ProfilePage() {
  const [profile, setProfile] = React.useState({
    name: "John Doe",
    email: "buyer@example.com",
    phone: "9876543210"
  })

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb items={[{ label: "Profile" }]} />
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6 mt-6">
        <h1 className="text-2xl font-bold font-heading text-slate-800 border-b border-slate-100 pb-4">
          Personal Information
        </h1>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Full Name</label>
            <Input name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Email Address</label>
            <Input name="email" value={profile.email} onChange={handleChange} disabled />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500">Phone Number</label>
            <Input name="phone" value={profile.phone} onChange={handleChange} />
          </div>
        </div>

        <Button type="button" className="w-full">
          Save Changes
        </Button>
      </div>
    </div>
  )
}
