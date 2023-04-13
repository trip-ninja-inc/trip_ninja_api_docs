import React from "react";

interface SideBarNavProps {
  currentView: string;
}

export default function SideBarNav() {
  return(
    <div className="sidebar p-5">
      <nav className="nav flex-column">
        <a className="nav-link sidebar-link active" aria-current="page" href="/farestructure/overview/">Overview</a>
        <a className="nav-link sidebar-link" href="/farestructure/setup/">Setup</a>
        <p className="fw-semibold nav-link sidebar-link">Endpoints</p>
        <a className="nav-link sidebar-link" href="/farestructure/get-searches/">Get Searches</a>
        <a className="nav-link sidebar-link" href="/farestructure/generate-solutions/">Generate Solutions</a>
      </nav>
    </div>
  );
}
