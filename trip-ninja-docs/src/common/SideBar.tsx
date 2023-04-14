import React from "react";

interface SideBarNavProps {
  currentView: string;
  product: string;
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
        <a 
          className={`nav-link sidebar-link mb-2 ${getActiveLink("get-searches")}`} 
          href={`/${props.product}/get-searches/`}
        >
          Get Searches
        </a>
        <a 
          className={`nav-link sidebar-link ${getActiveLink("generate-solutions")}`} 
          href={`/${props.product}/generate-solutions/`}
        >
          Generate Solutions
        </a>
      </div>
    </div>
  );
}
