import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const NotFoundPage = () => {
  return (
    <div className="page-content page-fade-in" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      textAlign: "center"
    }}>
      <div style={{
        fontSize: "6rem",
        fontWeight: "bold",
        background: "linear-gradient(135deg, #22d3ee, #38bdf8, #a5b4fc)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "20px"
      }}>
        404
      </div>
      <h1 className="page-title" style={{ marginBottom: "16px" }}>
        Page Not Found
      </h1>
      <p className="page-subtitle" style={{ marginBottom: "32px" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/"
        style={{
          padding: "12px 32px",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #22d3ee, #38bdf8)",
          color: "white",
          fontWeight: "600",
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "inline-block",
          boxShadow: "0 4px 20px rgba(34, 211, 238, 0.4)"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-3px)";
          e.target.style.boxShadow = "0 6px 30px rgba(34, 211, 238, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 20px rgba(34, 211, 238, 0.4)";
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
};
