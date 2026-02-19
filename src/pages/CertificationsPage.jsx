import React from "react";
import { Certifications } from "../components/Certifications";
import "../index.css";

export const CertificationsPage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">Certifications</h1>
        <p className="page-subtitle">Professional certifications and credentials</p>
      </div>
      <Certifications />
    </div>
  );
};
