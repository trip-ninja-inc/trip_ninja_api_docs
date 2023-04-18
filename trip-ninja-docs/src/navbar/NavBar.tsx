import { useEffect, useState } from "react";
import "./NavBar.css";
import history from "../History";
import { NavLinkUrls } from "../common/GeneralConstants";

export default function NavBar() {
  const [pathName, setPathName] = useState("");

  history.listen((location: any, _: any) => setPathName(location.pathname));
  useEffect(() => setPathName(history.location.pathname), []);

  const addActiveLinkId = (navType: string) => 
    navType === pathName ? "selected-link" : ""

  return (
    <nav className="sticky-top">
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
              className="nav-link"
              aria-current="page"
              href={NavLinkUrls.HOME}
              id={addActiveLinkId(NavLinkUrls.HOME)}
            >
              Home
            </a>
            <a
              className="nav-link"
              href={NavLinkUrls.FARESTRUCTURE}
              id={addActiveLinkId(NavLinkUrls.FARESTRUCTURE)}
            >
              Farestructure
            </a>
            <a
              className="nav-link"
              href={NavLinkUrls.VI}
              id={addActiveLinkId(NavLinkUrls.VI)}
            >
              Virtual Interlining
            </a>
            <a
              className="nav-link"
              href={NavLinkUrls.MSDP}
              id={addActiveLinkId(NavLinkUrls.MSDP)}
            >
              Dynamic Packaging
            </a>
          </div>
          <a
            className="nav-link mr-auto p-2 mt-3"
            href={NavLinkUrls.SUPPORT}
            id={addActiveLinkId(NavLinkUrls.SUPPORT)}
          >
            Support/FAQ
          </a>
        </div>
      </nav>
    </nav>
  );
}
