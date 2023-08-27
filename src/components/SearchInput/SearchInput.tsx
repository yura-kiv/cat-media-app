import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-20.svg";
import IconButton from "../Buttons/IconButton";

const SearchInput: React.FC = ({}) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative flex items-center grow">
      <input
        type="text"
        value={value}
        name="serch-input"
        placeholder="Search for breeds by name"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="grow rounded-[20px] pl-5 pr-16 py-4 text-xl hover:ring-2 hover:ring-red-200
                  focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <div className="absolute right-2.5">
        <IconButton
          size="small"
          color="red"
          icon={<SearchIcon />}
        ></IconButton>
      </div>
    </div>
  );
};

export default SearchInput;
