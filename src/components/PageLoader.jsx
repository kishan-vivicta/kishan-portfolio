import React from "react";

export const PageLoader = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at top, #111827 0, #020617 45%, #000 100%)",
      zIndex: 9999
    }}>
      <div className="loading-spinner"></div>
      <p style={{
        marginTop: "20px",
        color: "#22d3ee",
        fontSize: "1.1rem",
        fontWeight: "500"
      }}>
        Loading...
      </p>
    </div>
  );
};
