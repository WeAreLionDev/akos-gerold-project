import { ImageRule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { roundDecimalNumber } from "./roundDecimalNumber";
import { isWithinTolerance } from "./isWithinTolerance";
import { ACCEPTED_IMAGE_FILE_TYPES } from "config";

const ASPECT_RATIO_TOLERANCE = 0.001;

export const adaptiveImageValidation = (
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

    const { width, height } = getImageDimensions(value.asset._ref);

    const imageRatio = roundDecimalNumber(width / height, 4);
    const validationImageRatio = roundDecimalNumber(ratio[0] / ratio[1], 4);

    const isAspectRatioValid = isWithinTolerance(
      validationImageRatio,
      imageRatio,
      ASPECT_RATIO_TOLERANCE,
    );

    if (!isAspectRatioValid) {
      return `Aspect ratio is not ${ratio[0]}:${ratio[1]}. Please use an image with the aspect ratio of ${ratio[0]}:${ratio[1]}.`;
    }

    return true;
  });
