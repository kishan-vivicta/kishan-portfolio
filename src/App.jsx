import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Awards />
        <Contact />
      </main>
    </>
  );
}

export default App;
