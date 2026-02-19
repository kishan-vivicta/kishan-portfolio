import React from "react";
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
              color: "#a5b4fc",
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
                "linear-gradient(to right,#e5e7eb,#a5b4fc,#22d3ee,#a5b4fc)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Architecting reliable, secure Azure solutions.
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "#9ca3af",
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
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "9px 18px",
                borderRadius: 999,
                border: "none",
                fontSize: 13,
                cursor: "pointer",
                background:
                  "linear-gradient(135deg,#22d3ee,#4f46e5,#22d3ee)",
                color: "#0b1120",
                fontWeight: 600,
                boxShadow: "0 16px 45px rgba(37,99,235,0.7)"
              }}
            >
              View featured projects
            </button>
            <a
              href={`mailto:${profile.contacts.email}`}
              style={{
                padding: "9px 16px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.7)",
                fontSize: 13,
                cursor: "pointer",
                background: "rgba(15,23,42,0.8)",
                color: "#e5e7eb",
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
            minHeight: 220
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 10,
              borderRadius: "24px",
              background:
                "radial-gradient(circle at top,#1f2937,#020617 60%)",
              border: "1px solid rgba(148,163,184,0.35)",
              boxShadow:
                "0 18px 50px rgba(15,23,42,1), 0 0 0 1px rgba(15,23,42,1)",
              padding: 18,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden"
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
                    color: "#9ca3af"
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
                  border: "1px solid rgba(56,189,248,0.7)",
                  background: "rgba(15,23,42,0.9)"
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
                color: "#9ca3af"
              }}
            >
              <div>
                <div style={{ color: "#e5e7eb", marginBottom: 4 }}>
                  Cloud & DevOps
                </div>
                <ul style={{ paddingLeft: 16, margin: 0 }}>
                  <li>Azure, AKS, CAF</li>
                  <li>Terraform, Bicep, Helm</li>
                  <li>CI/CD with Azure DevOps</li>
                </ul>
              </div>
              <div>
                <div style={{ color: "#e5e7eb", marginBottom: 4 }}>
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
                color: "#9ca3af"
              }}
            >
              <div>
                <div style={{ marginBottom: 2 }}>Location</div>
                <div style={{ color: "#e5e7eb" }}>{profile.location}</div>
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
              opacity: 0.7,
              background:
                "radial-gradient(circle at 10% 0,#22d3ee33,transparent 55%)"
            }}
          />
        </div>
      </div>
    </section>
  );
};
