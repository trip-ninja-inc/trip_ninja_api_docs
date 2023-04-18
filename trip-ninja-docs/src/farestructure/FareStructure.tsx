import React from "react";
import { useParams } from "react-router-dom";
import FareStructureOverview from "./FareStructureOverview";
import FareStructureSetup from "./FareStructureSetup";
import GetSearches from "./GetSearches";
import GenerateSolutions from "./GenerateSolutions";
import SideBarNav from "../common/SideBar";
import Footer from "../common/Footer";


export default function FareStructure() {

  const { view } = useParams<{ view: string }>();

  return(
    <div className="row">
      <div className="col-md-3">
        <SideBarNav currentView={view} />
      </div>
      <div className="col-md-9">
        <div className="row justify-content-center my-4">
          <div className="col-md-10">
            {view === "overview" &&
              <FareStructureOverview />
            }
            {view === "setup" &&
              <FareStructureSetup />
            }
            {view === "get-searches" &&
              <GetSearches />
            }
            {view === "generate-solutions" &&
              <GenerateSolutions />
            }
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
