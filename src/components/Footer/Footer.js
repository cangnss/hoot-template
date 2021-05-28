import React from 'react'
import hoot from '../../img/hoot.png';
import './Footer.css';

function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-3">
                            <img src={hoot} className="img-fluid" />
                        </div>
                        <div className="mb-3">
                            <span className="fw-bold">Hoot helps you connect the brightest minds of tomorrow,today!</span>
                        </div>
                        <div className="d-flex flex-row">
                            <i class="fab fa-facebook fa-4x p-3 fc"></i>
                            <i class="fab fa-linkedin fa-4x p-3 linkedin"></i>
                            <i class="fab fa-instagram fa-4x p-3 instagram"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ul className="about-list">
                            <li className="about-list-title">About us</li>
                            <li>Our story</li>
                            <li>Contact us</li>
                            <li>Privacy policy</li>
                            <li>Terms of service</li>
                            <li>Intellectual property claims</li>
                            <li>Trust and safety</li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                        <div>
                            <ul className="browse-list">
                                <li className="browse-list-title">Browse</li>
                                <li>Be a gigster</li>
                                <li>Hire a gigster</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="browse-list">
                                <li className="browse-list-title">Process</li>
                                <li>How it works</li>
                                <li>FAQ</li>
                                <li>Why us?</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                        <div className="mb-3">
                            <span className="fw-bold">Sign up to our newsletter</span>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email address" />
                        </div>
                        <div className="mb-3">
                            <button type="button" className="subs-btn">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-md-12 text-center mx-auto mt-5 mb-2">
                        <span>&copy; 2015 - 2021 Hoot Inc. Design Ali Can Güneş</span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer;