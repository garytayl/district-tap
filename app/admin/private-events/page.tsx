import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const inquiries = [
  { name: "The Rickhouse", client: "Anderson & Co.", date: "Feb 14, 2026", status: "Pending" },
  { name: "Downtown Parlor", client: "Indy Tech", date: "Mar 02, 2026", status: "Quoted" },
  { name: "Game Room", client: "Private Party", date: "Jan 29, 2026", status: "Confirmed" },
]

export default function AdminPrivateEventsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Private Events</Badge>
        <h1 className="text-3xl font-semibold">Private event inquiries</h1>
        <p className="text-sm text-black/60">Track room requests and follow-up status.</p>
      </div>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">Inquiry pipeline</h2>
            <p className="text-sm text-black/60">New and active requests.</p>
          </div>
          <Button variant="secondary" size="sm">
            Add Inquiry
          </Button>
        </div>
        <div className="mt-6 grid gap-3 text-sm">
          {inquiries.map((inquiry) => (
            <div key={inquiry.client} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-black/10 px-4 py-3">
              <div>
                <p className="font-semibold">{inquiry.client}</p>
                <p className="text-black/50">{inquiry.name} · {inquiry.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{inquiry.status}</Badge>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
