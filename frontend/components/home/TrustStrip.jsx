const features = [
  { icon: "🏺", title: "Direct from Artisan", desc: "No middlemen. Makers earn fair price for their craft." },
  { icon: "🛡️", title: "100% Authentic", desc: "Every product verified by our team before listing." },
  { icon: "🚚", title: "Pan-India Delivery", desc: "Ships to all 28 states via Shiprocket logistics." },
  { icon: "↩️", title: "Easy Returns", desc: "7-day hassle-free return policy on all orders." },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-forest relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-muga/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest-300/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why Thousands Choose Us
          </h2>
          <p className="mt-3 text-forest-200 text-base max-w-md mx-auto">
            Trust, authenticity, and artisan empowerment at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="glass-card rounded-2xl p-7 text-center space-y-4 card-3d bg-white/[0.07] border-white/[0.1]"
            >
              <div className="relative inline-flex">
                <span className="text-4xl">{feat.icon}</span>
                <div className="absolute inset-0 w-full h-full bg-muga/20 rounded-full blur-xl" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                {feat.title}
              </h3>
              <p className="text-sm text-forest-200 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
