"use client";

import { useState } from "react";
import Image from "next/image";
import ContactUs from "./ContactUs";

const Outsoursing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Header con imagen y título */}
      <div className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/outsoursing.jpg"
          alt="Outsoursing Image"
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
          className="object-cover"
        />
        {/* Degradado para mayor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <h2 className="absolute text-4xl text-secondary font-bold text-white z-10">
          Outsourcing Services
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-lg">
          At BMS Support, we understand that managing IT operations in-house can
          be both costly and time-consuming. Our IT outsourcing services provide
          you with access to a team of experienced professionals who can handle
          your IT needs efficiently and effectively.
        </p>
        <h2 className="text-3xl text-primary font-semibold mt-6">
          Comprehensive IT Outsourcing Solutions
        </h2>
        <p className="mt-4">
          Our services are designed to offer flexible, scalable solutions that
          meet the unique needs of your business.
        </p>
        <h2 className="text-3xl text-primary font-semibold mt-6">
          Key Features of Our IT Outsourcing Services
        </h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Dedicated IT Support: 24/7 assistance.</li>
          <li>Cost Efficiency: Reduce operational costs.</li>
          <li>Access to Expertise: Skilled IT professionals.</li>
          <li>Scalable Solutions: Adapt to business growth.</li>
          <li>Advanced Security: Robust IT security measures.</li>
          <li>Customizable Services: Tailored IT solutions.</li>
        </ul>
        <p className="text-lg mt-6">
          By choosing BMS Support, you will benefit from improved efficiency,
          access to the latest technology, and a proactive approach.
        </p>
        <button
          onClick={handleContactClick}
          className="mt-6 px-6 py-3 bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          Let&apos;s Talk
        </button>
      </div>

      {/* Renderizar el modal si está abierto */}
      {isModalOpen && <ContactUs onClose={handleCloseModal} />}
    </section>
  );
};

export default Outsoursing;
