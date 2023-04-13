import React from "react";
import ConnectWithSales from "../common/ConnectWithSales";

export default function DynamicPackagingOverview() {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-6">
          <h2 className="mt-3">Dynamic Packaging</h2>
          <p className="body-text">
            Trip Ninja's Dynamic Packaging API builds
            multi-city packages with incredible value
            in real time using package-only flight fares and opaque hotel rates.
          </p>
          <a className="link-text primary-text" href="/dynamic_packaging/setup/">
            Get Started with Setup
            <i className="bi bi-chevron-right ms-1 right-arrow"></i>
          </a>
        </div>
        <div className="col-md-6">

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