"use client"
import * as React from "react"
import { Input } from "../ui/input"

export default function AddressForm({ onSubmit }) {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "Assam",
    pinCode: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-bold text-slate-800 text-lg">Shipping Address</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Full Name</label>
          <Input 
            name="fullName" 
            placeholder="John Doe" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">Phone Number</label>
          <Input 
            name="phone" 
            placeholder="9876543210" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-500">Street Address</label>
        <Input 
          name="streetAddress" 
          placeholder="House No., Village / Block Name" 
          value={formData.streetAddress} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">City</label>
          <Input 
            name="city" 
            placeholder="Guwahati" 
            value={formData.city} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">State</label>
          <Input 
            name="state" 
            placeholder="Assam" 
            value={formData.state} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500">PIN Code</label>
          <Input 
            name="pinCode" 
            placeholder="781001" 
            value={formData.pinCode} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-sm"
      >
        Save & Continue
      </button>
    </form>
  )
}
