import React from "react";
import { profile } from "../data/profileData";

export const Experience = () => {
  const totalYears = 9;
  const companies = [...new Set(profile.experience.map(exp => exp.company))].length;

  return (
    <section id="experience" className="section fade-in-up">
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
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px"
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
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px"
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
        margin: "0 auto"
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
              overflow: "visible"
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
                    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                    flexShrink: 0
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
                        border: "1px solid rgba(148, 163, 184, 0.15)"
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
    </section>
  );
};
