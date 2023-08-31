import { GalleryLimit, GalleryOrder, GalleryType } from "../../models/filters";

export const orderOptions: GalleryOrder[] = ["Random", "Desc", "Asc"];
export const typeOptions: GalleryType[] = ["All", "Static", "Animated"];
export const limitPerPageOptions: GalleryLimit[] = [
  "5 items per page",
  "10 items per page",
  "15 items per page",
  "20 items per page",
];
export const breedsDefaultOptions: string[] = ["None", "Loading..."];
