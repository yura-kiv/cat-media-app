import React, { ChangeEvent } from "react";

export type OptionSelect = {
  value: string | number;
  optionText: string;
};

type CustomSelectProps = {
  name: string;
  label: string;
  options: OptionSelect[];
  value: string;
  setValue: (value: any) => void;
  className?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  value,
  setValue,
  className = "",
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="select-wrapper w-full">
      <label className="block ml-2 mb-1 text-xs font-normal text-gray-500 uppercase">{label}</label>
      <select
        className={
          className +
          " pl-3 py-2.5 pr-2 rounded-2xl hover:ring-2 hover:ring-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
        }
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <option
              value={option.value}
              key={option.value + index.toString()}
            >
              {option.optionText}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
