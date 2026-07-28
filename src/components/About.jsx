import React from "react";
import { profile } from "../data/profileData";

export const About = () => (
  <section id="about" className="section fade-in-up" style={{ position: "relative", overflow: "hidden" }}>
    {/* Animated Background */}
    <div style={{
      position: "absolute",
      top: "15%",
      left: "5%",
      width: "350px",
      height: "350px",
      background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(50px)",
      animation: "float 28s ease-in-out infinite",
      zIndex: 0
    }} />
    
    {/* Highlights Section */}
    <div style={{
      maxWidth: "800px",
      margin: "0 auto 32px",
      padding: "24px",
      background: "linear-gradient(135deg, rgba(240,249,255,0.95) 0%, rgba(224,242,254,0.95) 100%)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      border: "1px solid rgba(59, 130, 246, 0.2)",
      position: "relative",
      zIndex: 1
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
          border: "1px solid rgba(59, 130, 246, 0.15)",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(59, 130, 246, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "4px",
            animation: "gradientShift 8s ease-in-out infinite"
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
          border: "1px solid rgba(59, 130, 246, 0.15)",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(139, 92, 246, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "4px",
            animation: "gradientShift 8s ease-in-out infinite"
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
          border: "1px solid rgba(59, 130, 246, 0.15)",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(236, 72, 153, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #f97316 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "4px",
            animation: "gradientShift 8s ease-in-out infinite"
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
      overflow: "visible",
      zIndex: 1
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
            background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
            backgroundSize: "200% 200%",
            width: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
            animation: "gradientShift 8s ease-in-out infinite, iconBounce 2s ease-in-out infinite"
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
                gap: "6px",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#3b82f6";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
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
              color: "#3b82f6",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.style.transform = "scale(1)";
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
              color: "#3b82f6",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.style.transform = "scale(1)";
            }}>
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    {/* Add animations */}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(3deg); }
      }
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes iconBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
    `}</style>
  </section>
);
