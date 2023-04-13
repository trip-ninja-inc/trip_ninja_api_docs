import React from "react";
import getSearchesFlow from "../assets/core-get-searches-flow.png"
import { redocConfig } from "../common/RedocConfig";
import { RedocStandalone } from 'redoc';
import "./Redoc.css";


export default function GetSearches() {
  return(
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="mt-3">Get Searches</h2>
          <p>
          The <code>/get-searches/</code> endpoint is responsible for taking a traveller search request from your 
          platform and applying our FareStructure logic to determine the optimal queries predicted.
          </p>
          <p className="fw-semibold mb-0">The general flow is as follows:</p>
          <p className="mb-0">
            1. A traveller makes a search request on your platform for an itinerary and you send this 
            request from your platform to Trip Ninja using the <code>/get-searches/</code>endpoint.
          </p>
          <p>
            2. Trip Ninja reviews this search request, builds a set of optimal content search queries 
            for you to send to your content provider(s), and returns this set of content search queries to you.
          </p>
          <p>The response from this endpoint contains a list of queries to be done by your existing infrastructure.</p>
          <img src={getSearchesFlow} alt="get searches flow diagram" className="image" />
        </div>
      </div>
      <hr className="mt-5 mb-0"/>
      <RedocStandalone 
        specUrl="https://api.redocly.com/registry/bundle/trip-ninja/FareStructure%20-%20Core/v0/openapi.yaml?branch=main" 
        options={redocConfig}
      />
    </div>
  );
}
