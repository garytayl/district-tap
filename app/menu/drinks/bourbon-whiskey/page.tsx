import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"

const pricing = [
  {
    title: "Northside Prices",
    description: "Updated April 2024",
    groups: [
      { name: "Indiana Local", price: "$10-$18" },
      { name: "Kentucky Bourbon", price: "$9-$22" },
      { name: "American Whiskey", price: "$10-$24" },
      { name: "Canadian Whisky", price: "$9-$16" },
      { name: "Irish Whiskey", price: "$10-$18" },
      { name: "Scotch", price: "$12-$30" },
    ],
  },
  {
    title: "Downtown Prices",
    description: "Updated April 2024",
    groups: [
      { name: "Indiana Local", price: "$10-$18" },
      { name: "Kentucky Bourbon", price: "$9-$24" },
      { name: "American Whiskey", price: "$10-$26" },
      { name: "Canadian Whisky", price: "$9-$16" },
      { name: "Irish Whiskey", price: "$10-$20" },
      { name: "Scotch", price: "$12-$32" },
    ],
  },
]

const allocations = [
  "Blanton's Gold The District Tap Barrel Pick",
  "Eagle Rare Barrel Pick",
  "George T. Stagg 2025",
  "Weller 12",
  "Little Book",
]

export default function BourbonWhiskeyPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Bourbon + Whiskey"
        title="Pour pricing by location"
        description="Ask your server about current allocations and seasonal releases."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {pricing.map((section) => (
          <Card key={section.title}>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">{section.description}</p>
            <div className="mt-4 space-y-2 text-sm">
              {section.groups.map((group) => (
                <div key={group.name} className="flex items-center justify-between">
                  <span className="font-semibold">{group.name}</span>
                  <span className="text-black/50">{group.price}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="text-xl font-semibold">Current allocations</h2>
        <p className="text-sm text-black/60">
          Limited pours with premium pricing. Ask the bar team for availability.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
          {allocations.map((allocation) => (
            <li key={allocation}>{allocation}</li>
          ))}
        </ul>
      </Card>
    </main>
  )
}
