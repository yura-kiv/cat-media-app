import { CatImagesRes } from "./catApi";

export type GalleryOrder = "Random" | "Desc" | "Asc";
export type GalleryType = "All" | "Static" | "Animated";
export type GalleryBreed = string;
export type GalleryLimit =
  | "5 items per page"
  | "10 items per page"
  | "15 items per page"
  | "20 items per page";
export type BreedLimit = "Limit: 5" | "Limit: 10" | "Limit: 15" | "Limit: 20";

export interface GalleryFilters {
  order: GalleryOrder;
  type: GalleryType;
  breed: {
    name: string;
    id: string;
  };
  limit: GalleryLimit;
  page: number;
}

export interface BreedFilters {
  breed: {
    name: string;
    id: string;
  };
  limit: BreedLimit;
  order: "A_Z" | "Z_A";
}

export interface GalleryCatImages {
  catImages: {
    loadingStatus: "idle" | "pending" | "succeeded" | "failed";
    data: CatImagesRes[] | [];
  };
}
