// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Music from './components/Music';
import Books from './components/Books';
import Movies from './components/Movies';
import Chatbot from './components/Chatbot';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar at the top */}
        <div className="content">
          <Routes>
            <Route path="/music" element={<Music />} />
            <Route path="/books" element={<Books />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/" element={<Home />} /> {/* Default Home component */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Optional: Create a Home component
const Home = () => {
  return (
    <div>
      <h2>Welcome to Language Learner!</h2>
      <p>Select a category from the navigation bar to get started.</p>
    </div>
  );
};

export default App;
