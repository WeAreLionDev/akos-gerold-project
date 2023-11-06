import { defineField } from "sanity";

export default {
  name: "testimonialSection",
  type: "object",
  title: "Testimonial Section",
  description: "A section for displaying testimonials inside a carousel.",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title for the service section.",
      type: "string",
    }),
    defineField({
      name: "Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "testimonial" },
        },
      ],
    }),
  ],
};
