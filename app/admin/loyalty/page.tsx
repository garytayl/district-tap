import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const loyaltyStats = [
  { label: "Members", value: "4,210" },
  { label: "Points Issued", value: "98,340" },
  { label: "Rewards Redeemed", value: "1,320" },
]

export default function AdminLoyaltyPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Loyalty</Badge>
        <h1 className="text-3xl font-semibold">Loyalty program</h1>
        <p className="text-sm text-black/60">Monitor program activity and update offers.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {loyaltyStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="text-xl font-semibold">Active offers</h2>
        <p className="mt-2 text-sm text-black/60">Keep loyalty rewards aligned with promotions.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Happy Hour Double Points</Badge>
          <Badge>Birthday $10 Bonus</Badge>
          <Badge>100 Point Signup</Badge>
        </div>
        <div className="mt-4">
          <Button variant="secondary" size="sm">
            Update Offers
          </Button>
        </div>
      </Card>
    </div>
  )
}
