import React from "react";
import Pagination from "../common/Pagination";


export default function VirtualInterliningGenerateSolutions() {
  return (
    <div>
      <div className="api-details">
        <h2 className="mt-3">Generate Solutions</h2>
        <p>
					After your infrastructure has made the queries to your content sources that Trip Ninja defined 
					in <code>/get-searches/</code>, the <code>/generate-solutions/</code> endpoint will 
					generate a set of optimal itineraries including the ideal markup and virtually 
					interlined itineraries and then return them to you. You can then present those 
					itineraries on the front end of your platform to your customers.
        </p>
        <div className="d-flex flex-row">
          <h3 className="mb-0">Request</h3>
          <p className="mx-2">
            <code>POST</code> /generate-solutions/
          </p>
        </div>
				<p>
					Please refer to <a href="/farestructure/generate-solutions/">
						FareStructure Generate Solutions</a> for the rest of the request schema.
				</p>
				<h3 className="mb-2">Response</h3>
				<p>
				In each segment returned in the response, there is a boolean property
				called <code>virtual_interline</code> that displays whether the segment is a Virtually Interlined 
				itinerary or not. You can use this to filter out results on your front end systems. Please refer
				 to <a href="/farestructure/generate-solutions/">FareStructure Generate Solutions</a> for 
				the rest of the response schema. 
				</p>
				<hr className="mt-3 mb-0" />

        <hr className="mt-3 mb-3" />
				<h3 className="mb-2">Booking Tips</h3>
				<p>
					If booking an itinerary that has a combination of  Low Cost Carrier (LCC) and Global Distribution System
					(GDS) flights, it is recommended that you process the booking for the LCC flight first. If the LCC booking 
					is successful, then proceed with booking the GDS flight. This is because oftentimes LCCs do not have good 
					cancellation policies and can be more prone to booking failure. 
				</p>
				<div className="info-chip-teal">
					If you have questions about how Virtual Interlining works, or need any other help, please reach out 
					to us at support@tripninja.io.
				</div>

      </div>
      <Pagination
        prevPageText="Setup"
        prevPageUrl="/virtual-interlining/setup/"
        nextPageText="Generate Solutions"
        nextPageUrl="/virtual-interlining/generate-solutions/"
      />
    </div>
  );
}
