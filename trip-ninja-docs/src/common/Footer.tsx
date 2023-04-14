import React from "react";
import './Common.css';
import "./../index.css"


export default function Footer() {
  return(
    <footer className="navbar container-fluid body-text secondary-text flex-column my-auto">
      <footer className="d-flex flex-row mx-auto">
        <a className="footer-link" 
          href="https://quicktrip-documents.s3-us-west-2.amazonaws.com/Privacy+Policy.pdf"
          target="_blank"
        >
          Privacy Policy
        </a>
        <a className="footer-link" 
          href="https://quicktrip-documents.s3-us-west-2.amazonaws.com/Terms+of+Use.pdf"
          target="_blank"
        >
          Terms of Use
        </a>
        <a className="footer-link" 
          href="https://www.tripninja.io/legal/data-processing"
          target="_blank"  
        >
          Data Processing
        </a>
        <a className="footer-link" 
          href="https://www.tripninja.io/legal/gdpr"
          target="_blank"
        >
          GDPR Data Protection
        </a>
      </footer>
      <footer className="d-flex flex-row mx-3 text-center mt-2">
        <p>
          2023 Trip Ninja Inc. Trip Ninja is a division of 
          Webjet Limited (ASX: WEB) – an ASX 200 listed company. 
          For more information, visit
          <a href="http://webjetlimited.com" target="_blank" className="footer-link">
            www.webjetlimited.com
          </a>
        </p>
      </footer>
    </footer>
  );
}
