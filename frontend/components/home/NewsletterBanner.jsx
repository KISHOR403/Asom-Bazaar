"use client"
import * as React from "react"
import { Lock } from "lucide-react"

export default function NewsletterBanner() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-20 lg:py-24 bg-forest-50">
      <div className="max-w-2xl mx-auto px-5 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
          Get Exclusive Deals &<br />Artisan Stories
        </h2>
        <p className="text-forest-400 text-base max-w-md mx-auto">
          Join 12,000+ people who get early access to new collections and Bihu special offers.
        </p>

        {submitted ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-forest-100 animate-scale-in">
            <span className="text-4xl mb-3 block">🎉</span>
            <p className="font-heading text-xl font-bold text-forest">You&apos;re subscribed!</p>
            <p className="text-sm text-forest-400 mt-1">Check your inbox for a welcome surprise.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 h-13 px-5 py-3.5 rounded-xl border border-forest-200 bg-white text-sm text-forest focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]"
              required
            />
            <button
              type="submit"
              className="h-13 px-8 py-3.5 rounded-xl bg-forest text-white text-sm font-bold hover:bg-forest-600 transition-all btn-3d shadow-sm whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>
        )}

        <p className="flex items-center justify-center gap-1.5 text-xs text-forest-300">
          <Lock className="h-3 w-3" /> No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
