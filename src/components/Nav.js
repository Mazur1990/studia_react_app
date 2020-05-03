import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <NavLink exact to="/"><a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a></NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/about"><a class="nav-link" href="#">About</a></NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/pricing"><a class="nav-link" href="#">Pricing</a></NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/carrier"><a class="nav-link" href="#">Carrier</a></NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/contact"><a class="nav-link" href="#">Contact</a></NavLink>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export {Nav}