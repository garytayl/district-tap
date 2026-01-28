"use client"

import { useEffect, useMemo, useState } from "react"

import { Card } from "@/components/ui/Card"
import type { SanityMenu } from "@/lib/sanity"

type MenuSectionsProps = {
  menu: SanityMenu
}

export function MenuSections({ menu }: MenuSectionsProps) {
  const [activeTitle, setActiveTitle] = useState(menu.categories[0]?.title ?? "")

  useEffect(() => {
    setActiveTitle(menu.categories[0]?.title ?? "")
  }, [menu.categories])

  const activeCategory = useMemo(() => {
    return menu.categories.find((category) => category.title === activeTitle) ?? menu.categories[0] ?? null
  }, [activeTitle, menu.categories])

  if (!activeCategory) {
    return null
  }

  return (
    <div className="grid gap-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Categories</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {menu.categories.map((category) => {
            const isActive = category.title === activeTitle
            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveTitle(category.title)}
                className={`glass-tile px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive ? "border-amber-400/60 bg-amber-400/10 text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {category.title}
              </button>
            )
          })}
        </div>
      </div>

      <Card className="gap-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{activeCategory.title}</h2>
          {activeCategory.description ? <p className="text-sm text-white/70">{activeCategory.description}</p> : null}
        </div>
        <ul className="space-y-3 text-sm">
          {activeCategory.items.map((item) => (
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
