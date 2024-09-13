import React from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="w-full h-full p-8">
      {/* Contact Info */}
        {/* Left-align name and title */}
        <div className="flex row space-between">
          <header className="mb-0 text-left flex-1">
            <h1 className="text-xl font-semibold mb-1">Ewan May</h1>
            <p className="text-base text-secondary text-md font-med">Full Stack Engineer</p>
          </header>
          <Contact />
        </div>

        <Experience />

        {/* Education and Skills Side by Side */}
        <div className="flex flex-row">
          <div className="pr-8">
            <Education />
          </div>
          <div className="flex-1">
            <Skills />
          </div>
        </div>
    </div>
  );
};

export default App;
