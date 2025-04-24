export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
      <h1 className="text-4xl md:text-6xl font-bold">Tejas Vaibhav Pandit</h1>
      <p className="mt-4 text-lg md:text-xl">Frontend Developer | React | TypeScript | MERN Stack</p>
      <a
        href="#contact"
        className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        Get In Touch
      </a>
    </section>
  );
}