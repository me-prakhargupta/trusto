import React from "react";
import "./NotFound.css"

function NotFound() {
    return(
        <div className="container-fluid">
            <div className="row not-found-page">
                <p className="">The page you're looking for can't be found.</p>
            </div>
            <div className="row">
                <form className="error-form">
                    <input className="error-input" placeholder="Search trusto.life"/>
                </form>
            </div>
            <div className="row">
                <p className="visit-site"><a href="">Or visit our site <i class="fa-solid fa-angle-right"></i></a></p>
            </div>
        </div>
    );
};

export default NotFound;