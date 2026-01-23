import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { navLinks, quickActions } from "@/lib/site-data"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-32">
              <Image src="/logo_primary.png" alt="The District Tap" fill className="object-contain" priority />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-semibold">The District Tap</p>
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">Indianapolis</p>
            </div>
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            {quickActions.map((action) => (
              <Button key={action.label} href={action.href} variant="outline" size="sm">
                {action.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <Badge>Locations</Badge>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-black/70">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <Link href={link.href} className="rounded-full px-3 py-2 hover:bg-black/5">
                {link.label}
              </Link>
              {link.children ? (
                <div className="absolute left-0 top-full hidden min-w-[200px] flex-col gap-1 rounded-2xl border border-black/10 bg-white p-2 shadow-lg group-hover:flex">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-xl px-3 py-2 text-sm text-black/70 hover:bg-black/5 hover:text-black"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <Badge>Book an Event</Badge>
            <Button href={quickActions[1].href} variant="secondary" size="sm">
              Start Request
            </Button>
          </div>
        </nav>
        <div className="flex flex-wrap gap-2 lg:hidden">
          {quickActions.map((action) => (
            <Button key={action.label} href={action.href} variant="outline" size="sm">
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}
