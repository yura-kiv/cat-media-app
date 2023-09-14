import { OptionSelect } from "../CustomSelect/CustomSelect";

export interface BreedsBreedOption extends OptionSelect {}

export interface BreedLimitOption extends OptionSelect {
  value: "5" | "10" | "15" | "20";
  optionText: "Limit: 5" | "Limit: 10" | "Limit: 15" | "Limit: 20";
}

export interface BreedFilters {
  breed: string;
  limit: string;
  order: boolean | null;
  page: number;
}
