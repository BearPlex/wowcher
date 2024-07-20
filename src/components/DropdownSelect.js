// src/components/DropdownSelect.js
import React from "react";

const DropdownSelect = ({ label, options, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className=" font-semibold text-sm text-[#2B2B2B]">{label}</label>
      <select className="p-2 border-[#E6E6E6] border  rounded-md" onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
