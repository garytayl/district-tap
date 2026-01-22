import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const events = [
  { name: "Happy Hour Live Music", date: "Every Friday", status: "Published" },
  { name: "Summer Concert Series", date: "Thursdays", status: "Draft" },
  { name: "Berlin Brunch", date: "Select Sundays", status: "Published" },
]

export default function AdminEventsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Events</Badge>
        <h1 className="text-3xl font-semibold">Live music & events</h1>
        <p className="text-sm text-black/60">Publish new events and update details for the calendar.</p>
      </div>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">Upcoming schedule</h2>
            <p className="text-sm text-black/60">Manage listings and status.</p>
          </div>
          <Button variant="secondary" size="sm">
            Add Event
          </Button>
        </div>
        <div className="mt-6 grid gap-3 text-sm">
          {events.map((event) => (
            <div key={event.name} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-black/10 px-4 py-3">
              <div>
                <p className="font-semibold">{event.name}</p>
                <p className="text-black/50">{event.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{event.status}</Badge>
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
