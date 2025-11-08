import React from "react";
import { Link } from "react-router";
import "./Footer.css"

function Footer() {
    return(
        <div className="container-fluid" id="footer-container">
            <div className="row">
                <div className="col-12 col-md-6 mt-5">
                    <div className="brand-logo">
                        <a href=""><img className="brand-icon" src="media/images/logo-icon.png" alt="Trusto Icon"/></a>
                        <a href=""><img className="brand-name-icon" src="media/images/logo.png" alt="trusto"/></a>
                    </div>
                    <p className="mt-3">We take care of the paperwork, so you don’t have to.</p>
                </div>
                <div className="col-12 socials-list col-md-6 mt-5">
                    <ul className="socials-icons fs-2">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="https://www.x.com/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-x-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-linkedin"></i></a></li>
                </ul>
                </div>
                <hr className="border-line"/>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 mt-4 footer-links-col">
                    <h4 className="">Company</h4>
                    <ul className="footer-links mt-2">
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 mt-4 footer-links-col">
                    <h4 className="">Legal</h4>
                    <ul className="footer-links mt-2">
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Refund Policy</a></li>
                        <li><a href="">Cookies Policy</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 mt-4 footer-links-col">
                    <h4 className="">Resources</h4>
                    <ul className="footer-links mt-2">
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Guide</a></li>
                        <li><a href="">Tutorials</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <form className="newsletter-form mt-4 mb-5">
                    <h5 className="fw-semibold fs-5">Subscribe to our newsletter</h5>
                    <p className="newsletter-info fs-6 mt-2 mb-3">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <input type="email" className="newsletter-input-form" placeholder="Enter your email"/>
                    <button className="newsletter-btn">Subscribe</button>
                </form>
                <p className="brand-msg mb-5 fw-bolder"><span><a href="">Trusto — Your Work, Our Responsibility</a></span></p>
            </div>
        </div>
    );
};

export default Footer;
