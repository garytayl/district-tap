import { Badge } from "@/components/ui/Badge"

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
        {description ? <p className="max-w-3xl text-sm text-black/60 md:text-base">{description}</p> : null}
      </div>
      {children}
    </div>
  )
}
