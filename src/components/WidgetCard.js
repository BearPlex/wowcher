// src/components/WidgetCard.js
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const WidgetCard = ({
  heading,
  data,
  buttonText,
  onButtonClick,
  showButton,
  bgColor,
  textColor,
  divText,
}) => {
  return (
    <div className="bg-white cursor-pointer hover:bg-slate-50 border-[#E5E7EB] border p-4 rounded-lg flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center gap-1">
        <h2 className="text-sm text-[#212121]">{heading}</h2>
        <h2 className="text-2xl text-[#212121]">{data}</h2>
      </div>

      {showButton ? (
        <button
          className="mt-auto flex items-center justify-center gap-1 bg-transparent text-xs font-medium text-[#EC008C] px-4 py-2 rounded transition"
          onClick={onButtonClick}
        >
          {buttonText}
          <HiMiniArrowUpRight/>
        </button>
      ) : (
        <div
          className={`mt-auto px-4 py-2 text-xs text-center font-semibold rounded transition ${bgColor} ${textColor}`}
        >
          {divText}
        </div>
      )}
    </div>
  );
};

export default WidgetCard;
