import { SanityDocument } from "@sanity/client";
import { SANITY_API_VERSION } from "config";
import { BooleanRule, ValidationContext } from "sanity";

export const isUniqueHomepageValidation = (rule: BooleanRule) =>
  rule.custom(
    async (value: boolean | undefined, context: ValidationContext) => {
      if (!value) return true;

      const { getClient, document } = context;
      const client = getClient({ apiVersion: SANITY_API_VERSION });
      const id = document?._id.replace(/^drafts\./, "");
      const params = {
        draft: `drafts.${id}`,
        published: id,
      };

      const query = `*[_type == "page" && homepage == true && _id != $draft && _id != $published]`;

      const homepagePages = await client.fetch(query, params);

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
