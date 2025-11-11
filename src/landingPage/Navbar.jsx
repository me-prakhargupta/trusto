import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <div className="container-fluid" id="navbar-container">
            <div className="row">
                <div className="col-12 col-md-4 mt-3 mb-2">
                    <Link to="/"><img className="brand-icon" src="media/images/logo-icon.png" alt="Trusto Icon"/></Link>
                    <Link to="/"><img className="brand-name-icon" src="media/images/logo.png" alt="trusto"/></Link>
                </div>
                <div className="col-12 col-md-8 mt-3">
                    <ul className="nav-links">
                        <li><Link to="/services" className="navbar-links fw-medium">Services</Link></li>
                        <li><Link to="/pricing" className="navbar-links fw-medium">Pricing</Link></li>
                        <li><Link to="/about" className="navbar-links fw-medium">About</Link></li>
                        <li><Link to="/support" className="navbar-links fw-medium">Support</Link></li>
                        <li><Link to="/signup" className="navbar-links fw-medium">Signup</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;