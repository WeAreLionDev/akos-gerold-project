import { defineArrayMember, defineField, defineType } from "sanity";
import { isUniqueHomepageValidation } from "utility";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      title: "Is this the homepage?",
      name: "homepage",
      type: "boolean",
      initialValue: false,
      validation: (rule) => isUniqueHomepageValidation(rule),
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
      ],
    }),
  ],
});
