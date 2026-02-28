import React from "react";
import { profile } from "../data/profileData";

export const Projects = () => {
  const totalProjects = profile.projects.length;
  const totalTechnologies = [...new Set(profile.projects.flatMap(p => p.techStack))].length;

  return (
    <section id="projects" className="section fade-in-up">
      {/* Highlights Section */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto 32px",
        padding: "24px",
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        borderRadius: "16px",
        border: "1px solid rgba(59, 130, 246, 0.2)"
      }}>
        <h3 style={{
          fontSize: "1.3rem",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span style={{ fontSize: "1.5rem" }}>🚀</span>
          Featured Projects
        </h3>
        <div style={{
          color: "#475569",
          fontSize: "0.95rem",
          lineHeight: "1.7",
          marginBottom: "16px"
        }}>
          <p style={{ margin: 0 }}>
            Successfully delivered <strong style={{ color: "#3b82f6" }}>{totalProjects} major enterprise projects</strong>, leveraging <strong style={{ color: "#3b82f6" }}>{totalTechnologies}+ cutting-edge technologies</strong> to build scalable cloud infrastructure, AI platforms, and automated deployment pipelines.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "12px"
        }}>
          <div style={{
            padding: "12px 16px",
            background: "white",
            borderRadius: "10px",
            border: "1px solid rgba(59, 130, 246, 0.15)",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "2rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px"
            }}>
              {totalProjects}
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              fontWeight: "600"
            }}>
              Major Projects
            </div>
          </div>
          <div style={{
            padding: "12px 16px",
            background: "white",
            borderRadius: "10px",
            border: "1px solid rgba(59, 130, 246, 0.15)",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "2rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px"
            }}>
              {totalTechnologies}+
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              fontWeight: "600"
            }}>
              Technologies
            </div>
          </div>
          <div style={{
            padding: "12px 16px",
            background: "white",
            borderRadius: "10px",
            border: "1px solid rgba(59, 130, 246, 0.15)",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "1.8rem",
              marginBottom: "4px"
            }}>
              ⭐
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              fontWeight: "600"
            }}>
              Enterprise Scale
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="card-grid">
        {profile.projects.map((proj, idx) => (
          <div key={proj.name} className="card" style={{
            position: "relative",
            overflow: "visible"
          }}>
            {/* Project Icon */}
            <div style={{
              position: "absolute",
              top: 24,
              right: 24,
              fontSize: "3rem",
              opacity: 0.08
            }}>
              {idx === 0 ? "🤖" : idx === 1 ? "☁️" : idx === 2 ? "🔐" : "⚡"}
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Project Header */}
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "16px"
              }}>
                <div style={{
                  fontSize: "2rem",
                  background: `linear-gradient(135deg, ${idx === 0 ? "#3b82f6 0%, #8b5cf6 100%" : idx === 1 ? "#8b5cf6 0%, #ec4899 100%" : idx === 2 ? "#ec4899 0%, #f97316 100%" : "#f59e0b 0%, #10b981 100%"})`,
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
                }}>
                  {idx === 0 ? "🤖" : idx === 1 ? "☁️" : idx === 2 ? "🔐" : "⚡"}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "8px",
                    lineHeight: "1.3"
                  }}>
                    {proj.name}
                  </h3>
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    alignItems: "center",
                    marginBottom: "4px"
                  }}>
                    {proj.customer && (
                      <>
                        <span style={{
                          padding: "4px 10px",
                          borderRadius: "6px",
                          background: "linear-gradient(135deg, #3b82f620, #8b5cf610)",
                          color: "#3b82f6",
                          fontSize: "0.8rem",
                          fontWeight: "700",
                          border: "1px solid rgba(59, 130, 246, 0.3)"
                        }}>
                          {proj.customer}
                        </span>
                        <span style={{ color: "#cbd5e1", fontSize: "0.8rem" }}>•</span>
                      </>
                    )}
                    <span style={{
                      fontSize: "0.85rem",
                      color: "#64748b",
                      fontWeight: "600"
                    }}>
                      {proj.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div style={{
                paddingLeft: "68px",
                marginBottom: "16px"
              }}>
                <div style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#475569",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Key Deliverables
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                }}>
                  {proj.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      padding: "10px 12px",
                      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                      borderRadius: "8px",
                      border: "1px solid rgba(148, 163, 184, 0.15)"
                    }}>
                      <span style={{
                        fontSize: "0.9rem",
                        color: "#3b82f6",
                        fontWeight: "700",
                        flexShrink: 0,
                        marginTop: "2px"
                      }}>
                        ✓
                      </span>
                      <span style={{
                        fontSize: "0.9rem",
                        color: "#475569",
                        lineHeight: "1.5"
                      }}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{
                paddingLeft: "68px"
              }}>
                <div style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#475569",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Technology Stack
                </div>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px"
                }}>
                  {proj.techStack.map((tech, techIdx) => (
                    <span key={techIdx} style={{
                      padding: "6px 12px",
                      background: "white",
                      borderRadius: "6px",
                      border: "1px solid rgba(59, 130, 246, 0.2)",
                      fontSize: "0.8rem",
                      color: "#3b82f6",
                      fontWeight: "600",
                      display: "inline-block"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
