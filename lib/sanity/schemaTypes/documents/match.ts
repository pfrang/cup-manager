import { defineField, defineType, SlugRule, StringRule } from "sanity";

import { IoFootball } from "react-icons/io5";
import { schemaTypeObject } from "../../schemaTypeObject";

export default defineType({
  name: schemaTypeObject.MATCH,
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

    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required().error("A date is required"),
    }),

    defineField({
      name: "ageGroup",
      title: "Age Group",
      type: "reference",
      to: [{ type: schemaTypeObject.AGE_GROUP }],
      validation: (Rule) => Rule.required().error("An age group is required"),
    }),
  ],
});
