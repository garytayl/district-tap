import { LocationCard } from "@/components/site/LocationCard"
import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { allergenNotice, locations, menuLinks } from "@/lib/site-data"

export default function LunchDinnerPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Lunch + Dinner"
        title="The District Tap food lineup."
        description="Browse our in-page Northside menu plus downloadable PDFs for other menus."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {menuLinks.map((link) => (
          <Card key={link.href}>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">Menu</p>
              <h2 className="text-xl font-semibold">{link.label}</h2>
              <a href={link.href} className="text-sm font-semibold text-black/60 hover:text-black">
                View Menu →
              </a>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <p className="text-sm text-black/60">{allergenNotice}</p>
        <a href="/food-safety" className="mt-3 inline-flex text-sm font-semibold text-black/60 hover:text-black">
          Read food safety policy →
        </a>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.values(locations).map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </main>
  )
}
