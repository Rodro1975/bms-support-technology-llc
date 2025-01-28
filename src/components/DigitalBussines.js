"use client";

import Image from "next/image";

const DigitalBussiness = () => {
  return (
    <section
      className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 py-12 bg-black text-white"
      id="digital-process"
    >
      {/* Imagen a la Izquierda */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
        <Image
          src="/bussiness.jpg" // Reemplaza con la ruta de tu imagen
          alt="Digital Process"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Texto a la Derecha */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Digital Bussiness Operations
        </h2>
        <div className="flex flex-col gap-4">
          {/* Primera línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
            Finance & Accounting
            </h3>
            <p className="text-gray-300 mt-2">
            Comprehensive solutions for managing financial processes and accounting 
            tasks, ensuring accuracy, efficiency, and compliance with regulations.
            </p>
          </div>
          {/* Segunda línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
            Supply Chain Management
            </h3>
            <p className="text-gray-300 mt-2">
            End-to-end management of the flow of goods and services, optimizing processes 
            to enhance efficiency, minimize costs, and meet customer demands.
            </p>
          </div>
          {/* Tercera línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
            Lending Solutions
            </h3>
            <p className="text-gray-300 mt-2">
            Tailored financial services for lending activities, including loan origination, 
            processing, underwriting, and servicing, designed to streamline lending processes 
            and improve customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default DigitalBussiness;