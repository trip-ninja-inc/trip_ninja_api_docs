import React, { useEffect, useState } from "react";
import "./NavBar.css"
import history from '../History';
import { NavLinkUrls } from "../common/GeneralConstants";

export default function NavBar() {

  const [pathName, setPathName] = useState('');

  history.listen((location: any, _: any) => setPathName(location.pathname));
  useEffect(() => setPathName(history.location.pathname), []);
  useEffect(() => console.log(pathName), [pathName]);

  const addNavLinkClass = (navType: string) => 
    `nav-link ${navType == pathName ? 'selected-link' : ''}`;

  return(
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 mt-4">
            <a className="navbar-brand ms-2" href="/">
              <img 
                src="https://s3.amazonaws.com/tn-api-docs/trip_ninja_logo.png" 
                alt="Trip Ninja Logo" 
                width="140" 
                height="40" 
                className="d-inline-block align-text-top"
              />
              <span className="logo-text ms-2 align-text-top">DOCS</span>
            </a>
            <a href="mailto:support@tripninja.io?subject=Connect with Sales - Developer Questions"
              target="_blank"
              type="button" 
              className="btn align-text-top" 
              id="contact-sales-button">
                Contact Sales
            </a>
            <div className="collapse navbar-collapse pt-3 ms-2" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className={addNavLinkClass(NavLinkUrls.HOME)} aria-current="page" href={NavLinkUrls.HOME}>
                    Home
                </a>
                <a className={addNavLinkClass(NavLinkUrls.FARESTRUCTURE)} href={NavLinkUrls.FARESTRUCTURE}>
                    Farestructure
                </a>
                <a className={addNavLinkClass(NavLinkUrls.VI)} href={NavLinkUrls.VI}>
                    Virtual Interlining
                </a>
                <a className={addNavLinkClass(NavLinkUrls.MSDP)} href={NavLinkUrls.MSDP}>
                    Dynamic Packaging
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
