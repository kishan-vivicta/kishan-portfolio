import React from "react";
import { profile } from "../data/profileData";

export const About = () => (
  <section id="about" className="section fade-in-up">
    {/* Highlights Section */}
    <div style={{
      maxWidth: "800px",
      margin: "0 auto 32px",
      padding: "24px",
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      borderRadius: "16px",
      border: "1px solid rgba(59, 130, 246, 0.2)"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "20px"
      }}>
        <div style={{
          textAlign: "center",
          padding: "16px",
          background: "white",
          borderRadius: "12px",
          border: "1px solid rgba(59, 130, 246, 0.15)"
        }}>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "4px"
          }}>
            9+
          </div>
          <div style={{
            fontSize: "0.9rem",
            color: "#64748b",
            fontWeight: "600"
          }}>
            Years Experience
          </div>
        </div>
        
        <div style={{
          textAlign: "center",
          padding: "16px",
          background: "white",
          borderRadius: "12px",
          border: "1px solid rgba(59, 130, 246, 0.15)"
        }}>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "4px"
          }}>
            11
          </div>
          <div style={{
            fontSize: "0.9rem",
            color: "#64748b",
            fontWeight: "600"
          }}>
            Certifications
          </div>
        </div>
        
        <div style={{
          textAlign: "center",
          padding: "16px",
          background: "white",
          borderRadius: "12px",
          border: "1px solid rgba(59, 130, 246, 0.15)"
        }}>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "4px"
          }}>
            20+
          </div>
          <div style={{
            fontSize: "0.9rem",
            color: "#64748b",
            fontWeight: "600"
          }}>
            Major Projects
          </div>
        </div>
      </div>
    </div>
    
    {/* About Content */}
    <div className="card" style={{
      maxWidth: "800px",
      margin: "0 auto",
      position: "relative",
      overflow: "visible"
    }}>
      {/* Decorative Icon */}
      <div style={{
        position: "absolute",
        top: 24,
        right: 24,
        fontSize: "4rem",
        opacity: 0.08
      }}>
        💼
      </div>
      
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px"
        }}>
          <div style={{
            fontSize: "2.5rem",
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            width: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
          }}>
            👨‍💻
          </div>
          <div>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "4px"
            }}>
              About Me
            </h3>
            <div style={{
              fontSize: "0.95rem",
              color: "#64748b"
            }}>
              Cloud & DevOps Specialist
            </div>
          </div>
        </div>
        
        <p style={{
          fontSize: "1.05rem",
          color: "#475569",
          marginBottom: "16px",
          lineHeight: 1.8,
          fontWeight: "500"
        }}>
          {profile.summary}
        </p>
        
        <p style={{
          fontSize: "1rem",
          color: "#64748b",
          lineHeight: 1.8,
          marginBottom: "24px"
        }}>
          I enjoy collaborating with cross-functional teams, designing enterprise
          architectures that balance performance, cost, and security, and
          building automation that makes cloud platforms predictable and
          resilient.
        </p>
        
        {/* Key Strengths */}
        <div style={{
          padding: "20px",
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          borderRadius: "12px",
          border: "1px solid rgba(148, 163, 184, 0.2)"
        }}>
          <div style={{
            fontSize: "0.9rem",
            fontWeight: "700",
            color: "#475569",
            marginBottom: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            Core Expertise
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            {["Cloud Architecture", "Azure Platform", "DevOps & CI/CD", "Infrastructure as Code", "Kubernetes & Containers", "AI Platform Design", "GitHub Projects"].map((strength, idx) => (
              <div key={idx} style={{
                padding: "8px 16px",
                background: "white",
                borderRadius: "8px",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                fontSize: "0.9rem",
                color: "#3b82f6",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                <span style={{ fontSize: "1rem" }}>✓</span>
                {strength}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Personal Info - Languages & Hobbies */}
    <div style={{
      maxWidth: "800px",
      margin: "32px auto 0",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px"
    }}
    className="about-personal-grid">
      {/* Languages */}
      <div className="card" style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        border: "1px solid rgba(59, 130, 246, 0.15)"
      }}>
        <h4 style={{
          fontSize: "1rem",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span style={{ fontSize: "1.3rem" }}>🌐</span>
          Languages
        </h4>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px"
        }}>
          {profile.languages.map((lang, idx) => (
            <span key={idx} style={{
              padding: "8px 16px",
              background: "white",
              borderRadius: "8px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#3b82f6"
            }}>
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="card" style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        border: "1px solid rgba(59, 130, 246, 0.15)"
      }}>
        <h4 style={{
          fontSize: "1rem",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span style={{ fontSize: "1.3rem" }}>🎸</span>
          Hobbies & Interests
        </h4>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px"
        }}>
          {profile.hobbies.map((hobby, idx) => (
            <span key={idx} style={{
              padding: "8px 16px",
              background: "white",
              borderRadius: "8px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#3b82f6"
            }}>
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
