import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
export default function App() {
  return (
   <main className="text-gray-500 bg-sky-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Resume />
   </main>
  );
}
// Path: src/App.test.js