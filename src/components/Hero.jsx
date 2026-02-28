import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profileData";

export const Hero = () => {
  return (
    <section id="top" className="section fade-in-up">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,2.1fr) minmax(0,1.2fr)",
          gap: 20,
          alignItems: "center"
        }}
        className="hero-grid"
      >
        <div>
          <p
            style={{
              fontSize: 13,
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: 1.4,
              marginBottom: 8
            }}
          >
            Cloud · DevOps · AI Platforms
          </p>
          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: 1.15,
              marginBottom: 10,
              background:
                "linear-gradient(to right,#3b82f6,#8b5cf6,#ec4899,#f97316)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Architecting reliable, secure Azure solutions.
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "#64748b",
              maxWidth: 540,
              marginBottom: 16
            }}
          >
            {profile.summary}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 14
            }}
          >
            <span className="chip">Microsoft Azure</span>
            <span className="chip">Kubernetes (AKS)</span>
            <span className="chip">Terraform & Bicep</span>
            <span className="chip">Azure AI & OpenAI</span>
            <span className="chip">CI/CD & Automation</span>
            <span className="chip">GitHub Projects</span>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              to="/projects"
              style={{
                padding: "9px 18px",
                borderRadius: 999,
                border: "none",
                fontSize: 13,
                cursor: "pointer",
                background:
                  "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)",
                color: "#ffffff",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(59, 130, 246, 0.3)",
                textDecoration: "none",
                display: "inline-block"
              }}
            >
              View featured projects
            </Link>
            <a
              href={`mailto:${profile.contacts.email}`}
              style={{
                padding: "9px 16px",
                borderRadius: 999,
                border: "1px solid rgba(59, 130, 246, 0.3)",
                fontSize: 13,
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.8)",
                color: "#1e293b",
                display: "inline-flex",
                alignItems: "center",
                gap: 8
              }}
            >
              <span>Let’s talk</span>
              <span
                style={{
                  fontSize: 16,
                  transform: "translateY(1px)"
                }}
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative"
          }}
        >
          {/* Years Experience */}
          <div
            style={{
              padding: "24px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "3.5rem",
              opacity: 0.06
            }}>
              💼
            </div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px",
              position: "relative",
              zIndex: 1
            }}>
              9+
            </div>
            <div style={{
              fontSize: "0.95rem",
              color: "#64748b",
              fontWeight: "600",
              position: "relative",
              zIndex: 1
            }}>
              Years Experience
            </div>
            <div style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              marginTop: "4px",
              position: "relative",
              zIndex: 1
            }}>
              Azure Cloud Architecture
            </div>
          </div>

          {/* Certifications */}
          <div
            style={{
              padding: "24px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "3.5rem",
              opacity: 0.06
            }}>
              🏆
            </div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px",
              position: "relative",
              zIndex: 1
            }}>
              11
            </div>
            <div style={{
              fontSize: "0.95rem",
              color: "#64748b",
              fontWeight: "600",
              position: "relative",
              zIndex: 1
            }}>
              Professional Certifications
            </div>
            <div style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              marginTop: "4px",
              position: "relative",
              zIndex: 1
            }}>
              5 Azure + 6 Specialized
            </div>
          </div>

          {/* Major Projects */}
          <div
            style={{
              padding: "24px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: "1px solid rgba(236, 72, 153, 0.2)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "3.5rem",
              opacity: 0.06
            }}>
              🚀
            </div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px",
              position: "relative",
              zIndex: 1
            }}>
              20+
            </div>
            <div style={{
              fontSize: "0.95rem",
              color: "#64748b",
              fontWeight: "600",
              position: "relative",
              zIndex: 1
            }}>
              Major Projects
            </div>
            <div style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              marginTop: "4px",
              position: "relative",
              zIndex: 1
            }}>
              Enterprise Scale Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
