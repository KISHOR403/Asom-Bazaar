"use client"
import * as React from "react"
import Link from "next/link"
import Breadcrumb from "../../../components/common/Breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <Breadcrumb items={[{ label: "Checkout" }]} />
      <div className="max-w-2xl mx-auto space-y-6 mt-6">
        <h1 className="text-2xl font-bold font-heading text-slate-800">Checkout Process</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:border-primary transition-all">
            <CardHeader>
              <CardTitle className="text-base font-semibold">1. Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-slate-500">Provide shipping details for delivering handlooms.</p>
              <Link
                href="/checkout/address"
                className="inline-block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors"
              >
                Enter Address
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:border-primary transition-all opacity-80">
            <CardHeader>
              <CardTitle className="text-base font-semibold">2. Choose Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-slate-500">Select Razorpay online transaction or cash on delivery.</p>
              <Link
                href="/checkout/payment"
                className="inline-block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-lg transition-colors"
              >
                Select Payment
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
