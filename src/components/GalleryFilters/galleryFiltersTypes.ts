import { OptionSelect } from "../CustomSelect/CustomSelect";

export interface GalleryOrderOption extends OptionSelect {
  value: "RAND" | "DESC" | "ASC";
  optionText: "Random" | "Desc" | "Asc";
}
export interface GalleryTypeOption extends OptionSelect {
  value: "All" | "Static" | "Animated";
  optionText: "All" | "Static" | "Animated";
}

export interface GalleryBreedOption extends OptionSelect {
  value: string;
  optionText: string;
}

export interface GalleryLimitOption extends OptionSelect {
  value: "5" | "10" | "15" | "20";
  optionText: "5 items per page" | "10 items per page" | "15 items per page" | "20 items per page";
}

export interface GalleryFilters {
  order: string;
  type: string;
  breed: string;
  limit: string;
}
