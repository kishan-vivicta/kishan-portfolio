import React from "react";
import { profile } from "../data/profileData";

export const Skills = () => {
  const { skills } = profile;

  return (
    <section id="skills" className="section fade-in-up">
      <h2 className="section-heading">
        <span />
        Skills
      </h2>
      <p className="section-subtitle">
        A blend of Azure architecture, DevOps engineering, AI platforms, and
        automation.
      </p>
      <div className="card-grid">
        <div className="card">
          <div className="card-title">Cloud & DevOps</div>
          <ul className="card-list">
            {skills.cloudDevOps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="card-title">AI & Cloud AI Platforms</div>
          <ul className="card-list">
            {skills.aiPlatforms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="card-title">Automation & Scripting</div>
          <ul className="card-list">
            {skills.automation.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="card-title">Development & Data</div>
          <ul className="card-list">
            {skills.development.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
