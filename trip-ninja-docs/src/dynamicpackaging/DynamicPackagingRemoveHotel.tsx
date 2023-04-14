import React from "react";
import dynamicPackagingRemoveHotelFlow from "../assets/dynamic-packaging-remove-hotel-flow.png";

export default function DynamicPackagingRemoveHotel() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="mt-3">MSDP Remove Hotel Result</h2>
          <p>
            This endpoint allows users to remove a specific hotel result from the prior MSDP search.
            All MSDP packages must have at least one hotel. An error will be thrown if you attempt to
            remove the final hotel from a package.
          </p>
          <p>
            The response will be a JSON object indicating whether the hotel was successfully removed or not,
            along with the updated details of the booking.
          </p>
        </div>
      </div>
      <img src={dynamicPackagingRemoveHotelFlow} alt="msdp remove hotel flow" className="image" />
      <hr className="my-4" />
    </div>
  );
}