import React from "react";
import { profile } from "../data/profileData";

const getAwardIcon = (title) => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('best') || titleLower.includes('team')) {
    return { icon: '🏆', color: '#FFD700', gradient: 'linear-gradient(135deg, #FFD700, #FFA500)' };
  }
  if (titleLower.includes('leader') || titleLower.includes('emerging')) {
    return { icon: '🌟', color: '#9333EA', gradient: 'linear-gradient(135deg, #9333EA, #C084FC)' };
  }
  if (titleLower.includes('hackathon') || titleLower.includes('runner')) {
    return { icon: '🚀', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)' };
  }
  if (titleLower.includes('spot') || titleLower.includes('performance')) {
    return { icon: '⚡', color: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444, #F87171)' };
  }
  return { icon: '🏅', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #34D399)' };
};

export const Awards = () => (
  <section id="awards" className="section fade-in-up">
    {/* Highlights Section */}
    <div style={{
      maxWidth: "800px",
      margin: "0 auto 32px",
      padding: "24px",
      background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
      borderRadius: "16px",
      border: "1px solid rgba(245, 158, 11, 0.3)"
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
        <span style={{ fontSize: "1.5rem" }}>🏆</span>
        Recognition & Achievements
      </h3>
      <div style={{
        color: "#475569",
        fontSize: "0.95rem",
        lineHeight: "1.7"
      }}>
        <p style={{ margin: 0 }}>
          Recognized across multiple organizations for <strong style={{ color: "#d97706" }}>excellence in teamwork</strong>, <strong style={{ color: "#d97706" }}>leadership</strong>, and <strong style={{ color: "#d97706" }}>technical innovation</strong>. These awards reflect consistent high performance, problem-solving abilities, and contributions to organizational success.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "12px",
          marginTop: "16px"
        }}>
          <div style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(245, 158, 11, 0.2)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "4px" }}>🏆</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#d97706" }}>{profile.awards.length}</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Total Awards</div>
          </div>
          <div style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(245, 158, 11, 0.2)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "4px" }}>🌟</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#d97706" }}>2</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Organizations</div>
          </div>
          <div style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(245, 158, 11, 0.2)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "4px" }}>🚀</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#d97706" }}>5+</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Years Span</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Awards Cards */}
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      {profile.awards.map((award, index) => {
        const { icon, color, gradient } = getAwardIcon(award.title);
        
        return (
          <div
            key={index}
            className="card"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              padding: "20px",
              position: "relative",
              overflow: "visible"
            }}
          >
            {/* Icon with gradient background */}
            <div style={{
              position: "relative",
              flexShrink: 0
            }}>
              <div style={{
                fontSize: "2.5rem",
                background: gradient,
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                boxShadow: `0 4px 12px ${color}40`,
                border: `2px solid ${color}30`
              }}>
                {icon}
              </div>
            </div>
            
            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "8px"
              }}>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  lineHeight: "1.3",
                  margin: 0
                }}>
                  {award.title}
                </h3>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: "999px",
                  background: `${color}15`,
                  color: color,
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  border: `1px solid ${color}30`,
                  flexShrink: 0
                }}>
                  {award.year}
                </span>
              </div>
              
              <div style={{
                fontSize: "0.9rem",
                color: "#3b82f6",
                fontWeight: "600",
                marginBottom: "8px"
              }}>
                {award.organization}
              </div>
              
              <p style={{
                fontSize: "0.9rem",
                color: "#64748b",
                lineHeight: "1.6",
                margin: 0
              }}>
                {award.description}
              </p>
            </div>
            
            {/* Award ribbon decoration */}
            <div style={{
              position: "absolute",
              top: -1,
              right: -1,
              width: "0",
              height: "0",
              borderStyle: "solid",
              borderWidth: "0 40px 40px 0",
              borderColor: `transparent ${color}20 transparent transparent`,
              borderRadius: "0 16px 0 0"
            }} />
          </div>
        );
      })}
    </div>
  </section>
);
