import { defineField, defineType } from "sanity"

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "details", title: "Details", type: "text" }),
  ],
})
