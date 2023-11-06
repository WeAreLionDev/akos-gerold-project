import { WORK_WITH_ME_SECTION_MAX_IMAGE_SIZE } from "config";
import { defineField } from "sanity";
import { maxImageSizeValidation } from "utility";

export default {
  name: "workWithMeSection",
  type: "object",
  title: "Work With Me Section",
  description: "A section for work with me information.",
  fields: [
    defineField({
      name: "image",
      type: "image",
      description:
        "Image for the Work With Me section. Max image size: 800x700 pixels.",
      validation: (rule) =>
        maxImageSizeValidation(rule, WORK_WITH_ME_SECTION_MAX_IMAGE_SIZE),
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
      description: "Title for the Work With Me section.",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      description: "This is the work with me section text body.",
    }),
    defineField({
      name: "button",
      type: "object",
      description: "Link for the button in the hero section.",
      title: "Button",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        {
          name: "url",
          type: "url",
          title: "Button URL",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        },
      ],
    }),
  ],
};
