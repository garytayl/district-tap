"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { MobileMenuOverlay } from "@/components/site/MobileMenuOverlay"
import { navLinks, quickActions } from "@/lib/site-data"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="relative flex min-w-0 items-center gap-3">
              <span
                data-site-intro-target="logo"
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-9 w-9 -translate-y-1/2"
              />
              <div className="relative h-9 w-24 sm:h-10 sm:w-32">
                <Image src="/logo_primary.png" alt="The District Tap" fill className="object-contain brightness-0 invert" priority />
              </div>
              <div className="hidden md:block leading-tight">
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
                href={quickActions[0].href}
                variant="primary"
                size="sm"
              >
                Order
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-amber-300/50 bg-black/60 text-amber-100 shadow-[0_0_18px_rgba(251,191,36,0.25)] hover:border-amber-200/80 hover:bg-black/70"
                onClick={() => setMobileMenuOpen(true)}
              >
                Menu
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
        </div>
      </header>
      <MobileMenuOverlay open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
