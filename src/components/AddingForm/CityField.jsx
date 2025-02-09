import React, { useRef } from "react";
import Select from "react-select";

const options = [
  { value: "Erbil", label: "Erbil" },
  { value: "Sulaymaniyah", label: "Sulaymaniyah" },
  { value: "Kirkuk", label: "Kirkuk" },
  { value: "Duhok", label: "Duhok" },
];

export default function DishesField({ disable }) {
  const selectInputRef = useRef();
  window.clearCity = () => {
    selectInputRef.current.clearValue();
  };
  return (
    <>
      <div className="mt-7 mb-3 dark:text-white">City:</div>
      <Select
        ref={selectInputRef}
        name="City"
        className="transition-all disabled:bg-gray-200 disabled:cursor-wait customSelectMe w-64 text-base mb-3"
        options={options}
        isDisabled={disable}
        classNamePrefix="makeDark"
        isSearchable={false}
      />
    </>
  );
}
