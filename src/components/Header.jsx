export default function Header() {
  return (
    <header className="bg-white shadow p-4 fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Tejas Pandit</h1>
        <ul className="flex gap-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}