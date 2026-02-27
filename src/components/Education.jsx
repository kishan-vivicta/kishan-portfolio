import React from "react";
import { profile } from "../data/profileData";

export const Education = () => (
  <section id="education" className="section fade-in-up">
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
        <span style={{ fontSize: "1.5rem" }}>🎓</span>
        Academic Background
      </h3>
      <div style={{
        color: "#475569",
        fontSize: "0.95rem",
        lineHeight: "1.7"
      }}>
        <p style={{ margin: 0 }}>
          Strong <strong style={{ color: "#3b82f6" }}>engineering foundation</strong> in Electrical and Electronics, providing the analytical thinking and systems architecture knowledge that underpins modern cloud infrastructure and DevOps practices.
        </p>
      </div>
    </div>
    
    {/* Education Cards */}
    <div style={{
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      {profile.education.map((ed, index) => {
        const CardWrapper = ed.link ? 'a' : 'div';
        
        return (
          <CardWrapper
            key={index}
            href={ed.link}
            target={ed.link ? "_blank" : undefined}
            rel={ed.link ? "noopener noreferrer" : undefined}
            className="card"
            style={{
              padding: "24px",
              position: "relative",
              overflow: "visible",
              cursor: ed.link ? "pointer" : "default",
              textDecoration: "none",
              color: "inherit",
              display: "block"
            }}
          >
          {/* University Icon */}
          <div style={{
            position: "absolute",
            top: 24,
            right: 24,
            fontSize: "3rem",
            opacity: 0.1
          }}>
            🎓
          </div>
          
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Degree and Specialization */}
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              marginBottom: "12px"
            }}>
              <div style={{
                fontSize: "2rem",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
              }}>
                🎓
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "4px",
                  lineHeight: "1.3"
                }}>
                  {ed.degree}
                </h3>
                <div style={{
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#3b82f6",
                  marginBottom: "8px"
                }}>
                  {ed.specialization}
                </div>
              </div>
              
              <span style={{
                padding: "6px 14px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #3b82f620, #8b5cf610)",
                color: "#3b82f6",
                fontSize: "0.85rem",
                fontWeight: "700",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                flexShrink: 0
              }}>
                {ed.period}
              </span>
            </div>
            
            {/* University Details */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
              paddingLeft: "68px"
            }}>
              <span style={{ fontSize: "0.95rem", fontWeight: "600", color: "#64748b" }}>
                {ed.university}
              </span>
              <span style={{ color: "#cbd5e1" }}>•</span>
              <span style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                📍 {ed.location}
              </span>
            </div>
            
            {/* Description */}
            <p style={{
              fontSize: "0.95rem",
              color: "#64748b",
              lineHeight: "1.7",
              marginBottom: "16px",
              paddingLeft: "68px"
            }}>
              {ed.description}
            </p>
            
            {/* Highlights */}
            {ed.highlights && ed.highlights.length > 0 && (
              <div style={{
                paddingLeft: "68px",
                paddingBottom: ed.link ? "60px" : "0"
              }}>
                <div style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#475569",
                  marginBottom: "8px"
                }}>
                  Key Learnings:
                </div>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px"
                }}>
                  {ed.highlights.map((highlight, idx) => (
                    <div key={idx} style={{
                      padding: "6px 12px",
                      background: "linear-gradient(135deg, #ffffff, #f8fafc)",
                      borderRadius: "8px",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      fontSize: "0.85rem",
                      color: "#475569",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}>
                      <span style={{ color: "#3b82f6" }}>✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* University Link */}
            {ed.link && (
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                color: "#3b82f6",
                fontWeight: "600",
                padding: "8px 16px",
                background: "rgba(59, 130, 246, 0.05)",
                borderRadius: "8px",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}>
                Visit University
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            )}
          </div>
        </CardWrapper>
        );
      })}
    </div>
  </section>
);
