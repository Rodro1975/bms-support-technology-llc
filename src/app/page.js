"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import ContactUs from "@/components/ContactUs";
import Link from "next/link";
import Footer from "@/components/Footer";
import EmployeeTab from "@/components/EmployeeTab";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black">
      <NavBar />
      <div className="relative flex items-center justify-center h-screen mt-16">
        <div className="absolute inset-0">
          <Image
            src="/heroBms.jpg"
            alt="Imagen de soporte BMS"
            fill
            style={{ objectFit: "cover" }} 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-lg text-center text-white p-8">
          <h1 className="text-7xl font-bold text-primary text-shadow-md relative">
            BMS Support Technology 
            <span className="text-gray-400"> LLC</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-40 rounded-lg"></span>
          </h1>
          <p className="mt-4 text-lg text-foreground">We Transform Ideas Into Digital Innovation.</p>
          
          <button 
            onClick={handleContactClick} 
            className="mt-6 px-6 py-3 bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Contact Us
          </button>       
         
          {/* Renderizar el modal si está abierto */}
          {isModalOpen && <ContactUs onClose={handleCloseModal} />}
        </div>
        
      </div>
      <EmployeeTab/>
      <Footer/>
    </div>
  );
}


