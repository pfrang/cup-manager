import { defineField, defineType, Rule, StringRule } from "sanity";

import { IoFootball } from "react-icons/io5";

export default defineType({
  name: "match",
  title: "Match",
  type: "document",
  icon: IoFootball,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "The slug for the game.",
      type: "string",
      validation: (Rule: StringRule) =>
        Rule.required().error("A slug is required"),
    }),
  ],
});
