// src/components/Widgets.js
import React from "react";
import WidgetCard from "./WidgetCard";

const Widgets = () => {
  const widgetData = [
    {
      heading: "Total Revenue",
      data: "£850,000",
      buttonText: "Deal Performance",
      onButtonClick: () => alert("Deal Performance Clicked!"),
      showButton: true,
    },
    {
      heading: "Dispatched Ontime Rate",
      data: "30%",
      buttonText: "Dispatch Tracking Page",
      onButtonClick: () => alert("Dispatch Tracking Page Clicked!"),
      showButton: true,
    },
    {
      heading: "Refund Rate",
      data: "38%",
      divText: "+12% vs. industry average",
      bgColor: "bg-[#FDF0F0]",
      textColor: "text-[#A31616]",
      showButton: false,
    },
    {
      heading: "NPS",
      data: "N/A",
      buttonText: "Dispatch Tracking Page",
      onButtonClick: () => alert("Dispatch Tracking Page Clicked!"),
      showButton: true,
    },
    {
      heading: "Live Deals",
      data: "38%",
      buttonText: "Dispatch Tracking Page",
      onButtonClick: () => alert("Dispatch Tracking Page Clicked!"),
      showButton: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {widgetData.map((widget, index) => (
        <WidgetCard
          key={index}
          heading={widget.heading}
          data={widget.data}
          buttonText={widget.buttonText}
          onButtonClick={widget.onButtonClick}
          showButton={widget.showButton}
          bgColor={widget.bgColor}
          textColor={widget.textColor}
          divText={widget.divText}
        />
      ))}
    </div>
  );
};

export default Widgets;
