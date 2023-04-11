import React from "react";
import "./NavBar.css"

export default function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <a className="navbar-brand" href="/">
              <img 
                src="https://s3.amazonaws.com/tn-api-docs/trip_ninja_logo.png" 
                alt="Trip Ninja Logo" 
                width="140" 
                height="40" 
                className="d-inline-block align-text-top"
              />
              <span className="logo-text ms-2 align-text-top">DOCS</span>
            </a>
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
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
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
