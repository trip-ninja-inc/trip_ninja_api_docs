import React from "react";
import "./NavBar.css"

export default function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg">
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
            <div className="col-sm-12">
              <button 
                className="navbar-toggler ms-auto" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse pt-3 ms-2" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active-link" aria-current="page" href="/">Home</a>
                <a className="nav-link" href="/farestructure/overview/">Farestructure</a>
                <a className="nav-link" href="/">Virtual Interlining</a>
                <a className="nav-link" href="/">Dynamic Packaging</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
