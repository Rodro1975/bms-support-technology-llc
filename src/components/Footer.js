"use client";

import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import ModFoot1 from "./ModFoot1";
import ModFoot2 from "./ModFoot2";
import ModFoot3 from "./ModFoot3";

const Footer = () => {
  const [visibleModal, setVisibleModal] = useState(null);

  const openModal = (modalName) => {
    setVisibleModal(modalName);
  };

  const closeModal = (modalName) => {
    if (visibleModal === modalName) {
      setVisibleModal(null);
    }
  };

  return (
    <>
      {/* Footer principal */}
      <footer
        className="relative h-screen bg-fixed bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: "url('/footer.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

        {/* Principal container */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto px-6 h-full place-items-center">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/bmsLogoTrans.png"
              alt="BMS Logo Black"
              width={300}
              height={300}
              className="mb-4"
            />
          </div>

          {/* Títulos con modales */}
          <div
            className="flex flex-col items-center lg:items-start"
            onMouseEnter={() => openModal("list1")}
            onMouseLeave={() => closeModal("list1")}
          >
            {/* Items List 1 */}
            <span className="font-bold text-lg cursor-pointer text-center lg:text-left text-foreground hover:text-primary transition">
              Contact Us
            </span>
            {visibleModal === "list1" && (
              <ModFoot1
                isVisible={visibleModal === "list1"}
                footerHeight="100%"
                onMouseEnter={() => openModal("list1")}
                onMouseLeave={() => closeModal("list1")}
              />
            )}
          </div>

          <div
            className="flex flex-col items-center lg:items-start"
            onMouseEnter={() => openModal("list2")}
            onMouseLeave={() => closeModal("list2")}
          >
            {/* Items List 2 */}
            <span className="font-bold text-lg cursor-pointer text-center lg:text-left text-foreground hover:text-primary transition">
              Who We Are
            </span>
            {visibleModal === "list2" && (
              <ModFoot2
                isVisible={visibleModal === "list2"}
                footerHeight="100%"
                onMouseEnter={() => openModal("list2")}
                onMouseLeave={() => closeModal("list2")}
              />
            )}
          </div>

          <div
            className="flex flex-col items-center lg:items-start"
            onMouseEnter={() => openModal("list3")}
            onMouseLeave={() => closeModal("list3")}
          >
            {/* Items List 3 */}
            <span className="font-bold text-lg cursor-pointer text-center lg:text-left text-foreground hover:text-primary transition">
              Thanks
            </span>
            {visibleModal === "list3" && (
              <ModFoot3
                isVisible={visibleModal === "list3"}
                footerHeight="100%"
                onMouseEnter={() => openModal("list3")}
                onMouseLeave={() => closeModal("list3")}
              />
            )}
          </div>
        </div>
      </footer>

      {/* Social Media */}
      <div className="flex flex-col items-center justify-center text-center text-foreground p-4 bg-black bg-opacity-70">
        <a
          href="https://www.linkedin.com/in/bms-support-tecnollogy-llc-069a74358/"
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
        <p>
          © Design by Rodrigo Iván Ordoñez Chávez || All Rights Reserved 2025
        </p>
      </div>
    </>
  );
};

export default Footer;
