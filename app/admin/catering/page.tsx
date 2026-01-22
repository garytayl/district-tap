import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const orders = [
  { name: "Catering Pickup", client: "Realtor Lunch", total: "$420", status: "Scheduled" },
  { name: "Delivery", client: "Indy Health", total: "$860", status: "Confirmed" },
  { name: "Office Drop", client: "Marketing Team", total: "$240", status: "Pending" },
]

export default function AdminCateringPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Catering</Badge>
        <h1 className="text-3xl font-semibold">Catering management</h1>
        <p className="text-sm text-black/60">Track incoming catering orders and service details.</p>
      </div>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">Active orders</h2>
            <p className="text-sm text-black/60">Pending and scheduled catering requests.</p>
          </div>
          <Button variant="secondary" size="sm">
            Add Order
          </Button>
        </div>
        <div className="mt-6 grid gap-3 text-sm">
          {orders.map((order) => (
            <div key={order.client} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-black/10 px-4 py-3">
              <div>
                <p className="font-semibold">{order.client}</p>
                <p className="text-black/50">{order.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{order.status}</Badge>
                <p className="text-black/60">{order.total}</p>
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
