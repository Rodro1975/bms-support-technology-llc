"use client";

import React from "react";
import Image from "next/image";

const ModFoot3 = ({ isVisible, footerHeight }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      } transition-opacity duration-300`}
      style={{ height: footerHeight }}
    >
      {/* Contenedor del modal */}
      <div className="bg-black text-white rounded-2xl p-6 shadow-lg max-w-3xl w-full max-h-[60vh] overflow-y-auto relative">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Thank You!</h2>
          <p className="text-gray-300 mb-6">
            We would like to express our heartfelt gratitude to all our partners and resources that have supported us in our journey.
            Special thanks to platforms like Unsplash for providing stunning images, Tailwind CSS for its utility-first framework,
            Next.js 15 for its powerful features, Node.js for backend support, and Supabase for database management.
          </p>
          <p className="text-gray-300 mb-6">
            Your contributions have been invaluable in helping us create efficient and visually appealing web applications.
            We look forward to continuing this journey together and exploring new opportunities.
          </p>
          <p className="text-gray-300 mb-6">
            For any inquiries regarding web system design, feel free to reach out via WhatsApp:
            <a
              href="https://wa.me/+573022283964"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              Contact Us
            </a>.
          </p>
          {/* Logo al final */}
          <div className="flex justify-center mt-4">
            <Image src="/bmsLogoBlack.png" alt="BMS Logo" width={150} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModFoot3;




