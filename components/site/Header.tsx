"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { navLinks, quickActions } from "@/lib/site-data"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-32">
              <Image src="/logo_primary.png" alt="The District Tap" fill className="object-contain brightness-0 invert" priority />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-semibold">The District Tap</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Indianapolis</p>
            </div>
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            {quickActions.map((action) => (
              <Button key={action.label} href={action.href} variant="outline" size="sm" className="border-white/30 text-white hover:border-white/80 hover:bg-white/10">
                {action.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:border-white/80 hover:bg-white/10"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </Button>
          </div>
        </div>
        <nav className="hidden flex-wrap items-center gap-3 text-sm font-medium text-white/70 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <Link href={link.href} className="rounded-full px-3 py-2 hover:bg-white/10">
                {link.label}
              </Link>
              {link.children ? (
                <div className="absolute left-0 top-full hidden min-w-[200px] flex-col gap-1 rounded-2xl border border-white/10 bg-neutral-950 p-2 shadow-lg group-hover:flex">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <Badge variant="light">Book an Event</Badge>
            <Button href={quickActions[1].href} variant="secondary" size="sm">
              Start Request
            </Button>
          </div>
        </nav>
        <div className="lg:hidden">
          {isMenuOpen ? (
            <div className="mt-3 space-y-4 rounded-2xl border border-white/10 bg-neutral-950/80 p-4">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:border-white/80 hover:bg-white/10"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
              <div className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <div key={link.label} className="space-y-1">
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2 text-white/90"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-white/40">Explore</span>
                    </Link>
                    {link.children ? (
                      <div className="grid gap-2 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/70"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 px-3 py-2">
                <Badge variant="light">Book an Event</Badge>
                <Button href={quickActions[1].href} variant="secondary" size="sm">
                  Start Request
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
