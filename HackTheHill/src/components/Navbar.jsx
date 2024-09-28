// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Language Learner</h1>
            <ul className="nav-links">
                <li><Link to="/" className="nav-link" activeClassName="active-link">Home</Link></li>
                <li><Link to="/music" className="nav-link" activeClassName="active-link">Music</Link></li>
                <li><Link to="/books" className="nav-link" activeClassName="active-link">Books</Link></li>
                <li><Link to="/movies" className="nav-link" activeClassName="active-link">Movies</Link></li>
                <li><Link to="/chatbot" className="nav-link" activeClassName="active-link">Chatbot</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
