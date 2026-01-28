import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { untappdUrl } from "@/lib/site-data"

export default function DowntownDrinksPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Downtown Libations"
        title="Downtown drink menu"
        description="Our live drink list is hosted on Untappd for real-time availability."
      />

      <Card>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Live drink list</h2>
          <p className="text-sm text-white/70">
            View the current tap list, cocktails, and pours on Untappd.
          </p>
        </div>
        <Button href={untappdUrl} variant="secondary" size="sm" className="mt-4">
          View on Untappd
        </Button>
      </Card>
    </main>
  )
}
