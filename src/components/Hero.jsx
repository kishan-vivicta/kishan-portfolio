import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profileData";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  
  const titles = [
    "Azure Cloud Architect",
    "DevOps Engineer",
    "MLOps Platform Architect",
    "AI Infrastructure Specialist"
  ];

  useEffect(() => {
    setStatsVisible(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentTitle.substring(0, typedText.length - 1)
            : currentTitle.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIndex]);

  return (
    <section id="top" className="section fade-in-up" style={{ position: "relative", overflow: "hidden" }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "-50%",
        right: "-10%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        animation: "float 20s ease-in-out infinite",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-30%",
        left: "-5%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        animation: "float 25s ease-in-out infinite reverse",
        zIndex: 0
      }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,2.1fr) minmax(0,1.2fr)",
          gap: 40,
          alignItems: "center",
          position: "relative",
          zIndex: 1
        }}
        className="hero-grid"
      >
        <div>
          {/* Availability Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "999px",
            marginBottom: "20px",
            animation: "slideInLeft 0.8s ease-out"
          }}>
            <span style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#10b981",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            }} />
            <span style={{ fontSize: "0.85rem", color: "#059669", fontWeight: "600" }}>
              Available for Cloud & AI Opportunities
            </span>
          </div>

          <h1
            style={{
              fontSize: "3.2rem",
              lineHeight: 1.1,
              marginBottom: 16,
              fontWeight: "800"
            }}
          >
            <span style={{ display: "block", color: "#1e293b", marginBottom: "8px" }}>
              Hi, I'm <span style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Kishan Kumar</span>
            </span>
            <span style={{
              display: "block",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              minHeight: "60px"
            }}>
              {typedText}
              <span style={{
                borderRight: "3px solid #3b82f6",
                animation: "blink 1s step-end infinite",
                marginLeft: "2px"
              }}>|</span>
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#64748b",
              maxWidth: 600,
              marginBottom: 24,
              lineHeight: 1.7
            }}
          >
            Architecting <strong style={{ color: "#3b82f6" }}>reliable, secure, and scalable</strong> Azure solutions. 
            Specializing in cloud adoption, MLOps platforms, and AI infrastructure with <strong style={{ color: "#8b5cf6" }}>9+ years</strong> of enterprise experience.
          </p>

          {/* Tech Stack Icons */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "28px"
          }}>
            {[
              { name: "Azure", gradient: "linear-gradient(135deg, #0078d4 0%, #50e6ff 100%)" },
              { name: "Kubernetes", gradient: "linear-gradient(135deg, #326ce5 0%, #569ceb 100%)" },
              { name: "Terraform", gradient: "linear-gradient(135deg, #623ce4 0%, #844fba 100%)" },
              { name: "Azure AI", gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)" },
              { name: "MLOps", gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)" },
              { name: "GitHub", gradient: "linear-gradient(135deg, #1e293b 0%, #334155 100%)" }
            ].map((tech, idx) => (
              <span key={idx} style={{
                padding: "10px 18px",
                borderRadius: "10px",
                background: tech.gradient,
                color: "white",
                fontSize: "0.85rem",
                fontWeight: "600",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                cursor: "default",
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s backwards`
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px) scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0) scale(1)"}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              to="/projects"
              style={{
                padding: "14px 32px",
                borderRadius: "12px",
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                color: "#ffffff",
                fontWeight: "700",
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 40px rgba(59, 130, 246, 0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(59, 130, 246, 0.4)";
              }}
            >
              <span>🚀 View My Projects</span>
            </Link>
            
            <a
              href={`mailto:${profile.contacts.email}`}
              style={{
                padding: "14px 32px",
                borderRadius: "12px",
                border: "2px solid #3b82f6",
                fontSize: "1rem",
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                color: "#3b82f6",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#3b82f6";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                e.currentTarget.style.color = "#3b82f6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>💬 Let's Connect</span>
            </a>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            position: "relative"
          }}
        >
          {[
            { number: "9+", label: "Years Experience", sublabel: "Azure Cloud Architecture", icon: "💼", gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", delay: 0 },
            { number: "11", label: "Professional Certifications", sublabel: "5 Azure + 6 Specialized", icon: "🏆", gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)", delay: 0.1 },
            { number: "20+", label: "Major Projects", sublabel: "Enterprise Scale Solutions", icon: "🚀", gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)", delay: 0.2 },
            { number: "6", label: "MLOps Platforms", sublabel: "Built from Scratch", icon: "🧠", gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)", delay: 0.3 }
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                padding: "24px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                animation: `slideInRight 0.8s ease-out ${stat.delay}s backwards`,
                transform: statsVisible ? "translateX(0)" : "translateX(100px)",
                opacity: statsVisible ? 1 : 0
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(59, 130, 246, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                fontSize: "3rem",
                opacity: 0.1,
                transform: "rotate(-15deg)"
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: "3rem",
                fontWeight: "900",
                background: stat.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "8px",
                position: "relative",
                zIndex: 1,
                letterSpacing: "-1px"
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: "1.05rem",
                color: "#1e293b",
                fontWeight: "700",
                marginBottom: "4px",
                position: "relative",
                zIndex: 1
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: "0.85rem",
                color: "#64748b",
                fontWeight: "500",
                position: "relative",
                zIndex: 1
              }}>
                {stat.sublabel}
              </div>
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: stat.gradient,
                opacity: 0.6
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Add animations via inline style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};
