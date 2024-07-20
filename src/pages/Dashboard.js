import React from "react";
import Widgets from "../components/Widgets";

const Dashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <Widgets />
      <div className="w-full rounded-md border pb-10 border-[#E5E7EB] p-3 flex flex-col gap-3">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="text-[#212121] text-base ">Total Revenue</h2>
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-2">
              <div>
                <iframe
                  title="revenue"
                  width="200"
                  height="100"
                  src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/102249544166/dashboards/f9c0aed7-4787-40ec-b809-79aa273397e7/sheets/f9c0aed7-4787-40ec-b809-79aa273397e7_5c90b190-a5b8-4c06-8056-24a0fd18f824/visuals/f9c0aed7-4787-40ec-b809-79aa273397e7_bb4e15f0-bbc0-4713-a1ad-0fe5f24448e0?directory_alias=bearplex-x-odus"
                ></iframe>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-[#220014] font-medium text-[13px]">2024</p>
                <div className="bg-[#F0FDF4] rounded-sm h-6 w-14 font-medium text-[13px] text-center text-[#16A34A]">
                  +24%
                </div>
              </div>
            </div>
            <div className="text-[#EC008C] font-medium text-sm">vs.</div>
            <div className="text-center">
              <h2 className="text-[#808080] font-medium text-2xl">£450,000</h2>
              <p className="text-[#808080] font-medium text-[13px]">2024</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            title="iframe"
            width="100%"
            height="400"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/102249544166/dashboards/08f27de7-de48-409b-abc0-25d34274458f/sheets/08f27de7-de48-409b-abc0-25d34274458f_5c90b190-a5b8-4c06-8056-24a0fd18f824/visuals/08f27de7-de48-409b-abc0-25d34274458f_8eb8f8f6-1d48-4026-aaac-523c380274cc?directory_alias=bearplex-x-odus"
          ></iframe>
        </div>
        <div className="w-full flex items-center  gap-10 justify-center">
          <div className="flex items-center gap-2">
            <div>
              <div className="w-2 h-2 rounded-full bg-[#EC008C]"></div>
            </div>
            <div className="text-[#6B7280] text-xs font-semibold">
              Current Year
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <div className="w-2 h-2 rounded-full bg-[#2B2B2B]"></div>
            </div>
            <div className="text-[#808080] text-xs font-semibold">
            Previous Year
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
