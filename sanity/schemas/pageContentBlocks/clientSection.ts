import { defineField } from "sanity";

export default {
  name: "clientSection",
  type: "object",
  title: "Client Section",
  description: "A section for displaying clients inside a carousel.",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title for the service section.",
      type: "string",
    }),
    defineField({
      name: "Clients",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "client" },
        },
      ],
    }),
  ],
};
