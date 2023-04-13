import React from "react";
import ConnectWithSales from "../common/ConnectWithSales";
import fareStructureOverviewImage from "../assets/farestructure-overview.png"

export default function FareStructureOverview() {
  return(
    <div>
      <div className="row mb-3">
        <div className="col-md-6">
          <h2 className="mt-3">FareStructure</h2>
          <p className="body-text">
            Connect your platform with Trip Ninja’s FareStructure API to unlock 
            better performance from your existing content sources without 
            interfering with existing systems. This API finds the best fare structure 
            with split resulting in higher markups on multi-city flights.
          </p>
          <a className="link-text primary-text" href="/farestructure/setup/">
            Get Started with Setup
            <i className="bi bi-chevron-right ms-1 right-arrow"></i>
          </a>
        </div>
        <div className="col-md-6">
          <img src={fareStructureOverviewImage} alt="farestructure flow diagram" className="image" />
        </div>
      </div>
      <hr className="my-4" />
      <div className="row mb-4">
        <div className="col-md-4">
          <p className="subtitle">
            Revenue Share
          </p>
          <p className="body-text">
            We get paid only when you get paid. 
            We split the revenue collected only 
            from the markups optimized for your itineraries.
          </p>
        </div>
        <div className="col-md-4">
          <p className="subtitle">
            Easy Integration
          </p>
          <p className="body-text">
            One straightforward API gets you access 
            to our entire product suite. Your existing 
            systems will not be affected.
          </p>
        </div>
        <div className="col-md-4">
          <p className="subtitle">
            Simple UpKeep
          </p>
          <p className="body-text">
            Our products are built to have an 
            outsized impact while running 
            quietly in the background, so you 
            can simply set it and forget it.
          </p>
        </div>
      </div>
      <ConnectWithSales />
    </div>
  );
}
