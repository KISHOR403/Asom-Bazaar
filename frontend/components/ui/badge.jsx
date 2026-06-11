import * as React from "react"
import { cn } from "../../lib/utils"

export function Badge({ className, variant = "default", ...props }) {
  const baseStyles = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground shadow",
    secondary: "border-transparent bg-secondary text-secondary-foreground shadow",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow",
    outline: "text-foreground",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}
