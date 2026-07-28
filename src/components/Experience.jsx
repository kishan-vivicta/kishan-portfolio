import React from "react";
import { profile } from "../data/profileData";

export const Experience = () => {
  const totalYears = 10;
  const companies = [...new Set(profile.experience.map(exp => exp.company))].length;

  return (
    <section id="experience" className="section fade-in-up" style={{ position: "relative", overflow: "hidden" }}>
      {/* Animated Background */}
      <div style={{
        position: "absolute",
        top: "25%",
        right: "-8%",
        width: "450px",
        height: "450px",
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(50px)",
        animation: "float 32s ease-in-out infinite",
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
        <h3 style={{
          fontSize: "1.3rem",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span style={{ fontSize: "1.5rem" }}>💼</span>
          Professional Journey
        </h3>
        <div style={{
          color: "#475569",
          fontSize: "0.95rem",
          lineHeight: "1.7",
          marginBottom: "16px"
        }}>
          <p style={{ margin: 0 }}>
            <strong style={{ color: "#3b82f6" }}>{totalYears}+ years</strong> of progressive experience across <strong style={{ color: "#3b82f6" }}>{companies} leading organizations</strong>, specializing in Azure cloud architecture, DevOps transformation, and enterprise-scale infrastructure automation.
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
              background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px",
              animation: "gradientShift 8s ease-in-out infinite"
            }}>
              {totalYears}+
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              fontWeight: "600"
            }}>
              Years
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
              background: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px",
              animation: "gradientShift 8s ease-in-out infinite"
            }}>
              {companies}
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              fontWeight: "600"
            }}>
              Companies
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
              background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px"
            }}>
              🌍
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#64748b",
              fontWeight: "600"
            }}>
              Norway
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        {profile.experience.map((exp, idx) => (
          <div key={exp.company + exp.period} style={{
            position: "relative",
            marginBottom: idx < profile.experience.length - 1 ? "24px" : "0"
          }}>
            {/* Timeline Line */}
            {idx < profile.experience.length - 1 && (
              <div style={{
                position: "absolute",
                left: "27px",
                top: "80px",
                width: "2px",
                height: "calc(100% + 24px)",
                background: "linear-gradient(180deg, #3b82f6 0%, #e0f2fe 100%)",
                zIndex: 0
              }} />
            )}

            <div className="card" style={{
              position: "relative",
              zIndex: 1,
              overflow: "visible",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(8px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(59, 130, 246, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "";
            }}>
              {/* Company Badge */}
              <div style={{
                position: "absolute",
                top: 24,
                right: 24,
                fontSize: "3rem",
                opacity: 0.08
              }}>
                🏢
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Header with Timeline Dot */}
                <div style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "16px"
                }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
                    backgroundSize: "200% 200%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                    flexShrink: 0,
                    animation: "gradientShift 8s ease-in-out infinite, pulse 3s ease-in-out infinite"
                  }}>
                    {idx === 0 ? "🎯" : idx === 1 ? "⭐" : idx === 2 ? "🚀" : "💡"}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "4px",
                      lineHeight: "1.3"
                    }}>
                      {exp.title}
                    </h3>
                    <div style={{
                      fontSize: "1.05rem",
                      fontWeight: "600",
                      color: "#3b82f6",
                      marginBottom: "8px"
                    }}>
                      {exp.company}
                    </div>
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "12px",
                      alignItems: "center"
                    }}>
                      <span style={{
                        fontSize: "0.9rem",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}>
                        <span>📍</span>
                        {exp.location}
                      </span>
                      <span style={{ color: "#cbd5e1" }}>•</span>
                      <span style={{
                        padding: "4px 12px",
                        borderRadius: "999px",
                        background: "linear-gradient(135deg, #3b82f620, #8b5cf610)",
                        color: "#3b82f6",
                        fontSize: "0.85rem",
                        fontWeight: "700",
                        border: "1px solid rgba(59, 130, 246, 0.3)"
                      }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div style={{
                  marginTop: "20px",
                  paddingLeft: "72px"
                }}>
                  <div style={{
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    color: "#475569",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    Key Achievements
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "12px 14px",
                        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                        borderRadius: "8px",
                        border: "1px solid rgba(148, 163, 184, 0.15)",
                        transition: "all 0.3s ease",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.05) 100%)";
                        e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)";
                        e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.15)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}>
                        <span style={{
                          fontSize: "1rem",
                          color: "#3b82f6",
                          fontWeight: "700",
                          flexShrink: 0,
                          marginTop: "2px"
                        }}>
                          ✓
                        </span>
                        <span style={{
                          fontSize: "0.95rem",
                          color: "#475569",
                          lineHeight: "1.6"
                        }}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(4deg); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};
