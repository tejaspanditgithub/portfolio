const skills = [
  "React.js", "JavaScript", "TypeScript", "Redux", "Context API", "HTML", "CSS", 
  "Tailwind", "Node.js", "Express", "MongoDB", "SQL", "Jest", "React Testing Library"
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}