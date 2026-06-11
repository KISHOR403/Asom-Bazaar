"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../components/ui/card"

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Forgot password request", email)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold font-heading">Reset Password</CardTitle>
          <CardDescription>Enter your email to receive a password reset link</CardDescription>
        </CardHeader>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Email Address</label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full">Send Reset Link</Button>
              <Link href="/login" className="text-xs text-primary hover:underline font-semibold">
                Back to Sign In
              </Link>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="py-6 text-center space-y-4">
            <span className="text-4xl">✉️</span>
            <p className="text-sm text-slate-600">
              We have sent a reset link to <span className="font-semibold text-slate-800">{email}</span>. Please check your inbox.
            </p>
            <Link href="/login" className="inline-block text-xs text-primary hover:underline font-semibold">
              Back to Sign In
            </Link>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
