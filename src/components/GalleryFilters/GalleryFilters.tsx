import React, { useMemo, useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import IconButton from "../Buttons/IconButton";
import { ReactComponent as ReloadIcon } from "../../assets/icons/update-20.svg";
import { orderOptions, typeOptions, countPerPageOptions, breedsDefault } from "./selectsAsset";
import useApi from "../../hooks/useApi";

const GalleryFilters = () => {
  const [order, setOrder] = useState(orderOptions[0]);
  const [type, setType] = useState(typeOptions[0]);
  const [count, setCount] = useState(countPerPageOptions[0]);
  const [breed, setBreed] = useState("None");
  const breedsList = useApi("breeds", "/breeds");

  const getBreeds = useMemo(() => {
    console.log("here");
    const breeds = ["None"];
    if (!breedsList.isLoading) {
      breedsList.data.forEach((data: any) => {
        breeds.push(data.name);
      });
      return breeds;
    }
    return breedsDefault;
  }, [breedsList.data]);

  return (
    <div className="w-full h-fit bg-gray-100 rounded-2xl p-5">
      <div className="w-full row-wrapper flex mb-3 gap-3">
        <CustomSelect
          label="Order"
          name="order"
          options={orderOptions}
          value={order}
          setValue={setOrder}
          className="w-full"
        />
        <CustomSelect
          label="Type"
          name="type"
          options={typeOptions}
          value={type}
          setValue={setType}
          className="w-full"
        />
      </div>
      <div className="w-full row-wrapper flex gap-3">
        <CustomSelect
          label="Breed"
          name="breed"
          options={breedsList.isLoading ? breedsDefault : getBreeds}
          value={breed}
          setValue={setBreed}
          className="w-full"
        />
        <CustomSelect
          label="Limit"
          name="limit"
          options={countPerPageOptions}
          value={count}
          setValue={setCount}
          className="w-full"
        />
        <IconButton
          color="white"
          size="large"
          icon={<ReloadIcon />}
          className="self-end"
        />
      </div>
    </div>
  );
};

export default GalleryFilters;
