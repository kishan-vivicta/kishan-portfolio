import React from "react";
import { Contact } from "../components/Contact";
import "../index.css";

export const ContactPage = () => {
  return (
    <div className="page-content page-fade-in">
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Let's connect and discuss opportunities</p>
      </div>
      <Contact />
    </div>
  );
};
