import React from "react";

export default function DynamicPackagingGetFlightResults() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="mt-3">MSDP Get Flight Results</h2>
          <p>
            This endpoint retrieves all the flight results from the prior MSDP search. The response will include a
            list of flight options that match the search criteria, along with details about each flight option such
            as flight number, departure and arrival times, airline, and price.
          </p>
          <p>
            The response will be a JSON object containing an array of flight options that match the search
            criteria, along with details about each flight option.
          </p>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}