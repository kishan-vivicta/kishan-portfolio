import React from "react";
import { profile } from "../data/profileData";

export const About = () => (
  <section id="about" className="section fade-in-up">
    <h2 className="section-heading">
      <span />
      About
    </h2>
    <p className="section-subtitle">
      Azure Architect and DevOps Engineer specializing in cloud adoption,
      Kubernetes, and AI-powered platforms.
    </p>
    <div className="card">
      <p
        style={{
          fontSize: 14,
          color: "#d1d5db",
          marginBottom: 12
        }}
      >
        {profile.summary}
      </p>
      <p style={{ fontSize: 13, color: "#9ca3af" }}>
        I enjoy collaborating with cross-functional teams, designing enterprise
        architectures that balance performance, cost, and security, and
        building automation that makes cloud platforms predictable and
        resilient.
      </p>
    </div>
  </section>
);
