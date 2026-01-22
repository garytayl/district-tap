import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { cocktails, wineHighlights, whiskeyHighlights } from "@/lib/site-data"

const beers = [
  "Rotating local taps",
  "Seasonal IPA list",
  "Amber + lager offerings",
  "Untappd menu for live availability",
]

export default function NorthsideDrinksPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Northside Libations"
        title="Northside drink menu"
        description="Beer, wine, cocktails, and bourbon selections curated for Northside."
      />

      <Card>
        <h2 className="text-xl font-semibold">Beer</h2>
        <ul className="mt-3 space-y-2 text-sm text-black/60">
          {beers.map((beer) => (
            <li key={beer}>{beer}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-black/40">
          View live tap list on Untappd for current availability.
        </p>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Signature cocktails</h2>
        <div className="mt-4 grid gap-3">
          {cocktails.map((cocktail) => (
            <div key={cocktail.name} className="text-sm">
              <div className="flex items-center justify-between font-semibold">
                <span>{cocktail.name}</span>
                <span className="text-black/50">{cocktail.price}</span>
              </div>
              <p className="text-black/60">{cocktail.details}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Wine highlights</h2>
        <div className="mt-4 grid gap-2 text-sm">
          {wineHighlights.map((wine) => (
            <div key={wine.name} className="flex items-center justify-between">
              <span className="font-semibold">{wine.name}</span>
              <span className="text-black/50">{wine.price}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">Bourbon + whiskey</h2>
        <div className="mt-4 grid gap-4 text-sm">
          {whiskeyHighlights.map((group) => (
            <div key={group.name}>
              <p className="font-semibold">{group.name}</p>
              <p className="text-black/60">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </Card>
    </main>
  )
}
