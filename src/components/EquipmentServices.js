"use client";

import Image from "next/image";

const EquipmentServices = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Imagen de fondo con diagonal */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/equipment.jpg" // Ruta de la imagen en /public
          alt="Equipment Services"
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw" // Define tamaños opcionales
          className="object-cover opacity-30"
        />
        {/* Elimina el fondo negro */}
        <div className="absolute inset-0 clip-diagonal"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-start max-w-4xl px-6 py-12 lg:px-12 gap-8">
        {/* Título */}
        <h2 className="text-4xl font-bold text-primary">
          Equipment Stocking Services
        </h2>
        <p className="text-gray-300">
          We provide stocking and storage services for IT equipment, saving
          valuable time, cost, and energy for our clients and ensuring smooth
          operational processes.
        </p>

        {/* Línea divisoria horizontal */}
        <div className="w-full h-[2px] bg-gray-500 my-4"></div>

        {/* Segunda sección */}
        <h2 className="text-4xl font-bold text-primary">
          IT Equipment Services
        </h2>
        <p className="text-gray-300">
          Our services include finding cost-effective repairs for barcoding,
          EPoS, and IT equipment, as well as offering new IT systems, websites,
          and cloud systems tailored to meet the needs of your business.
        </p>

        {/* Línea decorativa vertical */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-500"></div>
      </div>
    </section>
  );
};

export default EquipmentServices;



