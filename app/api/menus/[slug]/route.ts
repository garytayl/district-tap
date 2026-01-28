import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { fetchMenuBySlug } from "@/lib/sanity"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params
    const menu = await fetchMenuBySlug(slug)
    return NextResponse.json({ menu })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ menu: null, error: message }, { status: 500 })
  }
}
