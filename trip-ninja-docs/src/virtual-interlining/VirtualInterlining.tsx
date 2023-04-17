import React from "react";
import { useParams } from "react-router-dom";
import VirtualInterliningOverview from "./VirtualInterliningOverview";
import VirtualInterliningSetup from "./VirtualInterliningSetup";
import VirtualInterliningGetSearches from "./VirtualInterliningGetSearches";
import VirtualInterliningGenerateSolutions from "./VirtualInterliningGenerateSolutions";
import SideBarNav from "../common/SideBar";


export default function VirtualInterlining() {

  const { view } = useParams<{ view: string }>();

  return(
    <div className="row">
      <div className="col-md-3">
        <SideBarNav currentView={view} product="virtual-interlining"/>
      </div>
      <div className="col-md-9">
        <div className="row justify-content-center my-4">
          <div className="col-md-9">
            {view === "overview" &&
              <VirtualInterliningOverview />
            }
            {view === "setup" &&
              <VirtualInterliningSetup />
            }
            {view === "get-searches" &&
              <VirtualInterliningGetSearches />
            }
            {view === "generate-solutions" &&
              <VirtualInterliningGenerateSolutions />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
