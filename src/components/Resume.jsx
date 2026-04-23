import React from "react";

export default function Resume() {
  const oneDriveDownloadUrl =
    "https://drive.google.com/file/d/1smElwBDPxs7f1KRyJ8KDGzpJY7ag5KVz/view?usp=sharing"; 

  return (
    <section id="resume" className="py-20 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">My Resume</h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          For a more detailed look at my work experience, education, and skills,
          please download my full CV.
        </p>

        <a
          href={oneDriveDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-slate-500 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
