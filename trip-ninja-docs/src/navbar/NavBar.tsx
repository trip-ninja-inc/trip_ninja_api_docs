import React, { useEffect, useState } from "react";
import "./NavBar.css";
import history from "../History";
import { NavLinkUrls } from "../common/GeneralConstants";

export default function NavBar() {
  const [pathName, setPathName] = useState("");

  history.listen((location: any, _: any) => setPathName(location.pathname));
  useEffect(() => setPathName(history.location.pathname), []);
  useEffect(() => console.log(pathName), [pathName]);

  const addNavLinkClass = (navType: string) =>
    `nav-link ${navType == pathName ? "selected-link" : ""}`;

  return (
    <>
      <nav className="navbar navbar-top navbar-expand">
        <div className="d-flex flex-row container-fluid">
          <a className="navbar-brand ms-3" href="/">
            <img
              src="https://s3.amazonaws.com/tn-api-docs/trip_ninja_logo.png"
              alt="Trip Ninja Logo"
              width="140"
              height="40"
              className="d-inline-block align-text-top"
            />
            <span className="logo-text ms-2 vertical-align-middle">DOCS</span>
          </a>
          <div className="mr-auto p-2">
            <a
              href="mailto:support@tripninja.io?subject=Connect with Sales - Developer Questions"
              target="_blank"
              type="button"
              className="btn"
              id="contact-sales-button"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-bottom navbar-expand">
        <div className="d-flex flex-row container-fluid">
          <div className="navbar-nav ms-3 mt-3">
            <a
              className={addNavLinkClass(NavLinkUrls.HOME)}
              aria-current="page"
              href={NavLinkUrls.HOME}
            >
              Home
            </a>
            <a
              className={addNavLinkClass(NavLinkUrls.FARESTRUCTURE)}
              href={NavLinkUrls.FARESTRUCTURE}
            >
              Farestructure
            </a>
            <a
              className={addNavLinkClass(NavLinkUrls.VI)}
              href={NavLinkUrls.VI}
            >
              Virtual Interlining
            </a>
            <a
              className={addNavLinkClass(NavLinkUrls.MSDP)}
              href={NavLinkUrls.MSDP}
            >
              Dynamic Packaging
            </a>
          </div>
          <a
            className="support-faq-link mr-auto p-2 mt-3"
            href="https://help.tripninja.io/"
            target="_blank"
          >
            Support/FAQ
          </a>
        </div>
      </nav>
    </>
  );
}
