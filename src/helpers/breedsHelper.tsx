import { BreedRes } from "../models/catApi";
import { BreedFilters } from "../components/BreedsFilters/breedFiltersTypes";
import { GalleryBreedOption } from "../components/GalleryFilters/galleryFiltersTypes";
import { ImagesGridProps } from "../components/ImagesGrid/ImagesGrid";

export const paginateList = (data: any[], page: number, limit: number) => {
  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  return data.slice(startIndex, endIndex);
};

export const sortrByAlphabet = (data: any[], key: string, order: boolean) => {
  const sortedData = [...data].sort((a, b) => {
    const valueA = a[key].toUpperCase();
    const valueB = b[key].toUpperCase();
    if (order) {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    } else {
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    }
  });
  return sortedData;
};

export const filterBreeds = (filters: BreedFilters, data: BreedRes[]) => {
  const { breed, limit, order, page } = filters;
  const limitValue = +limit;
  const orderValue = order === true ? true : order === false ? false : null;
  if (breed !== "") {
    return data.filter((item) => item.id === breed);
  }
  let sortedData = data;
  if (orderValue !== null) {
    sortedData = sortrByAlphabet(data, "name", orderValue);
  }
  sortedData = paginateList(sortedData, page, limitValue);
  return sortedData;
};

export const getBreedsSelectOptions = (
  breedsInfo: BreedRes[],
  deafaultText: string
): GalleryBreedOption[] => {
  const breeds: GalleryBreedOption[] = [{ value: "", optionText: deafaultText }];
  breedsInfo.forEach((data: BreedRes) => {
    breeds.push({ value: data.id, optionText: data.name });
  });
  return breeds;
};
