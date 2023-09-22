import React, { useEffect, useMemo, memo } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as ReloadIcon } from "../../assets/icons/update-20.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import {
  fetchCatImages,
  setBreed,
  setLimit,
  setOrder,
  setPaginationFilters,
  setType,
} from "../../store/slices/gallerySlice";
import { useGetBreedsQuery } from "../../store/api/queries/breedsQuery";
import { getBreedsSelectOptions } from "../../helpers/breedsHelper";
import { GalleryBreedOption } from "./galleryFiltersTypes";
import {
  galleryBreedDafaultOptions,
  galleryLimitOptions,
  galleryOrderOptions,
  galleryTypeOptions,
} from "./galleryFiltersOptions";

const GalleryFilters = memo(() => {
  const dispatch = useAppDispatch();
  const breedsInfo = useGetBreedsQuery();
  const filters = useAppSelector((state) => state.gallerySlice.filters);

  const breedsSelectOptions = useMemo((): GalleryBreedOption[] => {
    if (!breedsInfo.isLoading && breedsInfo.data) {
      return getBreedsSelectOptions(breedsInfo.data, "None");
    }
    return galleryBreedDafaultOptions;
  }, [breedsInfo.data]);

  useEffect(() => {
    dispatch(fetchCatImages({ ...filters, page: 0 }));
  }, []);

  return (
    <div className="w-full h-fit bg-gray-100 rounded-2xl p-5 mb-3 dark:bg-neutral-800">
      <div className="w-full row-wrapper flex mb-3 gap-3">
        <CustomSelect
          label="Order"
          name="order"
          options={galleryOrderOptions}
          value={filters.order}
          setValue={(value) => {
            dispatch(setOrder({ order: value }));
          }}
          classNameWrapper="w-full"
          classNameSelect="w-full"
        />
        <CustomSelect
          label="Type"
          name="type"
          options={galleryTypeOptions}
          value={filters.type}
          setValue={(value) => {
            dispatch(setType({ type: value }));
          }}
          classNameWrapper="w-full"
          classNameSelect="w-full"
        />
      </div>
      <div className="w-full row-wrapper flex gap-3">
        <CustomSelect
          label="Breed"
          name="breed"
          options={breedsSelectOptions}
          value={filters.breed}
          setValue={(value) => {
            dispatch(setBreed({ breed: value }));
          }}
          classNameWrapper="w-full"
          classNameSelect="w-full"
        />
        <CustomSelect
          label="Limit"
          name="limit"
          options={galleryLimitOptions}
          value={filters.limit}
          setValue={(value) => {
            dispatch(setLimit({ limit: value }));
          }}
          classNameWrapper="w-full"
          classNameSelect="w-full"
        />
        <IconButton
          color="white"
          size="large"
          icon={<ReloadIcon />}
          className="self-end"
          onClick={() => {
            dispatch(setPaginationFilters({ filters }));
            dispatch(fetchCatImages({ ...filters, page: 0 }));
          }}
        />
      </div>
    </div>
  );
});

export default GalleryFilters;
