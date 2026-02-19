import React from "react";
import { profile } from "../data/profileData";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" }
];

export const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        marginBottom: 18
      }}
    >
      <div
        className="app-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          paddingBlock: 8
        }}
      >
        <div
          onClick={() => scrollTo("top")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer"
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "999px",
              border: "1px solid rgba(56,189,248,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at top, rgba(56,189,248,0.4), rgba(15,23,42,1))",
              boxShadow: "0 0 0 1px rgba(15,23,42,0.9)"
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700 }}>KK</span>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              {profile.name}
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>
              {profile.role}
            </div>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "flex-end"
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                border: "none",
                padding: "6px 10px",
                borderRadius: 999,
                background: "transparent",
                color: "#e5e7eb",
                cursor: "pointer",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "background 0.2s ease, color 0.2s ease"
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background:
                    "radial-gradient(circle at center, #22d3ee, transparent)"
                }}
              />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
