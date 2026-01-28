import { NextResponse } from "next/server"

import { fetchMenuBySlug } from "@/lib/sanity"

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const menu = await fetchMenuBySlug(params.slug)
    return NextResponse.json({ menu })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ menu: null, error: message }, { status: 500 })
  }
}
