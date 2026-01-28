"use client"

import { useEffect, useMemo, useState } from "react"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

type MenuRow = {
  id: string
  title: string
  slug: string
  menu_type: string
  location: string | null
  subtitle: string | null
  categories: unknown
  allergen_notice: string | null
  is_published: boolean
}

type MenuItem = {
  name: string
  price?: string
  details?: string
  tags?: string[]
  notes?: string
}

type MenuCategory = {
  title: string
  description?: string
  items: MenuItem[]
}

const emptyCategories: MenuCategory[] = [
  {
    title: "Category title",
    description: "",
    items: [{ name: "Item name", price: "", details: "", tags: [], notes: "" }],
  },
]

const menuTypeOptions = ["Lunch + Dinner", "Brunch", "Event", "Drinks"]

const normalizeCategories = (value: unknown): MenuCategory[] => {
  if (!Array.isArray(value)) return emptyCategories

  const categories = value.map((category) => {
    const items = Array.isArray(category?.items)
      ? category.items.map((item: MenuItem) => ({
          name: typeof item?.name === "string" ? item.name : "Item name",
          price: typeof item?.price === "string" ? item.price : "",
          details: typeof item?.details === "string" ? item.details : "",
          tags: Array.isArray(item?.tags) ? item.tags.filter((tag) => typeof tag === "string") : [],
          notes: typeof item?.notes === "string" ? item.notes : "",
        }))
      : []

    return {
      title: typeof category?.title === "string" ? category.title : "Category title",
      description: typeof category?.description === "string" ? category.description : "",
      items,
    }
  })

  return categories.length > 0 ? categories : emptyCategories
}

