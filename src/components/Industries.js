"use client";

import { FaIndustry, FaPhone, FaFlask, FaLaptop, FaStore, FaBolt, FaPlane, FaHeart, FaOilCan, FaShieldAlt, FaSuitcaseRolling } from 'react-icons/fa';

const Industries = () => {
  const industries = [
    { name: "Aerospace and Defence", icon: <FaPlane /> },
    { name: "Chemical and Process Industries", icon: <FaFlask /> },
    { name: "Energy and Utilities", icon: <FaBolt /> },
    { name: "Healthcare", icon: <FaHeart /> },
    { name: "Insurance", icon: <FaShieldAlt /> },
    { name: "Mining and Natural Resources", icon: <FaIndustry /> },
    { name: "Oil and Gas", icon: <FaOilCan /> },
    { name: "Retail", icon: <FaStore /> },
    { name: "Telecom", icon: <FaPhone /> },
    { name: "Technology", icon: <FaLaptop /> },
    { name: "Travel, Transport, Logistics & Hospitality", icon: <FaSuitcaseRolling /> }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-black text-white">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
      {/* Barra divisoria */}
      <div className="w-1/2 h-1 bg-green-500 mb-8"></div>

      {/* Servicios organizados en columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4"> {/* Agregado px-4 para márgenes */}
        {industries.sort((a, b) => a.name.localeCompare(b.name)).map((industry, index) => (
          <div
            key={industry.name}
            className={`flex items-center text-white p-4 rounded-lg ${
              index % 2 === 0 ? 'bg-green-500' : 'bg-green-600' // Intercalar colores
            }`}
          >
            <div className="mr-4 text-2xl">{industry.icon}</div>
            <span>{industry.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;


