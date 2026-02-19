import React from "react";
import { profile } from "../data/profileData";

export const Certifications = () => (
  <section id="certifications" className="section fade-in-up">
    <h2 className="section-heading">
      <span />
      Certifications
    </h2>
    <p className="section-subtitle">
      Validated expertise across Azure architecture, DevOps, Kubernetes, and AI.
    </p>
    <div className="card">
      <ul className="card-list">
        {profile.certifications.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  </section>
);
