import { defineField, defineType } from "sanity"

export const privateEventSpace = defineType({
  name: "privateEventSpace",
  title: "Private Event Space",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
    }),
    defineField({ name: "size", title: "Size", type: "string" }),
    defineField({ name: "capacitySeated", title: "Seated Capacity", type: "number" }),
    defineField({ name: "capacityCocktail", title: "Cocktail Capacity", type: "number" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "amenities", title: "Amenities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "rentalFee", title: "Rental Fee", type: "string" }),
    defineField({ name: "minimums", title: "Food + Beverage Minimums", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "notes", title: "Notes", type: "array", of: [{ type: "string" }] }),
  ],
})
