import React from "react";
import { Education } from "../components/Education";
import "../index.css";

export const EducationPage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">Education</h1>
        <p className="page-subtitle">My academic background and qualifications</p>
      </div>
      <Education />
    </div>
  );
};
