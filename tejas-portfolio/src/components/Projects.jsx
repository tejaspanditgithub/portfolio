export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Retailer & Fleet Management</h3>
          <p className="text-gray-700 mt-2">Rebuilt a legacy AngularJS app with React for better performance and responsiveness, integrating maps and advanced data visualizations.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Workflow Architect</h3>
          <p className="text-gray-700 mt-2">Created a responsive workflow app with atomic design and Jest coverage to streamline team processes.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Customer Onboarding Ecosystem</h3>
          <p className="text-gray-700 mt-2">Built a questionnaire-based onboarding system using React and Redux with test-driven development and scalable UI design.</p>
        </div>
      </div>
    </section>
  );
}