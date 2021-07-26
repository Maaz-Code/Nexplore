import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-4" to="/">Nexplore</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-lg-4">
                                <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/recommend">Recommend</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/songs">Songs</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/anime">Anime</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/auth">Sign In</NavLink>
                            </li>
                         </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
