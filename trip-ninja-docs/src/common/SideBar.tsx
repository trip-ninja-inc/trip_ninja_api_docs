import React from "react";

interface SideBarNavProps {
  currentView: string;
}

export default function SideBarNav() {
  return(
    <div className="sidebar">
      <div className="sidebar-item sidebar-border">
        <a className="nav-link sidebar-link active" aria-current="page" href="/farestructure/overview/">Overview</a>
      </div>
      <div className="sidebar-item sidebar-border">
        <a className="nav-link sidebar-link" href="/farestructure/setup/">Setup</a>
      </div>
      <div className="sidebar-item">
        <p className="fw-semibold sidebar-link">Endpoints</p>
        <a className="nav-link sidebar-link mb-2" href="/farestructure/get-searches/">Get Searches</a>
        <a className="nav-link sidebar-link" href="/farestructure/generate-solutions/">Generate Solutions</a>
      </div>
    </div>
  );
}
