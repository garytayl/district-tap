import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const menus = [
  { name: "Downtown Lunch + Dinner", status: "Published", updated: "Dec 2025" },
  { name: "Northside Lunch + Dinner", status: "Published", updated: "Dec 2025" },
  { name: "Downtown Event Menu", status: "Published", updated: "Nov 2025" },
  { name: "Northside Brunch", status: "Seasonal", updated: "Jan 2026" },
  { name: "Northside Libations", status: "Draft", updated: "Jan 2026" },
  { name: "Downtown Libations", status: "Draft", updated: "Jan 2026" },
]

export default function AdminMenusPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Menus</Badge>
        <h1 className="text-3xl font-semibold">Menu management</h1>
        <p className="text-sm text-black/60">Track updates for food, brunch, event, and drinks menus.</p>
      </div>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">Menu list</h2>
            <p className="text-sm text-black/60">Drafts and published menus by location.</p>
          </div>
          <Button variant="secondary" size="sm">
            Add Menu
          </Button>
        </div>
        <div className="mt-6 grid gap-3 text-sm">
          {menus.map((menu) => (
            <div key={menu.name} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-black/10 px-4 py-3">
              <div>
                <p className="font-semibold">{menu.name}</p>
                <p className="text-black/50">Updated {menu.updated}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{menu.status}</Badge>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
