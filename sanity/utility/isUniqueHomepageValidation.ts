import { SanityDocument } from "@sanity/client";
import { BooleanRule, ValidationContext } from "sanity";

export const isUniqueHomepageValidation = (rule: BooleanRule) =>
  rule.custom(
    async (value: boolean | undefined, context: ValidationContext) => {
      const { getClient, document } = context;
      const client = getClient({ apiVersion: "2021-03-25" });
      const id = document?._id.replace(/^drafts\./, "");
      const params = {
        draft: `drafts.${id}`,
        published: id,
      };
      const query = `*[_type == "page" && homepage == true]`;

      const homepagePages = await client
        .fetch(query, params)
        .then((pages) =>
          pages.filter((page: SanityDocument) => page._id !== document?._id),
        );
      if (value) {
        if (homepagePages.length > 0) {
          return `Please remove the homepage flag from the following page: ${homepagePages.map(
            (page: SanityDocument) => page.title,
          )}`;
        }
      }

      return true;
    },
  );
