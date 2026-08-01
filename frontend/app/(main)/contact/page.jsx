"use client"
import * as React from "react"
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, Globe } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-ivory text-forest-800 pt-24 pb-20">
      {/* Header */}
      <section className="bg-forest text-white py-16 px-5 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="inline-block bg-muga/20 text-muga px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-muga/30">
            📞 We&apos;re Here to Help
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">Contact Asom Bazaar</h1>
          <p className="text-forest-200 max-w-xl mx-auto text-sm sm:text-base">
            Have a question about an order, artisan registration, or authentic Assam craft products? Reach out to our team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Contact Details Panel */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-forest-100/30 shadow-sm space-y-6">
              <h2 className="font-heading font-bold text-xl text-forest">Get in Touch</h2>
              <p className="text-forest-600 text-xs sm:text-sm leading-relaxed">
                Our support team and artisan desk are available Monday to Saturday from 9:00 AM to 7:00 PM IST.
              </p>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-400">Call Us</p>
                    <p className="text-sm font-semibold text-forest mt-0.5">+91 361 245 9928</p>
                    <p className="text-xs text-forest-500">Toll Free: 1800 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muga/10 text-muga flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-400">Email Us</p>
                    <p className="text-sm font-semibold text-forest mt-0.5">support@asombazaar.com</p>
                    <p className="text-xs text-forest-500">sellers@asombazaar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-400">WhatsApp Support</p>
                    <p className="text-sm font-semibold text-forest mt-0.5">+91 98765 00000</p>
                    <p className="text-xs text-emerald-600 font-medium">Instant Assistant Active</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-forest-400">Main Craft Hub</p>
                    <p className="text-sm font-semibold text-forest mt-0.5">Asom Bazaar Craft Center</p>
                    <p className="text-xs text-forest-500">GS Road, Dispur, Guwahati, Assam - 781006</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-forest-50 p-6 rounded-3xl border border-forest-100/30 space-y-3">
              <div className="flex items-center gap-2 text-forest font-bold text-sm">
                <Clock className="w-4 h-4 text-muga" />
                <span>Working Hours</span>
              </div>
              <p className="text-xs text-forest-600 leading-relaxed">
                Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
                Sunday: Closed (WhatsApp automated support active)
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-3xl border border-forest-100/30 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-forest">Message Sent Successfully!</h3>
                <p className="text-forest-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our team will respond to your message within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-forest text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-forest-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-forest">Send Us a Message</h2>
                  <p className="text-xs text-forest-500 mt-1">Fill out the form below and we will get back to you shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Animesh Gogoi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ivory/50 border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest text-forest-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="animesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ivory/50 border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest text-forest-800"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ivory/50 border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest text-forest-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-ivory/50 border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest text-forest-800"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Order Status">Order Status / Delivery</option>
                      <option value="Artisan Partnership">Artisan / Seller Registration</option>
                      <option value="Return / Replacement">Return / Replacement</option>
                      <option value="Bulk Order">Bulk / Corporate Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-600 mb-1.5">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-ivory/50 border border-forest-100/60 rounded-xl px-4 py-3 text-sm outline-none focus:border-forest text-forest-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest text-white py-3.5 rounded-xl font-semibold hover:bg-forest-600 transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
