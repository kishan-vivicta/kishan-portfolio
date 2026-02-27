import React from "react";
import { profile } from "../data/profileData";

export const Contact = () => (
  <section id="contact" className="section fade-in-up">

    <div className="card">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
          gap: 16,
          fontSize: 13
        }}
      >
        <div>
          <div style={{ marginBottom: 6, color: "#9ca3af" }}>Email</div>
          <a
            href={`mailto:${profile.contacts.email}`}
            style={{ color: "#e5e7eb" }}
          >
            {profile.contacts.email}
          </a>
        </div>
        <div>
          <div style={{ marginBottom: 6, color: "#9ca3af" }}>Phone</div>
          <a href={`tel:${profile.contacts.phone}`} style={{ color: "#e5e7eb" }}>
            {profile.contacts.phone}
          </a>
        </div>
        <div>
          <div style={{ marginBottom: 6, color: "#9ca3af" }}>Location</div>
          <div>{profile.location}</div>
        </div>
        <div>
          <div style={{ marginBottom: 6, color: "#9ca3af" }}>Profiles</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer">
              LinkedIn · {profile.socialHandles.linkedin}
            </a>
            <a href={profile.contacts.github} target="_blank" rel="noreferrer">
              GitHub · {profile.socialHandles.github}
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 12,
          color: "#9ca3af",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8
        }}
      >
        <div>
          Hobbies: {profile.hobbies.join(" · ")} · Languages:{" "}
          {profile.languages.join(" · ")}
        </div>
        <div>Built with React and hosted on GitHub Pages.</div>
      </div>
    </div>
  </section>
);
