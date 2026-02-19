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

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(18px)",
        background:
          "linear-gradient(to bottom, rgba(15,23,42,0.96), rgba(15,23,42,0.7), transparent)",
        borderBottom: "1px solid rgba(148,163,184,0.25)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div
        className="app-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          paddingBlock: 12
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "999px",
              border: "2px solid rgba(56,189,248,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at top, rgba(56,189,248,0.4), rgba(15,23,42,1))",
              boxShadow: "0 0 20px rgba(56,189,248,0.3)"
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700 }}>KK</span>
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#e5e7eb" }}>
              {profile.name}
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>
              {profile.role}
            </div>
          </div>
        </Link>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "flex-end"
          }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredItem === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: isActive 
                    ? "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(34,211,238,0.15))"
                    : isHovered 
                    ? "rgba(56,189,248,0.1)" 
                    : "transparent",
                  color: isActive ? "#22d3ee" : "#e5e7eb",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.3s ease",
                  border: isActive ? "1px solid rgba(56,189,248,0.3)" : "1px solid transparent",
                  boxShadow: isActive ? "0 0 15px rgba(56,189,248,0.2)" : "none",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)"
                }}
              >
                <span
                  style={{
                    width: isActive ? 8 : 6,
                    height: isActive ? 8 : 6,
                    borderRadius: 999,
                    background: isActive
                      ? "radial-gradient(circle at center, #22d3ee, #38bdf8)"
                      : isHovered
                      ? "radial-gradient(circle at center, #22d3ee, transparent)"
                      : "rgba(34,211,238,0.5)",
                    transition: "all 0.3s ease",
                    boxShadow: isActive ? "0 0 8px #22d3ee" : "none"
                  }}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
