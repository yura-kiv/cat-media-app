import React, { useEffect, useMemo, memo, useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as ReloadIcon } from "../../assets/icons/update-20.svg";
import {
  orderOptions,
  typeOptions,
  galleryLimitOptions,
  breedsDefaultOptions,
  getBreedsNames,
  getBreedId,
} from "../helpers/filtersAssets";
import { useAppDispatch } from "../../hooks/store";
import { fetchCatImages } from "../../store/slices/gallerySlice";
import { useGetBreedsQuery } from "../../store/api/endpointsQuery";
import { GalleryFilters as IGalleryFilters } from "../../models/filters";

const GalleryFilters = memo(() => {
  const dispatch = useAppDispatch();
  const breedsInfo = useGetBreedsQuery();
  const [filters, setFilters] = useState<IGalleryFilters>({
    order: orderOptions[0],
    breed: { name: breedsDefaultOptions[0], id: "" },
    limit: galleryLimitOptions[0],
    type: typeOptions[0],
    page: 1,
  });

  const getBreedsSelect = useMemo(() => {
    if (!breedsInfo.isLoading && breedsInfo.data) {
      return getBreedsNames(breedsInfo.data);
    }
    return breedsDefaultOptions;
  }, [breedsInfo.data]);

  useEffect(() => {
    dispatch(fetchCatImages({ ...filters, breedId: filters.breed.id }));
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
            setFilters({ ...filters, order: value });
          }}
          className="w-full"
        />
        <CustomSelect
          label="Type"
          name="type"
          options={typeOptions}
          value={filters.type}
          setValue={(value) => {
            setFilters({ ...filters, type: value });
          }}
          className="w-full"
        />
      </div>
      <div className="w-full row-wrapper flex gap-3">
        <CustomSelect
          label="Breed"
          name="breed"
          options={getBreedsSelect}
          value={filters.breed.name}
          setValue={(value) => {
            if (breedsInfo.data) {
              const id = getBreedId(value, breedsInfo.data);
              setFilters({ ...filters, breed: { id, name: value } });
            } else setFilters({ ...filters, breed: { id: "", name: value } });
          }}
          className="w-full"
        />
        <CustomSelect
          label="Limit"
          name="limit"
          options={galleryLimitOptions}
          value={filters.limit}
          setValue={(value) => {
            setFilters({ ...filters, limit: value });
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
