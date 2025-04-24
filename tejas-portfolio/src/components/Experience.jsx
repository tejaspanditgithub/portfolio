export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Software Engineer – Zensar Technologies</h3>
          <p className="text-sm text-gray-500">Aug 2022 – Present</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Developed responsive dashboards with graphs, charts, and Google Maps.</li>
            <li>Used React.js, TypeScript, Redux, Tailwind, Jest, and Context API.</li>
            <li>Maintained over 80% test coverage using Jest and React Testing Library.</li>
            <li>Collaborated on scalable component design and optimized performance with code splitting.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}