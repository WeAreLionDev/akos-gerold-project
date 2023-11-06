import { defineField, defineType } from "sanity";
import { adaptiveImageValidation } from "utility";
import {
  HERO_SECTION_DESKTOP_IMAGE_ASPECT_RATIO,
  HERO_SECTION_MOBILE_IMAGE_ASPECT_RATIO,
} from "config";

export default defineType({
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      description: "Main heading for the hero section.",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      description: "Tagline for the hero section.",
      type: "string",
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
    defineField({
      name: "subLink",
      type: "object",
      description: "Link for the text below the button in the hero section.",
      title: "Link",
      fields: [
        { name: "text", type: "string", title: "Link Text" },
        {
          name: "url",
          type: "url",
          title: "Link URL",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto", "tel"],
            }),
        },
      ],
    }),
    defineField({
      name: "mobileImage",
      type: "image",
      description:
        "Image for the hero section, for mobile. Should respect aspect ratio of 9:16.",
      validation: (rule) =>
        adaptiveImageValidation(rule, HERO_SECTION_MOBILE_IMAGE_ASPECT_RATIO),
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
      name: "desktopImage",
      type: "image",
      description:
        "Image for the hero section, for desktop. Should respect aspect ratio of 16:6.",
      validation: (rule) =>
        adaptiveImageValidation(rule, HERO_SECTION_DESKTOP_IMAGE_ASPECT_RATIO),
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
