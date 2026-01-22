import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Settings</Badge>
        <h1 className="text-3xl font-semibold">Admin settings</h1>
        <p className="text-sm text-black/60">Update global site preferences and integrations.</p>
      </div>

      <Card>
        <h2 className="text-xl font-semibold">Brand settings</h2>
        <div className="mt-4 grid gap-4 text-sm">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-black/40">Primary CTA</label>
            <input className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-2" defaultValue="Order Catering" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-black/40">Hero headline</label>
            <textarea
              className="mt-2 min-h-[120px] w-full rounded-2xl border border-black/10 px-4 py-2"
              defaultValue="Craft beer, cocktails, and damn good food at The District Tap."
            />
          </div>
          <Button variant="secondary" size="sm">
            Save settings
          </Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Integrations</h2>
        <p className="mt-2 text-sm text-black/60">Connect ordering, gift cards, and event booking platforms.</p>
        <div className="mt-4 grid gap-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3">
            <span>Ordering Platform</span>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3">
            <span>Perfect Venue</span>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-black/10 px-4 py-3">
            <span>Gift Cards</span>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
