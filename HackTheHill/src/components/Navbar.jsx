// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
