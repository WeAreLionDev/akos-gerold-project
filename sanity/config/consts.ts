import { AspectRatiosType, SizeValuesType } from "types";

export const SANITY_API_VERSION: string = "2021-03-25";

export const HERO_SECTION_MOBILE_IMAGE_ASPECT_RATIO: AspectRatiosType = [9, 16];

export const HERO_SECTION_DESKTOP_IMAGE_ASPECT_RATIO: AspectRatiosType = [
  16, 6,
];

export const ACCEPTED_IMAGE_FILE_TYPES: string[] = [
  "jpg",
  "jpeg",
  "png",
  "webp",
];

export const SERVICE_SECTION_MAX_IMAGE_SIZE: SizeValuesType = [576, 576];

export const TESTIMONIAL_MAX_IMAGE_SIZE: SizeValuesType = [512, 512];

export const CLIENT_MAX_IMAGE_SIZE: SizeValuesType = [160, 160];

export const INTRO_SECTION_MAX_IMAGE_SIZE: SizeValuesType = [576, 576];

export const ABOUT_ME_SECTION_MAX_IMAGE_SIZE: SizeValuesType = [576, 900];

export const WORK_WITH_ME_SECTION_MAX_IMAGE_SIZE: SizeValuesType = [800, 700];
