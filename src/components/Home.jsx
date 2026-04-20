import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100 "
    >
      <div className="text-center">
        <h3 className="text-lg md:text-3xl text-green-900 text-2xl mb-4">
          Welcome to my portfolio!
        </h3>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm a Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-900 mb-8">
          I create beautiful, responsive web applications with modern technologies.
          Passionate about clean code, user experience, and solving complex problems.
        </p>
        <a
          href="#projects"
          className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
