"use client"

import { useEffect, useId, useState } from "react"

import { Button } from "@/components/ui/Button"

export function MobileExperiencePrompt() {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-black/50">Mobile flow</p>
        <p className="text-sm text-black/70">
          Try the new mobile-first experience with map-based location selection and quick ordering options.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" type="button" onClick={() => setOpen(true)}>
          Open mobile experience
        </Button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-10">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-neutral-950 p-6 text-white shadow-xl"
          >
            <div className="space-y-3">
              <p id={titleId} className="text-lg font-semibold">
                Mobile-first ordering flow
              </p>
              <p id={descriptionId} className="text-sm text-white/70">
                Choose a location, browse menus, dine in, or head straight to delivery. Built for quick taps.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href="/experience" variant="secondary" size="sm">
                Start the mobile flow
              </Button>
              <Button variant="outline" size="sm" className="border-white/30 text-white" type="button" onClick={() => setOpen(false)}>
                Not now
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
