import { defineField, defineType, SlugRule, StringRule } from "sanity";

import { IoFootball } from "react-icons/io5";

export default defineType({
  name: "match",
  title: "Match",
  type: "document",
  icon: IoFootball,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "The slug for the game.",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule: SlugRule) =>
        Rule.required().error("A slug is required"),
    }),
  ],
});
