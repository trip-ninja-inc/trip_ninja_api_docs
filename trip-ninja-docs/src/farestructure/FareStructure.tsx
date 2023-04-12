import React from "react";
import { useParams } from "react-router-dom";
import FareStructureOverview from "./FareStructureOverview";
import FareStructureSetup from "./FareStructureSetup";


export default function FareStructure() {

  const { view } = useParams<{ view: string }>();

  return(
    <div className="my-5 row">
      <div className="col-md-3">

      </div>
      <div className="col-md-9">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {view === "overview" &&
              <FareStructureOverview />
            }
            {view === "setup" &&
              <FareStructureSetup />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
