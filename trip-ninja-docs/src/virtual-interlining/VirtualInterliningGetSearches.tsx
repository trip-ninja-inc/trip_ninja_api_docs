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
        <div></div>
        <hr className="mt-3 mb-3"/>
        <h3 className="mb-0">Request Sample</h3>
        <div></div>
        <hr className="mt-3 mb-3"/>
        <h3 className="mb-3">Response</h3>
        <p>
          If virtual_interlining is true, you will get virtual interlining itineraries in a 
          successful /get-searches/ response. Please refer to FareStructure Get Searches 
          for the rest of the response schema. 
        </p>
        <p>
          One thing to note, is that in the datasource_request response under datasource_segment, 
          the id for virtually interlined segments can be represented as an integer. 
          See below for the specific response parameter
        </p>
        <hr className="mt-3 mb-0"/>
        <div></div>
        <hr className="mt-3 mb-3"/>
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
