

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {

    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? '/Portfolio' : '/';

    return (
        <Router basename={basePath}>
            <div className="app-container">
                <nav className="sidebar">
                    <h1 className="sidebar-name">Ridvan</h1>
                    
                    <h1 className = "sidebar-title">Designer / Developer</h1>

                    <hr className="sidebar-separator" />

                    <Link to="/" className="sidebar-link">Home</Link>
                    <hr className="sidebar-separator" />
                    <Link to="/about" className="sidebar-link">About</Link>
                    <hr className="sidebar-separator" />
                    <Link to="/projects" className="sidebar-link">Projects</Link>
                    <hr className="sidebar-separator" />
                    <Link to="/contact" className="sidebar-link">Contact</Link>
                    <hr className="sidebar-separator" />

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/ridvan-suleymanov-profile/" target="_blank" className="sidebar-icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Ridvan2002" target="_blank" className="sidebar-icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://discord.gg/hu8gHTS4" target="_blank" className="sidebar-icon">
                            <i className="fab fa-discord"></i>
                        </a>
                        <a href="https://x.com/Ridvan_2002" target="_blank" className="sidebar-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </nav>

                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;