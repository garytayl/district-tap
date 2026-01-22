import { defineField, defineType } from "sanity"

export const menu = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
    }),
    defineField({
      name: "menuType",
      title: "Menu Type",
      type: "string",
      options: {
        list: ["Lunch + Dinner", "Brunch", "Event", "Drinks"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "menuCategory" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "allergenNotice",
      title: "Allergen Notice",
      type: "text",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Draft", "Published", "Seasonal"],
      },
      initialValue: "Draft",
    }),
  ],
})
