import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const users = [
  { email: "nikki@thedistricttap.com", role: "Admin", status: "Active" },
  { email: "moira@thedistricttap.com", role: "Editor", status: "Active" },
  { email: "events@thedistricttap.com", role: "Manager", status: "Active" },
]

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Users</Badge>
        <h1 className="text-3xl font-semibold">Admin users</h1>
        <p className="text-sm text-black/60">Manage access for marketing, events, and operations teams.</p>
      </div>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">Invite a teammate</h2>
            <p className="text-sm text-black/60">Add a new admin by email.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input className="rounded-full border border-black/15 px-4 py-2 text-sm" placeholder="teammate@email.com" />
            <Button variant="secondary" size="sm">
              Send Invite
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Current users</h2>
        <div className="mt-4 grid gap-3 text-sm">
          {users.map((user) => (
            <div key={user.email} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-black/10 px-4 py-3">
              <div>
                <p className="font-semibold">{user.email}</p>
                <p className="text-black/50">{user.role}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge>{user.status}</Badge>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
