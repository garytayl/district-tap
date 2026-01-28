import Link from "next/link"

import { Badge } from "@/components/ui/Badge"

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/tracker", label: "Tracker" },
  { href: "/admin/menus", label: "Menus" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/private-events", label: "Private Events" },
  { href: "/admin/catering", label: "Catering" },
  { href: "/admin/loyalty", label: "Loyalty" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/settings", label: "Settings" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-shell min-h-screen bg-white">
      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-4">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-black/40">Admin</div>
            <h2 className="text-2xl font-semibold">Command Center</h2>
            <Badge variant="dark">Internal</Badge>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-black/10 px-4 py-2 text-sm font-semibold text-black/70 hover:border-black hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section className="min-w-0">{children}</section>
      </main>
    </div>
  )
}
