import { defineField, defineType } from "sanity";

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
      validation: (Rule) => Rule.required(),
    }),
  ],
});
