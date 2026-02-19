import React, { useState, useEffect } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "radial-gradient(circle at top, #111827 0, #020617 45%, #000 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      animation: progress === 100 ? "fadeOut 0.5s forwards" : "none"
    }}>
      <div style={{
        width: "60px",
        height: "60px",
        border: "4px solid rgba(56, 189, 248, 0.2)",
        borderTop: "4px solid #22d3ee",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        marginBottom: "24px",
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)"
      }} />
      
      <div style={{
        fontSize: "1.2rem",
        color: "#e5e7eb",
        marginBottom: "16px",
        background: "linear-gradient(135deg, #e5e7eb, #a5b4fc, #22d3ee)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "600"
      }}>
        Loading Portfolio...
      </div>
      
      <div style={{
        width: "200px",
        height: "4px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "2px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
          borderRadius: "2px",
          transition: "width 0.3s ease",
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)"
        }} />
      </div>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
};
