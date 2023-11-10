import { SERVICE_SECTION_MAX_IMAGE_SIZE } from "config";
import { defineField, defineType } from "sanity";
import { maxImageSizeValidation } from "utility";

export default defineType({
  name: "serviceSection",
  type: "object",
  title: "Service Section",
  fields: [
    defineField({
      title: "Use blue theme?",
      name: "blueTheme",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      title: "Orientation? (Image on the left, text on the right)",
      name: "orientation",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      type: "image",
      description:
        "Image for the service section. Max image size: 576x576 pixels.",
      validation: (Rule) => [
        maxImageSizeValidation(Rule, SERVICE_SECTION_MAX_IMAGE_SIZE),
        Rule.required(),
      ],
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
      description: "Title for the service section.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      description: "Body for the service section.",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      description: "Select testimonial to showcase in this section.",
      type: "reference",
      to: [{ type: "testimonial" }],
    }),
    defineField({
      name: "tagline",
      type: "string",
      description: "Tagline for the service section. Text above the button.",
      title: "Tagline",
    }),
    defineField({
      name: "button",
      type: "object",
      description: "Link for the button in the hero section.",
      title: "Button",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Button Text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          type: "url",
          title: "Button URL",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }).required(),
        },
      ],
    }),
  ],
});
