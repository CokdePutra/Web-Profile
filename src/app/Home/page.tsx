import React from "react";

const HomePage = () => {
  return (
    <div>
      <section id="hero" className="h-screen flex items-center justify-center">
        <div className="left">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        </div>
        <div className="right">
          <p className="text-lg mt-4">I am a passionate developer.</p>
          <a
            href="#projects"
            className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">
            View My Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
