import React from "react";
import { Awards } from "../components/Awards";
import "../index.css";

export const AwardsPage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">Awards & Recognition</h1>
        <p className="page-subtitle">Honors and achievements throughout my career</p>
      </div>
      <Awards />
    </div>
  );
};
