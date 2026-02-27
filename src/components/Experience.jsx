import React from "react";
import { profile } from "../data/profileData";

export const Experience = () => (
  <section id="experience" className="section fade-in-up">
    <div className="card-grid">
      {profile.experience.map((exp) => (
        <div key={exp.company + exp.period} className="card">
          <div className="card-title">
            {exp.title} · {exp.company}
          </div>
          <div className="card-meta">
            {exp.location} · {exp.period}
          </div>
          <ul className="card-list">
            {exp.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
