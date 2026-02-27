import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profileData";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/certifications", label: "Certifications" },
  { path: "/awards", label: "Awards" },
  { path: "/contact", label: "Contact" }
];

export const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
        >
          <div className="navbar-avatar">
            <span style={{ fontSize: 14, fontWeight: 700 }}>KK</span>
          </div>
          <div className="navbar-profile">
            <div className="navbar-name">
              {profile.name}
            </div>
            <div className="navbar-role">
              {profile.role}
            </div>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-nav ${menuOpen ? 'navbar-nav-open' : ''}`}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredItem === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`navbar-link ${isActive ? 'navbar-link-active' : ''} ${isHovered ? 'navbar-link-hover' : ''}`}
              >
                <span className={`navbar-dot ${isActive ? 'navbar-dot-active' : ''}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
