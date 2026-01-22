import { cn } from "@/lib/utils"

type CardProps = {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("rounded-3xl border border-black/10 bg-white p-6 shadow-sm", className)}>
      {children}
    </div>
  )
}
