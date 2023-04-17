import React from "react";
import msdpSearchDocs from "../openapi/dynamic_packaging_search.json";
import { redocConfig } from "../common/RedocConfig";
import { RedocStandalone } from "redoc";

export default function DynamicPackagingSearch() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="mt-3">MSDP Search</h2>
          <p>
            This endpoint initiates an MSDP search for one or more flights and one or more hotels and
            returns a list of available flights and hotel options, based on the provided search criteria.
          </p>
          <p>
            The response will be a JSON object containing an array of travel package options that match the search
            criteria, along with details about each package.
          </p>
        </div>
      </div>
      <hr className="mt-5 mb-0"/>
      <RedocStandalone
        spec={msdpSearchDocs}
        options={redocConfig}
      />
    </div>
  );
}