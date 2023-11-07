import { TESTIMONIAL_MAX_IMAGE_SIZE } from "config";
import { defineField, defineType } from "sanity";
import { maxImageSizeValidation } from "utility";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      description:
        "This is the name of the person who gave the testimonial. This appears as the first text under the image. Max: 26 characters.",
      validation: (rule) => rule.required().max(26),
    }),
    defineField({
      name: "position",
      title: "Author Position",
      type: "string",
      description:
        "This is the position of the person who gave the testimonial. This appears as the second text under the image. Max: 37 characters.",
      validation: (rule) => rule.required().max(37),
    }),
    defineField({
      name: "body",
      title: "Testimonial Body",
      type: "text",
      description:
        "This is the testimonial itself. This appears as the text under the author name and position. Max: 145 characters.",
      validation: (rule) => rule.required().max(145),
    }),
    defineField({
      name: "image",
      type: "image",
      description:
        "Profile picture of the testimonial giver. Please don't use transparent and use a max resolution of 500x500 pixels.",
      validation: (rule) =>
        maxImageSizeValidation(rule, TESTIMONIAL_MAX_IMAGE_SIZE),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description:
            "Important for SEO and accessiblity. Please add a description of the image.",
        }),
      ],
    }),
  ],
});
