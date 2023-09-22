import React, { useMemo } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useGetBreedsQuery } from "../../store/api/queries/breedsQuery";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as SortIconZA } from "../../assets/icons/soft-revert-20.svg";
import { ReactComponent as SortIconAZ } from "../../assets/icons/sort-20.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { setBreed, setLimit, setOrder } from "../../store/slices/breedSlice";
import { getBreedsSelectOptions } from "../../helpers/breedsHelper";
import { BreedsBreedOption } from "./breedFiltersTypes";
import { breedBreedsDafaultOptions, breedLimitOptions } from "./breedFiltersOptions";

const BreedsFilters = () => {
  const breedsQuery = useGetBreedsQuery();
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.breedSlice.filters);

  const breedsSelectOptions = useMemo((): BreedsBreedOption[] => {
    if (!breedsQuery.isLoading && breedsQuery.data) {
      return getBreedsSelectOptions(breedsQuery.data, "All breeds");
    }
    return breedBreedsDafaultOptions;
  }, [breedsQuery.data]);

  return (
    <>
      <div className="grow flex gap-3 items-center max-sm:flex-wrap">
        <CustomSelect
          label=""
          name="breed"
          options={breedsSelectOptions}
          value={filters.breed}
          setValue={(value) => {
            dispatch(setBreed({ breed: value }));
          }}
          classNameSelect="w-full bg-slate-100"
          classNameWrapper="grow min-w-[150px] max-sm:w-full"
        />
        <CustomSelect
          label=""
          name="limit"
          options={breedLimitOptions}
          value={filters.limit}
          setValue={(value) => dispatch(setLimit({ limit: value }))}
          classNameSelect="bg-slate-100 w-full"
          classNameWrapper="min-w-[100px] max-sm:grow"
        />
        <IconButton
          color={filters.order === false ? "red" : "gray"}
          icon={<SortIconAZ />}
          size="large"
          onClick={() => {
            filters.order !== false && dispatch(setOrder({ order: false }));
          }}
        />
        <IconButton
          color={filters.order === true ? "red" : "gray"}
          icon={<SortIconZA />}
          size="large"
          onClick={() => {
            filters.order !== true && dispatch(setOrder({ order: true }));
          }}
        />
      </div>
    </>
  );
};

export default BreedsFilters;
