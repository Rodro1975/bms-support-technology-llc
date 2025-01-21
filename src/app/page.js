"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import ContactUs from "@/components/ContactUs";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState (false);
  
  const handleContactClick = () =>{
    setIsModalOpen(true);
  };
  const handleCloseModal  = () =>{
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black">
      <NavBar />
      <div className="relative flex items-center justify-center h-screen mt-16"> {/* Agregar margin-top */}
        <div className="absolute inset-0">
          <Image
            src="/heroBms.jpg"
            alt="Imagen de soporte BMS"
            fill
            style={{ objectFit: "cover" }} 
            priority // Asegura que esta imagen se cargue prioritariamente
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-lg text-center text-white p-8">
        <h1 className="text-6xl font-bold text-primary text-center relative">
          BMS Support Technology 
          <span className="text-gray-400"> LLC</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-lg"></span>
        </h1>
          <p className="mt-4 text-foreground">We Transform Ideas Into Digital Innovation.</p>
          
          <button onClick={handleContactClick} className="mt-6 px-4 py-2 bg-green-500 rounded hover:bg-green-600">
            Contact Us.
          </button>          

          <p className="mt-8">
            <Link href="/login" className="text-gray-400 hover:text-secondary transition-colors duration-300">
              For Employees Only.
            </Link>
          </p>

          {/* Renderizar el modal si está abierto */}
          {isModalOpen && <ContactUs onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
};
