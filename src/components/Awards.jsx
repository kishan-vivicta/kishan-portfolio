import React from "react";
import { profile } from "../data/profileData";

export const Awards = () => (
  <section id="awards" className="section fade-in-up">
    <h2 className="section-heading">
      <span />
      Awards
    </h2>
    <p className="section-subtitle">
      Recognition for impact, leadership, and innovation in cloud and DevOps
      delivery.
    </p>
    <div className="card">
      <ul className="card-list">
        {profile.awards.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  </section>
);
