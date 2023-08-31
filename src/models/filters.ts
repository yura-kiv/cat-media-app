import { CatImagesRes } from "./catApi";

export type GalleryOrder = "Random" | "Desc" | "Asc";
export type GalleryType = "All" | "Static" | "Animated";
export type GalleryBreed = string;
export type GalleryLimit =
  | "5 items per page"
  | "10 items per page"
  | "15 items per page"
  | "20 items per page";

export interface GalleryFilters {
  filters: {
    order: GalleryOrder;
    type: GalleryType;
    breed: {
      name: string;
      id: string;
    };
    limit: GalleryLimit;
    page: number;
  };
  catImages: {
    loadingStatus: "idle" | "pending" | "succeeded" | "failed";
    data: CatImagesRes[] | [];
  };
}
