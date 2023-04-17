import React from "react";
import { useParams } from "react-router-dom";
import SideBarNav from "../common/SideBar";
import DynamicPackagingOverview from "./DynamicPackagingOverview";
import DynamicPackagingSetup from "./DynamicPackagingSetup";
import DynamicPackagingSearch from "./DynamicPackagingSearch";
import DynamicPackagingGetFlightResults from "./DynamicPackagingGetFlightResults";
import DynamicPackagingGetHotelResults from "./DynamicPackagingGetHotelResults";
import DynamicPackagingRemoveHotel from "./DynamicPackagingRemoveHotel";

export default function DynamicPackaging() {
  const { view } = useParams<{ view: string }>();
  const endpoints = {
    "search": "MSDP Search",
    "get-flight-results": "MSDP Get Flight Results",
    "get-hotel-results": "MSDP Get Hotel Results",
    "remove-hotel-results": "MSDP Remove Hotel Results"
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <SideBarNav currentView={view} product="dynamic_packaging" endpoints={endpoints}/>
      </div>
      <div className="col-md-9">
        <div className="row justify-content-center my-5">
          <div className="col-md-9">
            {view === "overview" && <DynamicPackagingOverview />}
            {view === "setup" && <DynamicPackagingSetup />}
            {view === "search" && <DynamicPackagingSearch />}
            {view === "get-flight-results" && <DynamicPackagingGetFlightResults />}
            {view === "get-hotel-results" && <DynamicPackagingGetHotelResults />}
            {view === "remove-hotel-results" && <DynamicPackagingRemoveHotel />}
          </div>
        </div>
      </div>
    </div>
  );
}
