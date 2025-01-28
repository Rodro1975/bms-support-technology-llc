"use client";

import Image from "next/image";

const ProcurementSolution = () => {
  return (
    <section
      className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 py-12 bg-black text-white"
      id="digital-process"
    >
      {/* Texto a la izquierda */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Procurement Solutions
        </h2>
        <div className="flex flex-col gap-4">
          {/* Primera línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
            Purchase Requisition
            </h3>
            <p className="text-gray-300 mt-2">
            Purchasing Services for operation 
            staff is available every time from 
            local and international market.
            </p>
          </div>
          {/* Segunda línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
            New / Refurbish Equipment
            </h3>
            <p className="text-gray-300 mt-2">
            To maintain the purchasing new/
            refurbish equipment services are
            available on demand.
            </p>
          </div>
          {/* Tercera línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
            Logistic Services
            </h3>
            <p className="text-gray-300 mt-2">
            Logistics Services of It Equipment are 
            also delivered on demand.
            </p>
          </div>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
        <Image
          src="/procurement.jpg" // Reemplaza con la ruta de tu imagen
          alt="Digital Process"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default ProcurementSolution;