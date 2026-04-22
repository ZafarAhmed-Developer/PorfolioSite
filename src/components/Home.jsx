import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-slate-950  relative overflow-hidden"
    >


      <div className="text-center z-10 px-4 max-w-4xl">
        <div className="space-y-6">
          <h3 className="text-lg md:text-2xl lg:text-3xl text-teal-600 font-semibold uppercase tracking-wide">
            Welcome to my portfolio!
          </h3>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Hi, I'm a Full Stack Developer
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-teal-600 hover:to-teal-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-teal-600 text-teal-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-50 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

  );
}
