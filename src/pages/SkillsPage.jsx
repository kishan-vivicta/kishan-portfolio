import React from "react";
import { Skills } from "../components/Skills";
import "../index.css";

export const SkillsPage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">Technical skills and tools I work with</p>
      </div>
      <Skills />
    </div>
  );
};
