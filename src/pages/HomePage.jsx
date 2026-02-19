import React from "react";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import "../index.css";

export const HomePage = () => {
  const sections = [
    { title: "About Me", path: "/about", icon: "👤", description: "Learn about my background and journey" },
    { title: "Skills", path: "/skills", icon: "⚡", description: "Technical skills and expertise" },
    { title: "Experience", path: "/experience", icon: "💼", description: "Professional work experience" },
    { title: "Projects", path: "/projects", icon: "🚀", description: "Portfolio of my work" },
    { title: "Education", path: "/education", icon: "🎓", description: "Academic background" },
    { title: "Certifications", path: "/certifications", icon: "📜", description: "Professional certifications" },
    { title: "Awards", path: "/awards", icon: "🏆", description: "Recognition and achievements" },
    { title: "Contact", path: "/contact", icon: "📧", description: "Get in touch with me" }
  ];

  return (
    <div className="page-content">
      <Hero />
      
      <section className="section" style={{ paddingTop: "48px" }}>
        <h2 className="section-heading">
          <span></span>
          Explore My Portfolio
        </h2>
        <p className="section-subtitle">
          Navigate through different sections to learn more about my skills and experience
        </p>
        
        <div className="home-grid">
          {sections.map((section, index) => (
            <Link 
              to={section.path} 
              key={index}
              className="home-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="home-card-icon">{section.icon}</div>
              <h3 className="home-card-title">{section.title}</h3>
              <p className="home-card-description">{section.description}</p>
              <div className="home-card-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
