// src/components/DropdownGrid.js
import React from "react";
import DropdownSelect from "./DropdownSelect";

const DropdownGrid = ({ dropdowns }) => {
  const handleSelectChange = (event, name) => {
    console.log(`Selected value for ${name}:`, event.target.value);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
      {dropdowns.map((dropdown, index) => (
        <DropdownSelect
          key={index}
          label={dropdown.label}
          options={dropdown.options}
          onChange={(event) => handleSelectChange(event, dropdown.name)}
        />
      ))}
    </div>
  );
};

export default DropdownGrid;
