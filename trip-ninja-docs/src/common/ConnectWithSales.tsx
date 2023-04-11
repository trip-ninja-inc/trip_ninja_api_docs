import React from "react";
import "./Common.css";


export default function ConnectWithSales() {
  return(
    <div className="row connect-banner">
      <div className="col-8">
        <h3>Not setup with Trip Ninja?</h3>
        <p className="body-text mb-0">
          Don’t miss out on the unbeatable results from our API, talk to our sales 
          team to kickstart your Trip Ninja experience.
        </p>
      </div>
      <div className="col-4 my-auto text-end">
        <a 
          href="mailto:support@tripninja.io?subject=Connect with Sales - Developer Questions" 
          className="link-text primary-text"
        >
          Connect with Sales
          <i className="bi bi-chevron-right ms-1 right-arrow"></i>
        </a>
      </div>
    </div>
  );
}
