import React from 'react'
import './Navbar.css';
import hoot from '../../img/hoot.png';

function Navbar() {
    return (
        <section id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={hoot} alt="" width="auto" height="auto" class="d-inline-block align-text-top" />
                    </a>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">How it works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Become a provider</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-buttons">
                        <button className="btn btn-secondary sign-in">Sign in</button>
                        <button className="btn btn-secondary ms-2 sign-up">Sign up</button>
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Navbar;