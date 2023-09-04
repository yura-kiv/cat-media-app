import { BreedRes } from "../../models/catApi";
import { GalleryLimit, BreedLimit, GalleryOrder, GalleryType } from "../../models/filters";

export const orderOptions: GalleryOrder[] = ["Random", "Desc", "Asc"];
export const typeOptions: GalleryType[] = ["All", "Static", "Animated"];
export const galleryLimitOptions: GalleryLimit[] = [
  "5 items per page",
  "10 items per page",
  "15 items per page",
  "20 items per page",
];

export const breedLimitOptions: BreedLimit[] = ["Limit: 5", "Limit: 10", "Limit: 15", "Limit: 20"];

export const breedsDefaultOptions: string[] = ["None", "Loading..."];

export const getBreedsNames = (breedsInfo: BreedRes[]): string[] => {
  const breeds = ["None"];
  breedsInfo.forEach((data: any) => {
    breeds.push(data.name);
  });
  return breeds;
};

export const getBreedId = (searchBreed: string, breeds: BreedRes[]): string => {
  if (searchBreed === "None" || !breeds) return "";
  const breedId = breeds.find((breed) => breed.name === searchBreed)?.id;
  if (breedId) {
    return breedId;
  }
  return "";
};
