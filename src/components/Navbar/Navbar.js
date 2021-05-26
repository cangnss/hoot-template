import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <section id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">HOOT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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