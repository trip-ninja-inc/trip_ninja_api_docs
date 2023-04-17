import React from "react";
import MetricLabel from "./MetricLabel";
import ConnectWithSales from "../common/ConnectWithSales";
import homepageImage from "../assets/homepage-image.png";

export default function HomePage() {
  return(
    <div className="row justify-content-center my-5 mx-3">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3">Trip Ninja Developer Hub</h1>
            <p>
              Make the most out of your flights content with our API 
              services. Explore our guides for easy API integration and 
              setup of our amazing products.
            </p>
            <a className="link-text primary-text" href="/farestructure/overview/">
              Get Started with FareStructure
              <i className="bi bi-chevron-right ms-1 arrow"></i>
            </a>
          </div>
          <div className="col-md-6">
            <img src={homepageImage} alt="homepage" className="image" />
          </div>
        </div>
        <div className="row mt-5 text-center">
          <MetricLabel 
            metric="125%"
            label="Increased revenue per search on multi-city flights"
          />
          <MetricLabel 
            metric="64%"
            label="Cheaper flights"
          />
          <MetricLabel 
            metric="30%"
            label="Decrease in average fare"
          />
          <MetricLabel 
            metric="Higher"
            label="Conversions"
          />
        </div>
        <div className="mt-4">
          <ConnectWithSales />
        </div>
      </div>
    </div>
  );
}
