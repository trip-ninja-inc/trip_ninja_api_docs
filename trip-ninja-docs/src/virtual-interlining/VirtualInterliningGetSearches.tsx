import getSearchesFlow from "../assets/core-get-searches-flow.png"
import getSearchesDocs from "../openapi/farestructure_core_get_searches.json";
import { redocConfig } from "../common/RedocConfig";
import { RedocStandalone } from 'redoc';
// import "./Redoc.css";
import Pagination from "../common/Pagination";


export default function GetSearches() {
  return(
    <div>
      <div className="api-details">
        <h2 className="mt-3">Get Searches</h2>
        <p>
          The <code>/get-searches/</code> endpoint is responsible for taking a traveller 
					search request from your platform and applying our Virtual Interlining and FareStructure 
					logic to determine the optimal queries predicted.
        </p>
				<div className="d-flex flex-row">
					<h3 className="mb-0">Request</h3>
					<p className="mx-2"><code>POST</code> /get-searches/</p>
				</div>
        <p className="mb-0">
					Virtual Interlining is an optional boolean request parameter within 
					FareStructure’s <code>/get-searches/</code> endpoint. Setting virtual_interlining 
					to <code>true</code> will include virtual interlining itineraries in the response. Please refer 
					to <a href="/farestructure/get-searches">FareStructure Get Searches</a> for the rest of the request schema.
        </p>
        <hr className="mt-3 mb-0"/>
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
