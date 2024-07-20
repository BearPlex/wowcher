import React from "react";
import Widgets from "../components/Widgets";

const Dashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <Widgets />
      <div className="w-full">
        <iframe
          title="iframe"
          width="100%"
          height="400"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/102249544166/dashboards/08f27de7-de48-409b-abc0-25d34274458f/sheets/08f27de7-de48-409b-abc0-25d34274458f_5c90b190-a5b8-4c06-8056-24a0fd18f824/visuals/08f27de7-de48-409b-abc0-25d34274458f_8eb8f8f6-1d48-4026-aaac-523c380274cc?directory_alias=bearplex-x-odus"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
