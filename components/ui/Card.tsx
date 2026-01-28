import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("glass-tile text-white flex flex-col gap-6 rounded-3xl border border-white/10 p-6 shadow-sm", className)}
      {...props}
    />
  )
}

export { Card }
