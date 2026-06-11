"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../components/ui/card"

export default function RegisterPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    role: "buyer" // buyer or seller
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Registration submitted", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold font-heading">Create an Account</CardTitle>
          <CardDescription>Sign up to shop or sell traditional Assamese crafts</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
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
              <label className="text-xs font-semibold text-slate-500">Email Address</label>
              <Input
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">Password</label>
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">I want to join as</label>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "buyer" })}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    formData.role === "buyer"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  Buyer (Shop crafts)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "seller" })}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    formData.role === "seller"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  Seller (Sell crafts)
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">Sign Up</Button>
            <p className="text-xs text-center text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-semibold">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
