import { ImageRule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

const ACCEPTED_IMAGE_FILE_TYPES: string[] = [
  "jpg",
  "jpeg",
  "png",
  "webp",
  "svg",
];

export const maxImageSizeValidation = (
  rule: ImageRule,
  ratio: [number, number],
) =>
  rule.custom((value?: SanityAsset) => {
    if (!value) return true;

    const fileType = getExtension(value.asset._ref);

    if (!ACCEPTED_IMAGE_FILE_TYPES.includes(fileType)) {
      return `File type not supported. Please use ${ACCEPTED_IMAGE_FILE_TYPES.concat(
        ", ",
      )}`;
    }

    if (fileType === "svg") return true;

    const { width, height } = getImageDimensions(value.asset._ref);

    if (width > ratio[0] && height > ratio[1]) {
      return `Image size is not valid (${width}x${height} pixels), please use an image with a max size of ${ratio[0]}x${ratio[1]} pixels.`;
    }

    return true;
  });
