"use client"

export default function AnnouncementStrip() {
  const items = [
    "🚚 Free shipping above ₹999",
    "✦ GI-Tagged Authentic Products",
    "🔄 Easy 7-day returns",
    "🪷 Handcrafted with love in Assam",
    "🚚 Free shipping above ₹999",
    "✦ GI-Tagged Authentic Products",
    "🔄 Easy 7-day returns",
    "🪷 Handcrafted with love in Assam",
  ]

  return (
    <div className="bg-forest text-muga-200 overflow-hidden py-2.5 select-none">
      <div className="flex whitespace-nowrap animate-marquee marquee-track">
        {items.map((item, i) => (
          <span key={i} className="mx-8 text-xs font-semibold tracking-wide">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
