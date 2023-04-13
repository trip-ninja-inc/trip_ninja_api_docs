import React from "react";
import './Common.css';



export default function Footer() {
  return(
    <nav className="navbar container-fluid">
      <div className="d-flex flex-row mx-auto">
        <a className="footer-link">Privacy Policy</a>
        <a className="footer-link">Terms of Use</a>
        <a className="footer-link">Data Processing</a>
        <a className="footer-link">GDPR Data Protection</a>
      </div>
      <div className="d-flex flex-row mx-auto text-center">
        <p>
          2023 Trip Ninja Inc. Trip Ninja is a division of 
          Webjet Limited (ASX: WEB) – an ASX 200 listed company. 
          For more information, 
          <br/> visit <a href="http://webjetlimited.com" target="_blank">www.webjetlimited.com</a>
        </p>

      </div>
    </nav>
  );
}
