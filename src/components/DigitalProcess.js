"use client";

import Image from "next/image";

const DigitalProcess = () => {
  return (
    <section
      className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 py-12 bg-black text-white"
      id="digital-process"
    >
      {/* Texto a la izquierda */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Digital Process Operations
        </h2>
        <div className="flex flex-col gap-4">
          {/* Primera línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
              Digital Consulting
            </h3>
            <p className="text-gray-300 mt-2">
              Expert guidance and support in navigating the digital landscape to
              optimize business strategies and processes.
            </p>
          </div>
          {/* Segunda línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
              Digital Applications & Platforms
            </h3>
            <p className="text-gray-300 mt-2">
              Development and implementation of digital applications and
              platforms to enhance business operations and customer experiences.
            </p>
          </div>
          {/* Tercera línea */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
              Application Modernization & Integration
            </h3>
            <p className="text-gray-300 mt-2">
              Upgrading and integrating existing applications to align with
              modern technologies and meet evolving business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
        <Image
          src="/digital.jpg" // Reemplaza con la ruta de tu imagen
          alt="Digital Process"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default DigitalProcess;
