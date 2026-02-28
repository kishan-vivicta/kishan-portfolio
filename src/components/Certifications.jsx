import React from "react";
import { profile } from "../data/profileData";

const getCertificationIcon = (cert) => {
  const certLower = cert.toLowerCase();
  
  // AZ-400 - Not Azure certified, just a course
  if (certLower.includes('az-400')) {
    return { icon: '⚙️', color: '#FF6B35', badge: 'Course Completed' };
  }
  
  // All Azure certifications (excluding AZ-400)
  if (certLower.includes('az-') || certLower.includes('azure') || certLower.includes('ai-900') || certLower.includes('ai-102')) {
    let badgeUrl = '';
    let badgeText = 'Azure Certified';
    
    // Determine level and badge URL
    if (certLower.includes('expert') || certLower.includes('az-305')) {
      badgeUrl = 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-expert-badge.svg?branch=main';
      badgeText = 'Azure Certified - Expert';
    } else if (certLower.includes('associate') || certLower.includes('ai-102') || certLower.includes('az-104')) {
      badgeUrl = 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main';
      badgeText = 'Azure Certified - Associate';
    } else if (certLower.includes('fundamentals') || certLower.includes('ai-900') || certLower.includes('az-900')) {
      badgeUrl = 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg?branch=main';
      badgeText = 'Azure Certified - Fundamentals';
    }
    
    const azureIcon = (
      <img 
        src={badgeUrl} 
        alt="Microsoft Certified Badge"
        style={{ width: '32px', height: '32px' }}
      />
    );
    
    return { icon: azureIcon, color: '#0078D4', badge: badgeText };
  }
  
  // Kubernetes
  if (certLower.includes('kubernetes')) {
    return { icon: '☸️', color: '#326CE5', badge: 'Certified' };
  }
  // AI/GenAI related
  if (certLower.includes('generative ai') || certLower.includes('gen ai')) {
    return { icon: '✨', color: '#10A37F', badge: 'Certified' };
  }
  // Python/Data Science
  if (certLower.includes('python') || certLower.includes('data science')) {
    return { icon: '🐍', color: '#3776AB', badge: 'Certified' };
  }
  // Big Data
  if (certLower.includes('big data')) {
    return { icon: '📊', color: '#FF6B6B', badge: 'Certified' };
  }
  // Default
  return { icon: '📜', color: '#6366F1', badge: 'Certified' };
};

export const Certifications = () => (
  <section id="certifications" className="section fade-in-up">
    {/* Highlights Section */}
    <div style={{
      maxWidth: "800px",
      margin: "0 auto 32px",
      padding: "24px",
      background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
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
        Certification Highlights
      </h3>
      <div style={{
        color: "#475569",
        fontSize: "0.95rem",
        lineHeight: "1.7",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
        <p style={{ margin: 0 }}>
          <strong style={{ color: "#0078D4" }}>11 Professional Certifications</strong> including 5 Microsoft Azure Certifications spanning Expert, Associate, and Fundamentals levels, plus 6 specialized certifications in Kubernetes, AI, DevOps, and Data Science.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
          marginTop: "8px"
        }}>
          <div style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(59, 130, 246, 0.15)"
          }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>🏆</div>
            <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#0078D4" }}>1 Expert Level</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Azure Solutions Architect</div>
          </div>
          <div style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(59, 130, 246, 0.15)"
          }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>🎯</div>
            <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#0078D4" }}>2 Associate Level</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>AI Engineer & Administrator</div>
          </div>
          <div style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(59, 130, 246, 0.15)"
          }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>📘</div>
            <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#0078D4" }}>2 Fundamentals</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Azure & AI Foundations</div>
          </div>
          <div style={{
            padding: "12px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(59, 130, 246, 0.15)"
          }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>🚀</div>
            <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#8b5cf6" }}>6 Specialized</div>
            <div style={{ fontSize: "0.75rem", color: "#64748b" }}>K8s, AI, DevOps, Data</div>
          </div>
        </div>
        <p style={{ margin: "8px 0 0 0", fontSize: "0.9rem" }}>
          Additional specializations in <strong>Kubernetes</strong>, <strong>Generative AI</strong>, <strong>DevOps</strong>, <strong>Python Data Science</strong>, and <strong>Big Data</strong> — showcasing a well-rounded technical skillset aligned with modern cloud and AI technologies.
        </p>
      </div>
    </div>
    
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      {profile.certifications.map((cert, index) => {
        const { icon, color, badge } = getCertificationIcon(cert.name);
        const CardWrapper = cert.link ? 'a' : 'div';
        
        return (
          <CardWrapper
            key={index}
            href={cert.link}
            target={cert.link ? "_blank" : undefined}
            rel={cert.link ? "noopener noreferrer" : undefined}
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px",
              position: "relative",
              overflow: "visible",
              cursor: cert.link ? "pointer" : "default",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            {/* Icon with animated background */}
            <div style={{
              position: "relative",
              flexShrink: 0
            }}>
              <div style={{
                fontSize: "2rem",
                background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                border: `2px solid ${color}40`,
                boxShadow: `0 4px 12px ${color}20`,
                transition: "all 0.3s ease"
              }}>
                {icon}
              </div>
              {/* Animated pulse ring */}
              <div style={{
                position: "absolute",
                inset: -4,
                borderRadius: "18px",
                border: `2px solid ${color}`,
                opacity: 0,
                animation: cert.link ? "pulse 2s infinite" : "none"
              }} />
            </div>
            
            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{
                fontSize: "1.05rem",
                fontWeight: "600",
                marginBottom: "8px",
                color: "#1e293b",
                lineHeight: "1.4"
              }}>
                {cert.name}
              </h3>
              <div style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "999px",
                background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                color: color,
                fontSize: "0.75rem",
                fontWeight: "600",
                border: `1px solid ${color}40`
              }}>
                {badge}
              </div>
            </div>
            
            {/* View credential arrow - only show if link exists */}
            {cert.link && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: color,
                fontSize: "0.9rem",
                fontWeight: "600",
                flexShrink: 0,
                transition: "transform 0.3s ease"
              }}>
                <span style={{ whiteSpace: "nowrap" }}>View Credential</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            )}
            
            {/* Verified badge for linked certifications */}
            {cert.link && (
              <div style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: `${color}20`,
                color: color,
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "0.7rem",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                border: `1px solid ${color}40`
              }}>
                ✓ Verified
              </div>
            )}
          </CardWrapper>
        );
      })}
    </div>
    
    {/* Add pulse animation */}
    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.05); }
      }
      
      a.card:hover > div:first-child > div:first-child {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
      }
      
      a.card:hover > div:last-child {
        transform: translateX(4px);
      }
    `}</style>
  </section>
);
