import React from "react";
import CartWidget from "./CartWidget";

const Navbar = ({logo}) => {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
                {logo}
            </a>
          </div>

          
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          
          <div className="flex items-center space-x-4">
            <CartWidget />
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-200">
              Iniciar Sesión
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition duration-200">
              Registrarse
            </button>
          </div>

          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
