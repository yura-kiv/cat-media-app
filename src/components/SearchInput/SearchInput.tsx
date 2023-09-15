import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-20.svg";
import IconButton from "../Buttons/IconButton";
import { useNavigate } from "react-router-dom";

const SearchInput: React.FC = ({}) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="relative flex items-center grow"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        type="text"
        value={value}
        name="serch-input"
        placeholder="Search for breeds by name"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="grow rounded-[20px] pl-5 pr-16 py-4 text-xl hover:ring-2 hover:ring-red-200
                  focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-neutral-700 dark:text-gray-300"
      />
      <div className="absolute right-2.5">
        <IconButton
          size="small"
          color="red"
          icon={<SearchIcon />}
          onClick={() => {
            if (value === "") return;
            setValue("");
            navigate(`/search/${value}`);
          }}
        ></IconButton>
      </div>
    </form>
  );
};

export default SearchInput;
