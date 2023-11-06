import { ABOUT_ME_SECTION_MAX_IMAGE_SIZE } from "config";
import { defineField } from "sanity";
import { maxImageSizeValidation } from "utility";

export default {
  name: "aboutMeSection",
  type: "object",
  title: "About Me Section",
  description: "A section for about me information.",
  fields: [
    defineField({
      name: "image",
      type: "image",
      description:
        "Image for the About Me section. Max image size: 576:900 pixels.",
      validation: (rule) =>
        maxImageSizeValidation(rule, ABOUT_ME_SECTION_MAX_IMAGE_SIZE),
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
    defineField({
      name: "title",
      title: "Title",
      description: "Title for the about me section.",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      description: "Body for the about me section.",
      type: "blockContent",
    }),
  ],
};
