import { INTRO_SECTION_MAX_IMAGE_SIZE } from "config";
import { defineField } from "sanity";
import { maxImageSizeValidation } from "utility";

export default {
  name: "introSection",
  type: "object",
  title: "Intro Section",
  description: "A section that comes after the Hero Section.",
  fields: [
    defineField({
      name: "image",
      type: "image",
      description:
        "Image for the Intro section. Max image size: 576:576 pixels.",
      validation: (rule) =>
        maxImageSizeValidation(rule, INTRO_SECTION_MAX_IMAGE_SIZE),
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
      name: "signature",
      title: "Signature",
      description: "Signature for intro section.",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description: "Subtitle for intro section.",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      description: "This for intro section text body.",
    }),
  ],
};
