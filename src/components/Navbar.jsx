import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-gray-800 cursor-pointer"
            >
              Jonathan Muchewicz
            </Link>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
            >
              Sobre mí
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
            >
              Tecnologías
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
            >
              Proyectos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
              onClick={toggleMenu}
            >
              Sobre mí
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
              onClick={toggleMenu}
            >
              Tecnologías
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-orange-500 cursor-pointer"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
