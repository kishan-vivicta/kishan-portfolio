import React from "react";
import { profile } from "../data/profileData";

export const About = () => (
  <section id="about" className="section fade-in-up">
    <div className="card">
      <p
        style={{
          fontSize: 16,
          color: "#475569",
          marginBottom: 14,
          lineHeight: 1.7
        }}
      >
        {profile.summary}
      </p>
      <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7 }}>
        I enjoy collaborating with cross-functional teams, designing enterprise
        architectures that balance performance, cost, and security, and
        building automation that makes cloud platforms predictable and
        resilient.
      </p>
    </div>
  </section>
);
