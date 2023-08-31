import { BreedRes } from "../../models/catApi";
import { GalleryBreed, GalleryLimit, GalleryOrder, GalleryType } from "../../models/filters";

export type getCatImagesParams = {
  order: GalleryOrder;
  type: GalleryType;
  breedId: GalleryBreed;
  limit: GalleryLimit;
  page: number;
};

export const getCatImagesUrl = ({
  limit,
  type,
  breedId,
  order,
  page,
}: getCatImagesParams): string => {
  const limitValue = limit.split(" ")[0];
  const typeValue = type === "All" ? "" : type === "Static" ? "jpg,png" : "gif";
  const breedValue = breedId === "None" ? "" : breedId;
  return `images/search?limit=${limitValue}&mime_types=${typeValue}&order=${order}&size=small&page=${page}&breed_ids=${breedValue}`;
};

export const getBreedId = (searchBreed: string, breeds: BreedRes[]): string => {
  if (searchBreed === "None" || !breeds) return "";
  const breedId = breeds.find((breed) => breed.name === searchBreed)?.id;
  if (breedId) {
    return breedId;
  }
  return "";
};
