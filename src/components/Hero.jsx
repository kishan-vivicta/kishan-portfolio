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

        <div
          style={{
            position: "relative",
            minHeight: 280
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 10,
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #ffffff, #f8fafc)",
              border: "1px solid rgba(148,163,184,0.25)",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.08)",
              padding: 18,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
                alignItems: "center"
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600
                  }}
                >
                  {profile.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#64748b"
                  }}
                >
                  {profile.role}
                </div>
              </div>
              <div
                style={{
                  fontSize: 11,
                  padding: "4px 9px",
                  borderRadius: 999,
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  background: "rgba(59, 130, 246, 0.05)",
                  color: "#3b82f6"
                }}
              >
                Azure · Kubernetes · AI
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: 12,
                fontSize: 11,
                color: "#64748b"
              }}
            >
              <div>
                <div style={{ color: "#1e293b", marginBottom: 4 }}>
                  Cloud & DevOps
                </div>
                <ul style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Azure, AKS, CAF</li>
                  <li>Terraform, Bicep, Helm</li>
                  <li>CI/CD with Azure DevOps</li>
                </ul>
              </div>
              <div>
                <div style={{ color: "#1e293b", marginBottom: 4 }}>
                  AI & Automation
                </div>
                <ul style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Azure AI & OpenAI</li>
                  <li>Python, PowerShell</li>
                  <li>Secure AI workloads</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: 10,
                fontSize: 11,
                color: "#64748b"
              }}
            >
              <div>
                <div style={{ marginBottom: 2 }}>Location</div>
                <div style={{ color: "#1e293b" }}>{profile.location}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background:
                      "radial-gradient(circle,#22c55e,transparent)"
                  }}
                />
                <span>Open to cloud & AI opportunities</span>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              filter: "blur(28px)",
              opacity: 0.3,
              background:
                "radial-gradient(circle at 10% 0,#3b82f644,transparent 55%)"
            }}
          />
        </div>
      </div>
    </section>
  );
};
