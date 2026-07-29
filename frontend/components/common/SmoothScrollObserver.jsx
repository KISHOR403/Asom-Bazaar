"use client"
import * as React from "react"
import { usePathname } from "next/navigation"

export default function SmoothScrollObserver({ children }) {
  const pathname = usePathname()

  React.useEffect(() => {
    // Select elements to reveal automatically on scroll
    const selectors = [
      "section",
      ".reveal",
      ".reveal-up",
      ".reveal-scale",
      ".card-3d",
      ".stagger-item",
      "footer",
    ]

    const elements = document.querySelectorAll(selectors.join(","))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            // Once revealed, unobserve to keep performance 100% smooth
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    elements.forEach((el) => {
      // Add base reveal class if not already present
      if (!el.classList.contains("scroll-reveal-active")) {
        el.classList.add("scroll-reveal-active")
      }
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [pathname])

  return (
    <div key={pathname} className="page-transition-wrapper">
      {children}
    </div>
  )
}
