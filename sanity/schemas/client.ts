import { CLIENT_MAX_IMAGE_SIZE } from "config";
import { defineField, defineType } from "sanity";
import { maxImageSizeValidation } from "utility";

export default defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      description:
        "This has no effect on the website, it's just for reference in the CMS.",
    }),
    defineField({
      name: "image",
      type: "image",
      description:
        "Logo of the clients company. Use a transparent background (.png) and a max resolution of 160x160 pixels or an SVG (no size limitations). Ensure that there is no whitespace around the logo.",
      validation: (rule) => maxImageSizeValidation(rule, CLIENT_MAX_IMAGE_SIZE),
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
