"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import { Card } from "@/components/ui/Card"
import type { SanityMenu } from "@/lib/sanity"

type MenuSectionsProps = {
  menu: SanityMenu
}

export function MenuSections({ menu }: MenuSectionsProps) {
  const [activeTitle, setActiveTitle] = useState("")
  const menuTopRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setActiveTitle("")
  }, [menu.categories])

  useEffect(() => {
    if (!activeTitle) return
    menuTopRef.current?.scrollIntoView({ block: "start", behavior: "auto" })
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [activeTitle])

  const activeCategory = useMemo(() => {
    if (!activeTitle) return null
    return menu.categories.find((category) => category.title === activeTitle) ?? null
  }, [activeTitle, menu.categories])

  return (
    <div className="grid gap-6" ref={menuTopRef}>
      {!activeCategory ? (
        <div className="space-y-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Categories</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {menu.categories.map((category) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveTitle(category.title)}
                className="glass-tile rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-base font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                <span className="block">{category.title}</span>
                {category.description ? (
                  <span className="mt-1 block text-sm font-normal text-white/50">
                    {category.description}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <Card
          key={activeCategory.title}
          className="gap-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{activeCategory.title}</h2>
              {activeCategory.description ? (
                <p className="text-sm text-white/70">{activeCategory.description}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => setActiveTitle("")}
              className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60 transition hover:border-white/40 hover:text-white"
            >
              Back
            </button>
          </div>
          <ul className="grid gap-4 text-sm">
            {activeCategory.items.map((item) => (
              <li key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="block text-base font-semibold text-white">{item.name}</span>
                    {item.details ? (
                      <p className="text-sm leading-relaxed text-white/70">{item.details}</p>
                    ) : null}
                  </div>
                  {item.price ? (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 tabular-nums">
                      {item.price}
                    </span>
                  ) : null}
                </div>
                {item.tags?.length ? (
                  <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/40">
                    {item.tags.join(" • ")}
                  </p>
                ) : null}
                {item.notes ? <p className="mt-2 text-xs text-white/55">{item.notes}</p> : null}
              </li>
            ))}
          </ul>
        </Card>
      )}

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
