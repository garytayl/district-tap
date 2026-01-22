import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { cateringHighlights } from "@/lib/site-data"

export default function CateringPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Catering"
        title="Catering built for the whole crew."
        description="On-site and off-site catering with menu options for every group size."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="https://order.online/" variant="secondary">
            Place Catering Order
          </Button>
          <Button href="mailto:events@thedistricttap.com" variant="outline">
            Contact Catering
          </Button>
        </div>
      </PageHeader>

      <Card>
        <h2 className="text-xl font-semibold">Catering essentials</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
          {cateringHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Menu highlights</h2>
        <p className="mt-2 text-sm text-black/60">
          Appetizer spreads, wraps, sliders, and trays built for sharing. Ask about full-service catering packages.
        </p>
      </Card>
    </main>
  )
}
