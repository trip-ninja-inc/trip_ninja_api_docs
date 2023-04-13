import React from "react";
import dynamicPackagingFlow from "../assets/dynamic-packaging-flow.png"
import Authentication from "../common/Authentication";


export default function DynamicPackagingSetup() {
  return(
    <div className="">
      <h2 className="mt-3">Dynamic Packaging Setup</h2>
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
        <p className="fw-bold mb-0">Before you start, please ensure that:</p>
        <p className="mb-0">1. IP addresses have been provided to be whitelisted for our servers.</p>
        <p>2. PCC/OfficeID emulation via Trip Ninja's PCC/OfficeID has been set up.</p>
        <p>3. API username and password have been provided by Trip Ninja.</p>
      </div>
      <hr className="my-4" />
      <div>
        <h3>How It Works</h3>
        <p>
          Multi-Stop Dynamic Packaging (MSDP) provides an alternative to traditional static packaging.
          It allows users to build packages as they go. While users search for multi-destination flights,
          MSDP will find eligible hotels with which to bundle.
        </p>
        <p>Please refer to the following diagram for the general MSDP flow.</p>
        <img src={dynamicPackagingFlow} alt="farestructure flow diagram" className="image" />
      </div>
      <hr className="my-4" />
      <Authentication />
      <hr className="my-4" />
      <div>
        <h3>Error Codes</h3>
      </div>
    </div>
  );
}
