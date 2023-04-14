import React from "react";
import generateSolutionsFlow from "../assets/core-generate-solutions-flow.png"
import { redocConfig } from "../common/RedocConfig";
import { RedocStandalone } from 'redoc';
import "./Redoc.css";
import Pagination from "../common/Pagination";


export default function GenerateSolutions() {
  return(
    <div>
      <div className="api-details">
        <h2 className="mt-3">Generate Solutions</h2>
        <p>
          After your infrastructure has made the queries to your content sources that Trip Ninja defined in 
          <code>/get-searches/</code>, the <code>/generate-solutions/</code> endpoint will generate a set 
          of optimal itineraries including the ideal markup on those itineraries and then return them to you. 
          You can then present those itineraries on the front end of your platform to your customers.
        </p>
        <p>
          The <code>/generate-solutions/</code> endpoint contains an 
          <span className="fw-semibold"> optional metadata field</span> that exists on 
          each query that your infrastructure performs. This field contains any metadata that you want to 
          pass in (branded fares, tax info, etc.). 
        </p>
        <p className="fw-semibold">
          There are two different ways to approach this optional metadata field:
        </p>
        <p className="fw-semibold mb-0">1. Include Metadata Field</p>
        <ul>
          <li>
            If you choose to include the metadata field, we will pass you these values in a list inside 
            the corresponding itinerary when we have finished generating the itineraries for the search.
            <ul>
              <li>
                <span className="fw-semibold">Pros:</span> The benefit of this extra metadata data is 
                that the response from the <code>/generate-solutions/ </code>
                endpoint will be ready to be displayed on the front end of your platform.
              </li>
              <li>
                <span className="fw-semibold">Cons:</span> This will inflate the request/response 
                size considerably which can result in longer loading times.
              </li>
            </ul>
          </li>
        </ul>
        <p className="fw-semibold mb-0">2. Ignore MetaData Field</p>
        <ul>
          <li>In approach, your infrastructure will only send the required fields listed in our docs.</li>
          <ul>
              <li>
                <span className="fw-semibold">Pros:</span> This will result in a much smaller request/response.
              </li>
              <li>
                <span className="fw-semibold">Cons:</span> It will be up to your infrastructure and platform 
                to process the data and add any additional metadata to the itineraries returned.
              </li>
            </ul>
        </ul>
        <img src={generateSolutionsFlow} alt="get searches flow diagram" className="image" />
        <hr className="mt-5 mb-0"/>
      </div>
      <RedocStandalone 
        specUrl="https://api.redocly.com/registry/bundle/trip-ninja/FareStructure%20-%20Core%20-%20Generate%20Solutions/v0/openapi.yaml?branch=main" 
        options={redocConfig}
      />
      <Pagination
        prevPageText="Get Searches"
        prevPageUrl="/farestructure/get-searches/"
      />
    </div>
  );
}
