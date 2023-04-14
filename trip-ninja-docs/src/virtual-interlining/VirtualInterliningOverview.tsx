import React from "react";
import ConnectWithSales from "../common/ConnectWithSales";
import virtualInterliningOverviewImage from "../assets/virtual-interlining-overview.png"
import Pagination from "../common/Pagination";


export default function VirtualInterliningOverview() {
  return(
    <div className="min-vh-100">
      <div className="row mb-3">
        <div className="col-md-6">
          <h2 className="mt-3">Virtual Interlining</h2>
          <p className="body-text">
            Trip Ninja’s Virtual Interlining (VI) API creates connections 
            between airlines without interlining agreements to increase flight 
            options and decrease itinerary costs.
          </p>
          <a className="link-text primary-text" href="/virtual-interlining/setup/">
            Get Started with Setup
            <i className="bi bi-chevron-right ms-1 arrow"></i>
          </a>
        </div>
        <div className="col-md-6">
          <img src={virtualInterliningOverviewImage} alt="arrival departure board" className="image" />
        </div>
      </div>
      <hr className="my-4" />
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="subtitle">
            
          </p>
          <p className="body-text">
            
          </p>
        </div>
        <div className="col-md-4">
          <p className="subtitle">
            
          </p>
          <p className="body-text">
            
          </p>
        </div>
        <div className="col-md-4">
          <p className="subtitle">
            
          </p>
          <p className="body-text">
            
          </p>
        </div>
      </div>
      <ConnectWithSales />
      <Pagination 
        nextPageText="Setup"
        nextPageUrl="/virtual-interlining/setup/"
      />
    </div>
  );
}