"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo";

const Links = [
  { href: "/", Text: "Home" },
  { href: "/information", Text: "Information" },
  { href: "/aboutUs", Text: "About Us" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-2 fixed w-full z-20 top-0 left-0 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logotipo */}
        <div className="flex items-center">
        <Logo className="w-auto" /> {/* Usar el componente Logo */}
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Enlaces de navegación (solo visibles en pantallas grandes) */}
        <div className="hidden lg:flex lg:flex-row lg:space-x-4 transition-all duration-300">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-green-500 transition-colors duration-300 py-2 px-4 rounded"
            >
              {link.Text}
            </Link>
          ))}
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white py-2">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-center hover:text-green-500 transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
            >
              {link.Text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
