import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink exact to="/"><a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about"><a className="nav-link" href="#">About</a></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/activities"><a className="nav-link" href="#">Activities</a></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pricing"><a className="nav-link" href="#">Pricing</a></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact"><a className="nav-link" href="#">Contact</a></NavLink>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export {Nav}