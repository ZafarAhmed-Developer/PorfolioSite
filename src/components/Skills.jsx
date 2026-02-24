import React from "react";

const SkillItem = ({ name, level }) => (
  <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="text-4xl mb-2">
      <span className="font-bold">[{name}]</span>
    </div>
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-sm text-gray-600">{level}</p>
  </div>
);

export default function Skills() {
  const skillsData = [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Next.js", level: "Beginner" },
    { name: "Git", level: "Intermediate" },
    { name: "Figma", level: "Beginner" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
}
