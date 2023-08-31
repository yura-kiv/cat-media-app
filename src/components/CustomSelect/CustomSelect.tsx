import React, { ChangeEvent } from "react";

type CustomSelectProps = {
  name: string;
  label: string;
  options: string[];
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
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
