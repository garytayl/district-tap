import { defineField, defineType } from "sanity"

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "dateLabel", title: "Date Label", type: "string" }),
    defineField({ name: "timeLabel", title: "Time Label", type: "string" }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
    }),
    defineField({
      name: "locationLabel",
      title: "Location Label",
      type: "string",
      description: "Use for events that span both locations.",
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "lineup", title: "Lineup", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "specials", title: "Specials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Draft", "Published"],
      },
      initialValue: "Draft",
    }),
  ],
})
