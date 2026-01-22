import { PageHeader } from "@/components/site/PageHeader"
import { Card } from "@/components/ui/Card"
import { allergenNotice, eventMenu } from "@/lib/site-data"

export default function EventMenuPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        eyebrow="Downtown Event Menu"
        title="Large format menus for groups"
        description="Trays, shareables, and slider packs designed for private events and celebrations."
      />

      <div className="grid gap-6">
        {eventMenu.map((category) => (
          <Card key={category.title}>
            <h2 className="text-xl font-semibold">{category.title}</h2>
            {category.description ? <p className="text-sm text-black/60">{category.description}</p> : null}
            <ul className="mt-4 space-y-3 text-sm">
              {category.items.map((item) => (
                <li key={item.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.name}</span>
                    {item.price ? <span className="text-black/50">{item.price}</span> : null}
                  </div>
                  {item.details ? <p className="text-black/60">{item.details}</p> : null}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-black/50">
              Additional charges for room rental or service may apply.
            </p>
          </Card>
        ))}
      </div>

      <Card>
        <p className="text-sm text-black/60">{allergenNotice}</p>
        <a href="/food-safety" className="mt-3 inline-flex text-sm font-semibold text-black/60 hover:text-black">
          Food safety details →
        </a>
      </Card>
    </main>
  )
}
