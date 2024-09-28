// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Language Learner</h2>
      <ul className="navbar-links">
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/chatbot">Chatbot</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
