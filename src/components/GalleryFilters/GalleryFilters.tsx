import React, { useEffect, useMemo, memo } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as ReloadIcon } from "../../assets/icons/update-20.svg";
import {
  orderOptions,
  typeOptions,
  limitPerPageOptions,
  breedsDefaultOptions,
} from "./selectsAsset";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import {
  setBreed,
  setLimit,
  setOrder,
  seFiltersToInitialState,
  setType,
  fetchCatImages,
} from "../../store/slices/gallerySlice";
import { useGetBreedsQuery } from "../../store/api/endpointsQuery";
import { BreedRes } from "../../models/catApi";

const GalleryFilters = memo(() => {
  const breedsInfo = useGetBreedsQuery();
  const filters = useAppSelector((state) => state.gallerySlice.filters);
  const dispatch = useAppDispatch();

  const getBreeds = useMemo(() => {
    const breeds = ["None"];
    if (!breedsInfo.isLoading && breedsInfo.data) {
      breedsInfo.data.forEach((data: any) => {
        breeds.push(data.name);
      });
      return breeds;
    }
    return breedsDefaultOptions;
  }, [breedsInfo.data]);

  useEffect(() => {
    dispatch(fetchCatImages({ ...filters, breedId: filters.breed.id }));
    return () => {
      dispatch(seFiltersToInitialState());
    };
  }, []);

  return (
    <div className="w-full h-fit bg-gray-100 rounded-2xl p-5 mb-3">
      <div className="w-full row-wrapper flex mb-3 gap-3">
        <CustomSelect
          label="Order"
          name="order"
          options={orderOptions}
          value={filters.order}
          setValue={(value) => {
            dispatch(setOrder(value));
          }}
          className="w-full"
        />
        <CustomSelect
          label="Type"
          name="type"
          options={typeOptions}
          value={filters.type}
          setValue={(value) => {
            dispatch(setType(value));
          }}
          className="w-full"
        />
      </div>
      <div className="w-full row-wrapper flex gap-3">
        <CustomSelect
          label="Breed"
          name="breed"
          options={getBreeds}
          value={filters.breed.name}
          setValue={(value) => {
            if (breedsInfo.data)
              dispatch(setBreed({ searchBreed: value, breeds: breedsInfo.data }));
            else dispatch(setBreed({ searchBreed: value, breeds: [] }));
          }}
          className="w-full"
        />
        <CustomSelect
          label="Limit"
          name="limit"
          options={limitPerPageOptions}
          value={filters.limit}
          setValue={(value) => {
            dispatch(setLimit(value));
          }}
          className="w-full"
        />
        <IconButton
          color="white"
          size="large"
          icon={<ReloadIcon />}
          className="self-end"
          onClick={() => {
            dispatch(fetchCatImages({ ...filters, breedId: filters.breed.id }));
          }}
        />
      </div>
    </div>
  );
});

export default GalleryFilters;
