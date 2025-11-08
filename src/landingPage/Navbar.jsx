import React from "react";
import "./Navbar.css";

function Navbar() {
    return(
        <div className="container-fluid" id="navbar-container">
            <div className="row">
                <div className="col-12 col-md-4 mt-3 mb-2">
                    <a href=""><img className="brand-icon" src="media/images/logo-icon.png" alt="Trusto Icon"/></a>
                    <a href=""><img className="brand-name-icon" src="media/images/logo.png" alt="trusto"/></a>
                </div>
                <div className="col-12 col-md-8 mt-3">
                    <ul className="nav-links">
                        <li><a href="" className="navbar-links fw-medium">Services</a></li>
                        <li><a href="" className="navbar-links fw-medium">Pricing</a></li>
                        <li><a href="" className="navbar-links fw-medium">About</a></li>
                        <li><a href="" className="navbar-links fw-medium">Support</a></li>
                        <li><a href="" className="navbar-links fw-medium">Signup</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;