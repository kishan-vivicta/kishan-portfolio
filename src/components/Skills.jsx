import React from "react";
import { profile } from "../data/profileData";

export const Skills = () => {
  const { skills } = profile;

  const categories = [
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      skills: skills.cloudDevOps
    },
    {
      title: "AI & Cloud AI Platforms",
      icon: "🤖",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      skills: skills.aiPlatforms
    },
    {
      title: "Automation & Scripting",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
      skills: skills.automation
    },
    {
      title: "Development & Data",
      icon: "💻",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      skills: skills.development
    },
    {
      title: "Project Management & Scrum",
      icon: "📋",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      skills: skills.projectManagement
    }
  ];

  const totalSkills = Object.values(skills).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <section id="skills" className="section fade-in-up">
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
          <span style={{ fontSize: "1.5rem" }}>🎯</span>
          Technical Expertise
        </h3>
        <div style={{
          color: "#475569",
          fontSize: "0.95rem",
          lineHeight: "1.7",
          marginBottom: "16px"
        }}>
          <p style={{ margin: 0 }}>
            Comprehensive skill set spanning <strong style={{ color: "#3b82f6" }}>{totalSkills}+ technologies and tools</strong> across cloud platforms, DevOps practices, AI infrastructure, and modern development.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "12px"
        }}>
          {categories.map((cat, idx) => (
            <div key={idx} style={{
              padding: "12px 16px",
              background: "white",
              borderRadius: "10px",
              border: "1px solid rgba(59, 130, 246, 0.15)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "4px" }}>{cat.icon}</div>
              <div style={{
                fontSize: "0.85rem",
                color: "#64748b",
                fontWeight: "600"
              }}>
                {cat.skills.length} Skills
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Cards */}
      <div className="card-grid">
        {categories.map((category, idx) => (
          <div key={idx} className="card" style={{
            position: "relative",
            overflow: "visible"
          }}>
            {/* Category Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px"
            }}>
              <div style={{
                fontSize: "2rem",
                background: category.gradient,
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
              }}>
                {category.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "4px"
                }}>
                  {category.title}
                </h3>
                <div style={{
                  fontSize: "0.85rem",
                  color: "#64748b",
                  fontWeight: "600"
                }}>
                  {category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}
                </div>
              </div>
            </div>

            {/* Skills List */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "10px 12px",
                  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                  borderRadius: "8px",
                  border: "1px solid rgba(148, 163, 184, 0.15)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}>
                  <span style={{
                    fontSize: "1rem",
                    color: "#3b82f6",
                    fontWeight: "700",
                    flexShrink: 0,
                    marginTop: "2px"
                  }}>
                    •
                  </span>
                  <span style={{
                    fontSize: "0.95rem",
                    color: "#475569",
                    lineHeight: "1.5",
                    fontWeight: "500"
                  }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
