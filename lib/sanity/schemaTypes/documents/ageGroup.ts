import { ArrayRule, defineField, defineType, StringRule } from "sanity";

import { FaPeopleGroup } from "react-icons/fa6";

export default defineType({
  name: "ageGroup",
  title: "Age Groups",
  type: "document",
  icon: FaPeopleGroup,
  fields: [
    defineField({
      name: "groups",
      title: "Age Groups",
      description: "List of age groups (e.g., U10, U12, U14)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: ArrayRule<StringRule>) =>
        Rule.required().min(1).error("At least one age group is required"),
    }),
  ],
  preview: {
    select: {
      groups: "groups",
    },
    prepare(selection) {
      const { groups } = selection;
      return {
        title: "Age Groups",
        // TODO subtitle isnt being displayed
        subtitle: Array.isArray(groups) ? groups.join(", ") : undefined,
      };
    },
  },
});
