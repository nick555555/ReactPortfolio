import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="row">
                <div className="col s4 offset-s1">
                    <h5>Nicholas Seto</h5>
                </div>
                <div className="col s6 offset-s1">
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;