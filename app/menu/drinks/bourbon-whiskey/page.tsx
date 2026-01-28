import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { untappdUrl } from "@/lib/site-data"

export default function BourbonWhiskeyPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Bourbon + Whiskey"
        title="Pour pricing by location"
        description="For the most current bourbon and whiskey list, view Untappd."
      />

      <Card>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Live drink list</h2>
          <p className="text-sm text-white/70">
            Untappd hosts the most current bourbon and whiskey availability.
          </p>
        </div>
        <Button href={untappdUrl} variant="secondary" size="sm" className="mt-4">
          View on Untappd
        </Button>
      </Card>
    </main>
  )
}
