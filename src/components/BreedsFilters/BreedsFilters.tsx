import React, { useState, useMemo } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useGetBreedsQuery } from "../../store/api/endpointsQuery";
import {
  breedLimitOptions,
  breedsDefaultOptions,
  getBreedId,
  getBreedsNames,
} from "../helpers/filtersAssets";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as SortIconZA } from "../../assets/icons/soft-revert-20.svg";
import { ReactComponent as SortIconAZ } from "../../assets/icons/sort-20.svg";
import { BreedFilters } from "../../models/filters";

const BreedsFilters = () => {
  const breedsInfo = useGetBreedsQuery();
  const [filters, setFilters] = useState<BreedFilters>({
    breed: { name: breedsDefaultOptions[0], id: "" },
    limit: breedLimitOptions[0],
    order: "A_Z",
  });

  const getBreedsSelect = useMemo(() => {
    if (!breedsInfo.isLoading && breedsInfo.data) {
      return getBreedsNames(breedsInfo.data);
    }
    return breedsDefaultOptions;
  }, [breedsInfo.data]);

  return (
    <div className="w-full flex gap-3 items-center ml-3">
      <CustomSelect
        label=""
        name="breed"
        options={getBreedsSelect}
        value={filters.breed.name}
        setValue={(value) => {
          if (breedsInfo.data) {
            const id = getBreedId(value, breedsInfo.data);
            setFilters({ ...filters, breed: { id, name: value } });
          } else setFilters({ ...filters, breed: { id: "", name: value } });
        }}
        className="w-full min-w-[100px] bg-slate-100"
      />
      <CustomSelect
        label=""
        name="limit"
        options={breedLimitOptions}
        value={filters.limit}
        setValue={(value) => setFilters({ ...filters, limit: value })}
        className="w-full min-w-[100px] bg-slate-100"
      />
      <IconButton
        color={filters.order === "A_Z" ? "red" : "gray"}
        icon={<SortIconAZ />}
        size="large"
        className=""
        onClick={() => {
          setFilters({ ...filters, order: "A_Z" });
        }}
      />
      <IconButton
        color={filters.order === "Z_A" ? "red" : "gray"}
        icon={<SortIconZA />}
        size="large"
        onClick={() => {
          setFilters({ ...filters, order: "Z_A" });
        }}
        className=""
      />
    </div>
  );
};

export default BreedsFilters;
