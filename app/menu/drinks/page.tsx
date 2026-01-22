import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { cocktails } from "@/lib/site-data"

const drinkPages = [
  {
    title: "Northside Libations",
    description: "Beer, wine, cocktails, bourbon, and whiskey menu for Northside.",
    href: "/menu/drinks/northside",
  },
  {
    title: "Downtown Libations",
    description: "Downtown taps, cocktails, and full whiskey list.",
    href: "/menu/drinks/downtown",
  },
  {
    title: "Bourbon + Whiskey Prices",
    description: "Updated bottle and pour pricing across both locations.",
    href: "/menu/drinks/bourbon-whiskey",
  },
]

export default function DrinksPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Drinks"
        title="Craft beer, cocktails, wine, and whiskey."
        description="Explore the libations list by location or jump straight to bourbon and whiskey pricing."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {drinkPages.map((page) => (
          <Card key={page.title}>
            <h2 className="text-xl font-semibold">{page.title}</h2>
            <p className="mt-2 text-sm text-black/60">{page.description}</p>
            <Button href={page.href} variant="outline" size="sm" className="mt-4">
              View Menu
            </Button>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <h3 className="text-xl font-semibold">Cocktail highlights</h3>
        <div className="grid gap-3 md:grid-cols-2">
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
    </main>
  )
}
