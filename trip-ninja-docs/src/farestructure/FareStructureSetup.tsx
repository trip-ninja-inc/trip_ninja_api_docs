import React from "react";
import fareStructureFlow from "../assets/farestructure-flow.png"
import Authentication from "../common/Authentication";
import ErrorCodes from "../common/ErrorCodes";
import Pagination from "../common/Pagination";


export default function FareStructureSetup() {
  return(
    <div>
      <h2 className="mt-3">FareStructure Setup</h2>
      <p>
        FareStructure is the infrastructure base for all of Trip Ninja’s API products. 
      </p>
      <p>
        Trip Ninja uses a <b>REST API</b> with requests and responses in <b>JSON</b> format. 
        Please use the pre-production servers for development and testing. Once you are ready to go live, 
        we will provide you access to the production servers.
      </p>
      <hr className="my-4" />
      <div>
        <h3>Trip Ninja API URLs</h3>
        <p>
          Pre-Production: 
          <a href="https://preprodapi.tripninja.io" className="primary-text ps-2">
            https://preprodapi.tripninja.io
          </a>
        </p>
        <p>
          For security, Trip Ninja’s servers are only accessible from whitelisted IPs. Please contact 
          your account manager to whitelist the IPs you will be using.
        </p>
        <p className="fw-semibold mb-0">Before you start, please ensure that:</p>
        <p className="mb-0">1. You have sent us your IP addresses to be whitelisted for Trip Ninja's servers.</p>
        <p>2. You have been provided with an API username and password by Trip Ninja.</p>
        <div className="info-chip-teal">
          If you don’t have an API username and password, or need any other help, 
          please reach out to us at support@tripninja.io.
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <h3>How It Works</h3>
        <p>
          The following diagram shows the typical data flow of API calls to Trip Ninja for a typical 
          OTA integration using our core non-emulation architecture.
        </p>
        <p className="fw-semibold mb-0">Step 1 - /get-searches/</p>
        <ul>
          <li>
            A traveller makes a search request on your platform for an itinerary and you send this request 
            from your platform to Trip Ninja.
          </li> 
          <li>
            Trip Ninja reviews this search request, builds a set of optimal content search queries using 
            machine learning for you to send to your content provider(s), and returns this set of content 
            search queries to you.
          </li>
        </ul>
        <p className="fw-semibold mb-0">Your Infrastructure</p>
        <ul>
          <li>
            You make the queries to the content providers identified in the set of content search queries 
            from Step 1 (via your existing API connections to these providers).
          </li>
        </ul>
        <p className="fw-semibold mb-0">
          Step 2 - /generate-solutions/
        </p>
        <ul>
          <li>
            You then pass the resulting content payloads along to Trip Ninja.
          </li>
          <li>
            Trip Ninja consumes these content payloads, uses its algorithms to generate a set of optimal 
            itineraries and the ideal markup, and returns these itineraries to you.
          </li>
        </ul>
        <img src={fareStructureFlow} alt="farestructure flow diagram" className="image" />
      </div>
      <hr className="my-4" />
      <Authentication />
      <hr className="my-4" />
      <ErrorCodes />
      <Pagination
        prevPageText="Overview"
        prevPageUrl="/farestructure/overview/"
        nextPageText="Get Searches"
        nextPageUrl="/farestructure/get-searches/"
      />
    </div>
  );
}
