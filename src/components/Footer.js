"use client";

import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import ModFoot1 from "./ModFoot1";
import ModFoot2 from "./ModFoot2";
import ModFoot3 from "./ModFoot3";

const Footer = () => {
  // Estados para controlar qué modal está visible
  const [visibleModal, setVisibleModal] = useState(null);

  const openModal = (modalName) => {
    setVisibleModal(modalName);
  };

  const closeModal = () => {
    setVisibleModal(null);
  };

  return (
    <>
      {/* Footer principal */}
      <footer
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/footer.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Principal container */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto px-6 h-full place-items-center">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/bmsLogoBlack.png"
              alt="BMS Logo Black"
              width={300}
              height={300}
              className="mb-4"
            />
          </div>

          {/* Títulos con modales */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Items List 1 */}
            <span
              onMouseEnter={() => openModal("list1")}
              onMouseLeave={closeModal}
              className="font-bold text-lg cursor-pointer text-center lg:text-left text-foreground hover:text-primary transition"
            >
              Items List 1
            </span>
            <ModFoot1
              isVisible={visibleModal === "list1"}
              onClose={closeModal}
            />
          </div>

          <div className="flex flex-col items-center lg:items-start">
            {/* Items List 2 */}
            <span
              onMouseEnter={() => openModal("list2")}
              onMouseLeave={closeModal}
              className="font-bold text-lg cursor-pointer text-center lg:text-left text-foreground hover:text-primary transition"
            >
              Items List 2
            </span>
            <ModFoot2
              isVisible={visibleModal === "list2"}
              onClose={closeModal}
            />
          </div>

          <div className="flex flex-col items-center lg:items-start">
            {/* Items List 3 */}
            <span
              onMouseEnter={() => openModal("list3")}
              onMouseLeave={closeModal}
              className="font-bold text-lg cursor-pointer text-center lg:text-left text-foreground hover:text-primary transition"
            >
              Items List 3
            </span>
            <ModFoot3
              isVisible={visibleModal === "list3"}
              onClose={closeModal}
            />
          </div>
        </div>

        
      </footer>

      {/* Social Media */}
      <div className="justify-items-center text-center text-foreground p-4 bg-black bg-opacity-50">
          <a
            href="https://www.linkedin.com/in/tu-perfil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground text-3xl hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <p className="text-sm mt-2">LinkedIn</p>
        </div>
        
      {/* Copyright */}
      <div className="text-center text-foreground p-4 bg-black bg-opacity-50">
        <p>© Design by Rodrigo Iván Ordoñez Chávez || All Rights Reserved 2025</p>
      </div>
    </>
  );
};

export default Footer;












