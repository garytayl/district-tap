import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { getSupabaseServerClient } from "@/lib/supabase"

type MenuUpdatePayload = {
  title?: string
  slug?: string
  menuType?: string
  location?: string | null
  subtitle?: string | null
  categories?: unknown
  allergenNotice?: string | null
  isPublished?: boolean
}

const menuTypeOptions = new Set(["Lunch + Dinner", "Brunch", "Event", "Drinks"])

function validateUpdatePayload(payload: MenuUpdatePayload) {
  if (payload.menuType && !menuTypeOptions.has(payload.menuType)) {
    return "Menu type is invalid."
  }
  if (payload.categories && !Array.isArray(payload.categories)) {
    return "Categories must be an array."
  }
  return null
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const supabase = getSupabaseServerClient()
  const body = (await request.json()) as MenuUpdatePayload

  const validationError = validateUpdatePayload(body)
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 })
  }

  const update = {
    ...(body.title !== undefined ? { title: body.title } : {}),
    ...(body.slug !== undefined ? { slug: body.slug } : {}),
    ...(body.menuType !== undefined ? { menu_type: body.menuType } : {}),
    ...(body.location !== undefined ? { location: body.location } : {}),
    ...(body.subtitle !== undefined ? { subtitle: body.subtitle } : {}),
    ...(body.categories !== undefined ? { categories: body.categories } : {}),
    ...(body.allergenNotice !== undefined ? { allergen_notice: body.allergenNotice } : {}),
    ...(body.isPublished !== undefined ? { is_published: body.isPublished } : {}),
  }

  const { data, error } = await supabase
    .from("menus")
    .update(update)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ menu: data })
}
