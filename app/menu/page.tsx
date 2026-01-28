import { PageHeader } from "@/components/site/PageHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const menuCards = [
  {
    title: "Lunch + Dinner",
    description: "Signature wings, burgers, tacos, and chef-driven entrees.",
    href: "/menu/lunch-and-dinner",
  },
  {
    title: "Drinks",
    description: "Live drink list hosted on Untappd.",
    href: "/menu/drinks",
  },
]

export default function MenuPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <PageHeader
        eyebrow="Menu"
        title="Every menu, every location."
        description="Browse lunch + dinner, brunch, event menus, and our live Untappd drink list."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {menuCards.map((card) => (
          <Card key={card.title} className="flex flex-col gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="text-sm text-black/60">{card.description}</p>
            </div>
            <Button href={card.href} variant="secondary">
              Explore {card.title}
            </Button>
          </Card>
        ))}
      </div>
    </main>
  )
}
