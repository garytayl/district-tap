import { defineField, defineType } from "sanity"

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Menu Category",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "menuItem" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
