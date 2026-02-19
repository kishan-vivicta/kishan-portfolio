import React from "react";
import { Projects } from "../components/Projects";
import "../index.css";

export const ProjectsPage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">Projects & Portfolio</h1>
        <p className="page-subtitle">Showcasing my work and contributions</p>
      </div>
      <Projects />
    </div>
  );
};
