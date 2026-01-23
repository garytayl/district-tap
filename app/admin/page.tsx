import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const quickStats = [
  { label: "Active menus", value: "6" },
  { label: "Upcoming events", value: "12" },
  { label: "Private event inquiries", value: "4" },
  { label: "Catering orders", value: "7" },
]

const actionItems = [
  {
    title: "Review project tracker",
    description: "Update tasks and progress for this project.",
    href: "/admin/tracker",
  },
  {
    title: "Update Brunch menu",
    description: "Add seasonal brunch features and libations.",
    href: "/admin/menus",
  },
  {
    title: "Publish summer concert lineup",
    description: "Schedule weekly performers and drink specials.",
    href: "/admin/events",
  },
  {
    title: "Review new event inquiry",
    description: "The Rickhouse request pending response.",
    href: "/admin/private-events",
  },
]

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Admin Overview</Badge>
        <h1 className="text-3xl font-semibold">District Tap Admin Dashboard</h1>
        <p className="text-sm text-black/60">
          Manage menus, events, private rooms, catering requests, and loyalty program details.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Quick actions</h2>
            <p className="text-sm text-black/60">Jump into the most common updates.</p>
          </div>
          <Button href="/admin/settings" variant="outline" size="sm">
            Settings
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {actionItems.map((item) => (
            <Card key={item.title} className="border-black/5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-black/60">{item.description}</p>
              <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-black/60 hover:text-black">
                Open →
              </Link>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}
