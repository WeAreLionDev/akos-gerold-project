import { ImageRule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { SizeValuesType } from "types";

const ACCEPTED_IMAGE_FILE_TYPES: string[] = [
  "jpg",
  "jpeg",
  "png",
  "webp",
  "svg",
];

export const maxImageSizeValidation = (
  rule: ImageRule,
  sizes: SizeValuesType,
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

    if (width > sizes[0] && height > sizes[1]) {
      return `Image size is not valid (${width}x${height} pixels), please use an image with a max size of ${sizes[0]}x${sizes[1]} pixels.`;
    }

    return true;
  });
