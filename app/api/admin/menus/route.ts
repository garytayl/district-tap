import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { getSupabaseServerClient } from "@/lib/supabase"

type MenuPayload = {
  title: string
  slug: string
  menuType: string
  location?: string | null
  subtitle?: string | null
  categories: unknown
  allergenNotice?: string | null
  isPublished?: boolean
}

const menuTypeOptions = new Set(["Lunch + Dinner", "Brunch", "Event", "Drinks"])

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function validateMenuPayload(payload: MenuPayload) {
  if (!payload.title) {
    return "Title is required."
  }
  if (!payload.slug) {
    return "Slug is required."
  }
  if (!payload.menuType || !menuTypeOptions.has(payload.menuType)) {
    return "Menu type is invalid."
  }
  if (!Array.isArray(payload.categories)) {
    return "Categories must be an array."
  }
  return null
}

export async function GET() {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from("menus")
    .select("id, title, slug, menu_type, location, subtitle, categories, allergen_notice, is_published")
    .order("menu_type", { ascending: true })
    .order("title", { ascending: true })

  if (error) {
    return NextResponse.json({ menus: [], error: error.message }, { status: 500 })
  }

  return NextResponse.json({ menus: data ?? [] })
}

export async function POST(request: NextRequest) {
  const supabase = getSupabaseServerClient()
  const body = (await request.json()) as Partial<MenuPayload>

  const payload: MenuPayload = {
    title: body.title?.trim() ?? "",
    slug: body.slug?.trim() ?? slugify(body.title ?? ""),
    menuType: body.menuType?.trim() ?? "",
    location: body.location ?? null,
    subtitle: body.subtitle ?? null,
    categories: body.categories ?? [],
    allergenNotice: body.allergenNotice ?? null,
    isPublished: body.isPublished ?? true,
  }

  const validationError = validateMenuPayload(payload)
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 })
  }

  const { data, error } = await supabase
    .from("menus")
    .insert({
      title: payload.title,
      slug: payload.slug,
      menu_type: payload.menuType,
      location: payload.location,
      subtitle: payload.subtitle,
      categories: payload.categories,
      allergen_notice: payload.allergenNotice,
      is_published: payload.isPublished,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ menu: data })
}
