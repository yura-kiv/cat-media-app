import { BreedLimitOption, BreedsBreedOption } from "./breedFiltersTypes";

export const breedLimitOptions: BreedLimitOption[] = [
  { value: "5", optionText: "Limit: 5" },
  { value: "10", optionText: "Limit: 10" },
  { value: "15", optionText: "Limit: 15" },
  { value: "20", optionText: "Limit: 20" },
];

export const breedBreedsDafaultOptions: BreedsBreedOption[] = [
  { value: "", optionText: "All breeds" },
  { value: "", optionText: "Loading..." },
];
