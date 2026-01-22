import { defineField, defineType } from "sanity"

export const location = defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "addressLines",
      title: "Address Lines",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "orderUrl",
      title: "Order URL",
      type: "url",
    }),
    defineField({
      name: "mapUrl",
      title: "Map URL",
      type: "url",
    }),
  ],
})
