"use client";

import Link from "next/link";
import Image from "next/image"; // Importar el componente Image

const Links = [
  { href: "/", Text: "Home" },
  { href: "/information", Text: "Information" },
  { href: "/aboutUs", Text: "About Us" },
];

const NavBar = () => {
  return (
    <nav className="bg-black text-white py-2 fixed w-full z-20 top-0 left-0"> {/* Mantener padding vertical */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center relative" style={{ width: '400px', height: '120px' }}> {/* Aumentar tamaño del contenedor */}
          <Image
            src="/bmsLogoTrans.png" // Ruta de la imagen en la carpeta public
            alt="BMS Support Logo"
            fill // Usar fill para llenar el contenedor
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Agregar sizes
            priority // Asegura que esta imagen se cargue prioritariamente
            style={{ objectFit: 'contain' }} // Mantiene la proporción del logo
          />
        </div>
        <div className="flex space-x-4"> {/* Reducir espacio entre enlaces */}
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              {link.Text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;










