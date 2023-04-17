import React from "react";
import ConnectWithSales from "../common/ConnectWithSales";
import virtualInterliningOverviewImage from "../assets/virtual-interlining-overview.png"
import Pagination from "../common/Pagination";
import vennIcon from "../assets/venn-icon.svg";
import './VirtualInterlining.css'

export default function VirtualInterliningOverview() {
  return(
    <div className="min-vh-100">
      <div className="row mb-3">
        <div className="col-md-6 mt-3">
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
          <i className="bi bi-airplane-fill icon"></i>
          <p className="subtitle">
            VI with your Content
          </p>
          <p className="body-text">
            Trip Ninja is the only solution worldwide to 
            provide you Virtual Interlining 
            connections with all your content sources.
          </p>
        </div>
        <div className="col-md-4">
          <img src={vennIcon} alt="venn diagram icon" className="venn-icon" />
          <p className="subtitle">
            More Options
          </p>
          <p className="body-text">
            Accessing a wider range of flights and airline combinations 
            gives travellers more travel options and flexibility.
          </p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-arrow-repeat icon"></i>
          <p className="subtitle">
            Cheaper Fares/Itineraries
          </p>
          <p className="body-text">
            Our machine-learning algorithms analyze flight data and pricing 
            to find the most cost-effective solutions for travellers.
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