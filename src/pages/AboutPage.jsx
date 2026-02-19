import React from "react";
import { About } from "../components/About";
import "../index.css";

export const AboutPage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Learn more about my background, journey, and what drives me</p>
      </div>
      <About />
    </div>
  );
};
