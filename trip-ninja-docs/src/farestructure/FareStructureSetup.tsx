import React from "react";
import fareStructureFlow from "../assets/farestructure-flow.png"

export default function FareStructureSetup() {
  return(
    <div className="">
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
      </div>
      <hr className="my-4" />
      <div>
        <h3>How It Works</h3>
        <p>
          The following diagram shows the typical data flow of API calls to Trip Ninja for a typical 
          OTA integration using our core non-emulation architecture.
        </p>
        <p className="fw-bold">Step 1 - /get-searches/</p>
        <p></p>
        <p className="fw-bold">Your Infrastructure</p>
        <p>
          You make the queries to the content providers identified in the set of content search queries 
          from Step 1 (via your existing API connections to these providers).
        </p>
        <p className="fw-bold">
          Step 2 - /generate-solutions/
        </p>
        <p>
          You then pass the resulting content payloads along to Trip Ninja.
          Trip Ninja consumes these content payloads, uses its algorithms to generate a set of optimal 
          itineraries and the ideal markup, and returns these itineraries to you.
        </p>
        <img src={fareStructureFlow} alt="farestructure flow diagram" className="image" />
      </div>
      <hr className="my-4" />
      <div>
        <h3>Authentication</h3>
        <p>
          Trip Ninja uses Basic Authentication standards. To authenticate, simply encode your API username 
          and password string using base64 and pass it to all authorization headers. The following example 
          shows how this can be done. Note: in the example, the payload and API endpoint URL are not shown.
        </p>
        <p className="subtitle">Python Example:</p>
      </div>
      <hr className="my-4" />
      <div>
        <h3>Error Codes</h3>
      </div>
    </div>
  );
}
