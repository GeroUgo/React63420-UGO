import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CartWidget from "./CartWidget";

const Navbar = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              {logo}
            </Link>
          </div>

          {/* Menú Desktop */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8 text-lg">
              <li>
                <Link to="/" className="hover:text-gray-400 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gray-400 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-gray-400 transition">
                  Faqs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Iconos de carrito y botones (desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <CartWidget />
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition">
              Iniciar Sesión
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md transition">
              Registrarse
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Carrito en móvil */}
            <CartWidget />

            {/* Botón menú hamburguesa */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {menuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      <div
        className={`lg:hidden bg-gray-900 transition-all duration-300 overflow-hidden 
        ${menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-blue-400 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-blue-400 transition">
              Faqs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contacto
            </Link>
          </li>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition">
            Iniciar Sesión
          </button>
          <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md transition">
            Registrarse
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
