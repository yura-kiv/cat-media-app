import {
  GalleryBreedOption,
  GalleryLimitOption,
  GalleryOrderOption,
  GalleryTypeOption,
} from "./galleryFiltersTypes";

export const galleryOrderOptions: GalleryOrderOption[] = [
  { value: "RAND", optionText: "Random" },
  { value: "DESC", optionText: "Desc" },
  { value: "ASC", optionText: "Asc" },
];

export const galleryTypeOptions: GalleryTypeOption[] = [
  { value: "All", optionText: "All" },
  { value: "Static", optionText: "Static" },
  { value: "Animated", optionText: "Animated" },
];

export const galleryLimitOptions: GalleryLimitOption[] = [
  { value: "5", optionText: "5 items per page" },
  { value: "10", optionText: "10 items per page" },
  { value: "15", optionText: "15 items per page" },
  { value: "20", optionText: "20 items per page" },
];

export const galleryBreedDafaultOptions: GalleryBreedOption[] = [
  { value: "", optionText: "None" },
  { value: "", optionText: "Loading..." },
];
