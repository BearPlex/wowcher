// src/components/Widgets.js
import React from "react";
import WidgetCard from "./WidgetCard";

const Widgets = () => {
  const widgetData = [
    {
      heading: "Total Revenue",
      iframeSrc:
        "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/102249544166/dashboards/f9c0aed7-4787-40ec-b809-79aa273397e7/sheets/f9c0aed7-4787-40ec-b809-79aa273397e7_5c90b190-a5b8-4c06-8056-24a0fd18f824/visuals/f9c0aed7-4787-40ec-b809-79aa273397e7_bb4e15f0-bbc0-4713-a1ad-0fe5f24448e0?directory_alias=bearplex-x-odus",
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
          iframeSrc={widget.iframeSrc} // Pass iframeSrc prop
        />
      ))}
    </div>
  );
};

export default Widgets;
