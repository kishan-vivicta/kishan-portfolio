import React from "react";
import { profile } from "../data/profileData";

export const Projects = () => (
  <section id="projects" className="section fade-in-up">
    <div className="card-grid">
      {profile.projects.map((proj) => (
        <div key={proj.name} className="card">
          <div className="card-title">{proj.name}</div>
          <div className="card-meta">
            {proj.customer ? `${proj.customer} · ` : ""}
            {proj.role}
          </div>
          <ul className="card-list">
            {proj.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="chip-row">
            {proj.techStack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
