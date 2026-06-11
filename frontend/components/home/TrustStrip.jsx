import { Users, Award, Truck, RotateCcw } from "lucide-react"

const features = [
  { icon: Users, title: "Direct from Artisan", desc: "No middlemen. Makers earn fair price for their craft." },
  { icon: Award, title: "100% Authentic", desc: "Every product verified by our team before listing." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Ships to all 28 states via Shiprocket logistics." },
  { icon: RotateCcw, title: "Easy Returns", desc: "7-day hassle-free return policy on all orders." },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="glass-card rounded-3xl p-10 md:p-12 text-center space-y-6 card-3d bg-white/[0.07] border border-white/[0.1] hover:bg-white/[0.1] transition-all duration-300"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muga/15 text-muga mx-auto mb-2">
                  <Icon className="h-8 w-8 stroke-[1.75]" />
                  <div className="absolute inset-0 w-full h-full bg-muga/20 rounded-full blur-xl" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {feat.title}
                </h3>
                <p className="text-[15px] text-forest-100 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
