import React from "react";
import { useParams } from "react-router-dom";
import SideBarNav from "../common/SideBar";
import DynamicPackagingOverview from "./DynamicPackagingOverview";
import DynamicPackagingSetup from "./DynamicPackagingSetup";

export default function DynamicPackaging() {
  const { view } = useParams<{ view: string }>();

  return (
    <div className="row">
      <div className="col-md-3">
        <SideBarNav />
      </div>
      <div className="col-md-9">
        <div className="row justify-content-center my-5">
          <div className="col-md-9">
            {view === "overview" && <DynamicPackagingOverview />}
            {view === "setup" && <DynamicPackagingSetup />}
          </div>
        </div>
      </div>
    </div>
  );
}
