import React from "react";
import { Experience } from "../components/Experience";
import "../index.css";

export const ExperiencePage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">Professional Experience</h1>
        <p className="page-subtitle">My journey through various roles and responsibilities</p>
      </div>
      <Experience />
    </div>
  );
};
