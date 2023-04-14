import React from "react";

export default function DynamicPackagingGetHotelResults() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="mt-3">MSDP Get Hotel Results</h2>
          <p>
            This endpoint retrieves a specific MSDP hotel search result along with details about each hotel such as
            name, location, amenities, and prices from the prior MSDP search.
          </p>
          <p>
            The response will be a JSON object containing a list of available hotels for each stop in the trip,
            along with the price and other relevant information.
          </p>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}