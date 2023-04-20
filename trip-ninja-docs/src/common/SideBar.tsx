import React from "react";
import "./Common.css";


interface SideBarNavProps {
  currentView: string;
  product: string;
  endpoints: any;
}

export default function SideBarNav(props: SideBarNavProps) {

  const getActiveLink = (link: string) => props.currentView === link ? "active" : "";

  return(
    <div className="sidebar">
      <div className="sidebar-item sidebar-border">
        <a 
          className={`nav-link sidebar-link ${getActiveLink("overview")}`} 
          href={`/${props.product}/overview/`}
        >
          Overview
        </a>
      </div>
      <div className="sidebar-item sidebar-border">
        <a 
          className={`nav-link sidebar-link ${getActiveLink("setup")}`} 
          href={`/${props.product}/setup/`}
        >
          Setup
        </a>
      </div>
      <div className="sidebar-item">
        <p className="fw-semibold sidebar-link">Endpoints</p>
        <>{Object.keys(props.endpoints).map(function(key: string, index) {
            return (
              <a
                className={`nav-link sidebar-link mb-2 ${getActiveLink(key)}`}
                href={`/${props.product}/${key}/`}
              >
                {props.endpoints[key]}
              </a>
            );
          })
        }</>
      </div>
    </div>
  );
}
