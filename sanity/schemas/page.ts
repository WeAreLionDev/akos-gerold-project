import { defineArrayMember, defineField, defineType } from "sanity";
import { isUniqueHomepageValidation } from "utility";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      description: "Page title displayed in search engines.",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Page Description",
      description:
        "This is the description that is displayed in search engines.",
      type: "text",
    }),
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
      options: {
        layout: "tags",
      },
      of: [
        defineArrayMember({
          name: "heroSection",
          type: "heroSection",
          title: "Hero Section",
        }),
        defineArrayMember({
          name: "welcomeSection",
          type: "welcomeSection",
          title: "Welcome Section",
        }),
        defineArrayMember({
          name: "clientSection",
          type: "clientSection",
          title: "Client Section",
        }),
        defineArrayMember({
          name: "aboutMeSection",
          type: "aboutMeSection",
          title: "About Me Section",
        }),
        defineArrayMember({
          name: "serviceSection",
          type: "serviceSection",
          title: "Service Section",
        }),
        defineArrayMember({
          name: "testimonialSection",
          type: "testimonialSection",
          title: "Testimonial Section",
        }),
        defineArrayMember({
          name: "workWithMeSection",
          type: "workWithMeSection",
          title: "Work With Me Section",
        }),
      ],
    }),
  ],
});
