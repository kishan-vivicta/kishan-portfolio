import React from "react";
import { profile } from "../data/profileData";

export const Education = () => (
  <section id="education" className="section fade-in-up">
    <h2 className="section-heading">
      <span />
      Education
    </h2>
    <p className="section-subtitle">
      A strong engineering foundation supporting cloud and AI architecture work.
    </p>
    <div className="card-grid">
      {profile.education.map((ed) => (
        <div key={ed.university} className="card">
          <div className="card-title">{ed.degree}</div>
          <div className="card-meta">
            {ed.university} · {ed.location}
          </div>
          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 6 }}>
            {ed.period}
          </div>
        </div>
      ))}
    </div>
  </section>
);