export function AdminMenusClient() {
  const [menus, setMenus] = useState<MenuRow[]>([])
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null)
  const [formState, setFormState] = useState({
    title: "",
    slug: "",
    menuType: "Lunch + Dinner",
    location: "",
    subtitle: "",
    allergenNotice: "",
    isPublished: true,
  })
  const [categories, setCategories] = useState<MenuCategory[]>(emptyCategories)
  const [status, setStatus] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const selectedMenu = useMemo(
    () => menus.find((menu) => menu.id === selectedMenuId) ?? null,
    [menus, selectedMenuId],
  )

  const resetForm = () => {
    setSelectedMenuId(null)
    setFormState({
      title: "",
      slug: "",
      menuType: "Lunch + Dinner",
      location: "",
      subtitle: "",
      allergenNotice: "",
      isPublished: true,
    })
    setCategories(emptyCategories)
  }

  const loadMenus = async () => {
    setIsLoading(true)
    setStatus(null)
    try {
      const response = await fetch("/api/admin/menus")
      const payload = await response.json()
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to load menus.")
      }
      setMenus(payload.menus ?? [])
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to load menus."
      setStatus(message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadMenus()
  }, [])

  useEffect(() => {
    if (!selectedMenu) return
    setFormState({
      title: selectedMenu.title,
      slug: selectedMenu.slug,
      menuType: selectedMenu.menu_type,
      location: selectedMenu.location ?? "",
      subtitle: selectedMenu.subtitle ?? "",
      allergenNotice: selectedMenu.allergen_notice ?? "",
      isPublished: selectedMenu.is_published,
    })
    setCategories(normalizeCategories(selectedMenu.categories))
  }, [selectedMenu])

  const updateField = (field: keyof typeof formState, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const updateCategoryField = (
    index: number,
    field: "title" | "description",
    value: string,
  ) => {
    setCategories((prev) =>
      prev.map((category, categoryIndex) =>
        categoryIndex === index ? { ...category, [field]: value } : category,
      ),
    )
  }

  const updateItemField = (
    categoryIndex: number,
    itemIndex: number,
    field: keyof MenuItem,
    value: string | string[],
  ) => {
    setCategories((prev) =>
      prev.map((category, currentCategoryIndex) => {
        if (currentCategoryIndex !== categoryIndex) return category
        return {
          ...category,
          items: category.items.map((item, currentItemIndex) =>
            currentItemIndex === itemIndex ? { ...item, [field]: value } : item,
          ),
        }
      }),
    )
  }

  const addCategory = () => {
    setCategories((prev) => [
      ...prev,
      { title: "New category", description: "", items: [] },
    ])
  }

  const removeCategory = (index: number) => {
    setCategories((prev) => prev.filter((_, categoryIndex) => categoryIndex !== index))
  }

  const addItem = (categoryIndex: number) => {
    setCategories((prev) =>
      prev.map((category, currentCategoryIndex) => {
        if (currentCategoryIndex !== categoryIndex) return category
        return {
          ...category,
          items: [
            ...category.items,
            { name: "New item", price: "", details: "", tags: [], notes: "" },
          ],
        }
      }),
    )
  }

  const removeItem = (categoryIndex: number, itemIndex: number) => {
    setCategories((prev) =>
      prev.map((category, currentCategoryIndex) => {
        if (currentCategoryIndex !== categoryIndex) return category
        return {
          ...category,
          items: category.items.filter((_, currentItemIndex) => currentItemIndex !== itemIndex),
        }
      }),
    )
  }

  const handleSave = async () => {
    setStatus(null)
    const payload = {
      title: formState.title.trim(),
      slug: formState.slug.trim() || undefined,
      menuType: formState.menuType,
      location: formState.location.trim() || null,
      subtitle: formState.subtitle.trim() || null,
      allergenNotice: formState.allergenNotice.trim() || null,
      isPublished: formState.isPublished,
      categories,
    }

    try {
      const response = await fetch(`/api/admin/menus/${selectedMenuId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to update menu.")
      }
      setStatus("Menu updated.")
      await loadMenus()
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update menu."
      setStatus(message)
    }
  }

  const handleCreate = async () => {
    setStatus(null)
    const payload = {
      title: formState.title.trim(),
      slug: formState.slug.trim() || undefined,
      menuType: formState.menuType,
      location: formState.location.trim() || null,
      subtitle: formState.subtitle.trim() || null,
      allergenNotice: formState.allergenNotice.trim() || null,
      isPublished: formState.isPublished,
      categories,
    }

    try {
      const response = await fetch("/api/admin/menus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to create menu.")
      }
      setStatus("Menu created.")
      resetForm()
      await loadMenus()
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create menu."
      setStatus(message)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Menus</Badge>
        <h1 className="text-3xl font-semibold">Menu management</h1>
        <p className="text-sm text-black/60">
          Edit menus stored in Supabase and keep PDFs in sync.
        </p>
      </div>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">Menus</h2>
            <p className="text-sm text-black/60">Select a menu to edit or create a new one.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={loadMenus} disabled={isLoading}>
              Refresh
            </Button>
            <Button variant="secondary" size="sm" onClick={resetForm}>
              New Menu
            </Button>
          </div>
        </div>

        {menus.length === 0 ? (
          <p className="text-sm text-black/60">No menus found yet.</p>
        ) : (
          <div className="grid gap-3 text-sm">
            {menus.map((menu) => (
              <button
                key={menu.id}
                type="button"
                onClick={() => setSelectedMenuId(menu.id)}
                className={`flex flex-wrap items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-left transition ${
                  menu.id === selectedMenuId ? "border-black text-black" : "border-black/10 text-black/70"
                }`}
              >
                <div>
                  <p className="font-semibold">{menu.title}</p>
                  <p className="text-black/50">{menu.menu_type}</p>
                </div>
                <Badge>{menu.is_published ? "Published" : "Draft"}</Badge>
              </button>
            ))}
          </div>
        )}
      </Card>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">{selectedMenuId ? "Edit menu" : "Create menu"}</h2>
            <p className="text-sm text-black/60">
              Edit categories and items like a spreadsheet. This powers both web + mobile views.
            </p>
          </div>
          <Badge>{selectedMenuId ? "Editing" : "New"}</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-black/70">Title</span>
            <input
              className="w-full rounded-xl border border-black/10 px-3 py-2"
              value={formState.title}
              onChange={(event) => updateField("title", event.target.value)}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-black/70">Slug</span>
            <input
              className="w-full rounded-xl border border-black/10 px-3 py-2"
              value={formState.slug}
              onChange={(event) => updateField("slug", event.target.value)}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-black/70">Menu type</span>
            <select
              className="w-full rounded-xl border border-black/10 px-3 py-2"
              value={formState.menuType}
              onChange={(event) => updateField("menuType", event.target.value)}
            >
              {menuTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-black/70">Location</span>
            <input
              className="w-full rounded-xl border border-black/10 px-3 py-2"
              value={formState.location}
              onChange={(event) => updateField("location", event.target.value)}
              placeholder="northside or downtown"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm">
          <span className="font-semibold text-black/70">Subtitle</span>
          <input
            className="w-full rounded-xl border border-black/10 px-3 py-2"
            value={formState.subtitle}
            onChange={(event) => updateField("subtitle", event.target.value)}
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="font-semibold text-black/70">Allergen notice</span>
          <textarea
            className="min-h-[80px] w-full rounded-xl border border-black/10 px-3 py-2"
            value={formState.allergenNotice}
            onChange={(event) => updateField("allergenNotice", event.target.value)}
          />
        </label>

        <Card className="space-y-4 border border-black/10 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Categories + items</h3>
              <p className="text-sm text-black/60">
                Adjust, rename, add, or remove categories and items inline.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={addCategory}>
              Add category
            </Button>
          </div>

          <div className="space-y-5">
            {categories.map((category, categoryIndex) => (
              <div key={`${category.title}-${categoryIndex}`} className="rounded-2xl border border-black/10 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="grid gap-3 md:grid-cols-[minmax(240px,1fr)_minmax(240px,1fr)]">
                    <label className="space-y-2 text-sm">
                      <span className="font-semibold text-black/70">Category title</span>
                      <input
                        className="w-full rounded-xl border border-black/10 px-3 py-2"
                        value={category.title}
                        onChange={(event) =>
                          updateCategoryField(categoryIndex, "title", event.target.value)
                        }
                      />
                    </label>
                    <label className="space-y-2 text-sm">
                      <span className="font-semibold text-black/70">Category description</span>
                      <input
                        className="w-full rounded-xl border border-black/10 px-3 py-2"
                        value={category.description ?? ""}
                        onChange={(event) =>
                          updateCategoryField(categoryIndex, "description", event.target.value)
                        }
                      />
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" onClick={() => addItem(categoryIndex)}>
                      Add item
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => removeCategory(categoryIndex)}>
                      Remove category
                    </Button>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 text-sm">
                  <div className="hidden grid-cols-[minmax(160px,1.2fr)_minmax(90px,0.4fr)_minmax(200px,1.4fr)_minmax(160px,1fr)_minmax(160px,1fr)_auto] gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/40 md:grid">
                    <span>Item</span>
                    <span>Price</span>
                    <span>Description</span>
                    <span>Tags</span>
                    <span>Notes</span>
                    <span />
                  </div>

                  {category.items.length === 0 ? (
                    <p className="text-sm text-black/50">No items yet. Add one to start.</p>
                  ) : null}

                  {category.items.map((item, itemIndex) => (
                    <div
                      key={`${item.name}-${itemIndex}`}
                      className="grid gap-3 rounded-2xl border border-black/10 p-3 md:grid-cols-[minmax(160px,1.2fr)_minmax(90px,0.4fr)_minmax(200px,1.4fr)_minmax(160px,1fr)_minmax(160px,1fr)_auto]"
                    >
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-black/50 md:hidden">Item</span>
                        <input
                          className="w-full rounded-lg border border-black/10 px-3 py-2"
                          value={item.name}
                          onChange={(event) =>
                            updateItemField(categoryIndex, itemIndex, "name", event.target.value)
                          }
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-black/50 md:hidden">Price</span>
                        <input
                          className="w-full rounded-lg border border-black/10 px-3 py-2"
                          value={item.price ?? ""}
                          onChange={(event) =>
                            updateItemField(categoryIndex, itemIndex, "price", event.target.value)
                          }
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-black/50 md:hidden">Description</span>
                        <input
                          className="w-full rounded-lg border border-black/10 px-3 py-2"
                          value={item.details ?? ""}
                          onChange={(event) =>
                            updateItemField(categoryIndex, itemIndex, "details", event.target.value)
                          }
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-black/50 md:hidden">Tags</span>
                        <input
                          className="w-full rounded-lg border border-black/10 px-3 py-2"
                          value={(item.tags ?? []).join(", ")}
                          onChange={(event) =>
                            updateItemField(
                              categoryIndex,
                              itemIndex,
                              "tags",
                              event.target.value
                                .split(",")
                                .map((tag) => tag.trim())
                                .filter(Boolean),
                            )
                          }
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-black/50 md:hidden">Notes</span>
                        <input
                          className="w-full rounded-lg border border-black/10 px-3 py-2"
                          value={item.notes ?? ""}
                          onChange={(event) =>
                            updateItemField(categoryIndex, itemIndex, "notes", event.target.value)
                          }
                        />
                      </label>
                      <div className="flex items-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(categoryIndex, itemIndex)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={formState.isPublished}
            onChange={(event) => updateField("isPublished", event.target.checked)}
          />
          <span className="font-semibold text-black/70">Published</span>
        </label>

        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" onClick={selectedMenuId ? handleSave : handleCreate}>
            {selectedMenuId ? "Save changes" : "Create menu"}
          </Button>
          {selectedMenuId ? (
            <Button variant="outline" size="sm" onClick={resetForm}>
              Cancel
            </Button>
          ) : null}
        </div>

        {status ? <p className="text-sm text-black/60">{status}</p> : null}
      </Card>
    </div>
  )
}
