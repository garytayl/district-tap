import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { untappdUrl } from "@/lib/site-data"

export default function DrinksPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Drinks"
        title="Craft beer, cocktails, wine, and whiskey."
        description="For the latest drafts, cocktails, and pours, jump to our live Untappd menu."
      />

      <Card className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Live drink list</h2>
          <p className="text-sm text-white/70">
            We keep the full drinks menu on Untappd so the list stays current with every tap and pour.
          </p>
        </div>
        <Button href={untappdUrl} variant="secondary" size="sm">
          View on Untappd
        </Button>
      </Card>
    </main>
  )
}
