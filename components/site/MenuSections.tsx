import { Card } from "@/components/ui/Card"
import type { SanityMenu } from "@/lib/sanity"

type MenuSectionsProps = {
  menu: SanityMenu
}

export function MenuSections({ menu }: MenuSectionsProps) {
  return (
    <div className="grid gap-6">
      {menu.categories.map((category) => (
        <Card key={category.title} className="gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{category.title}</h2>
            {category.description ? <p className="text-sm text-white/70">{category.description}</p> : null}
          </div>
          <ul className="space-y-3 text-sm">
            {category.items.map((item) => (
              <li key={item.name} className="space-y-1">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">{item.name}</span>
                  {item.price ? <span className="text-white/60">{item.price}</span> : null}
                </div>
                {item.details ? <p className="text-white/70">{item.details}</p> : null}
                {item.tags?.length ? (
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{item.tags.join(" • ")}</p>
                ) : null}
                {item.notes ? <p className="text-xs text-white/50">{item.notes}</p> : null}
              </li>
            ))}
          </ul>
        </Card>
      ))}
      {menu.allergenNotice ? (
        <Card>
          <p className="text-sm text-white/70">{menu.allergenNotice}</p>
          <a href="/food-safety" className="mt-3 inline-flex text-sm font-semibold text-white/70 hover:text-white">
            Food safety details →
          </a>
        </Card>
      ) : null}
    </div>
  )
}
