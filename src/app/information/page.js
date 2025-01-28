"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import EmployeeTab from "@/components/EmployeeTab";
import Image from "next/image";
import TopFour from "@/components/TopFour";

export default function InformationPage() {
  const services = [
    {
      title: "Web Apps Development",
      description:
        "Creation of secure and functional web applications tailored to the specific needs of clients.",
      color: "bg-blue-500",
    },
    {
      title: "Cyber Security Services",
      description:
        "Specialized services in cybersecurity to protect systems and data from online threats.",
      color: "bg-red-500",
    },
    {
      title: "Database Administration",
      description:
        "Expert administration of databases to ensure their efficiency, integrity, and security.",
      color: "bg-green-500",
    },
    {
      title: "Software Support Services",
      description:
        "Technical support services to ensure the continuous operation and optimization of enterprise software.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen">
      <NavBar />
      
      <header className="relative flex items-center justify-center h-[50vh] mt-16"> {/* Cambiado h-screen a h-[50vh] */}
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/information.jpg"
            alt="Information Background"
            fill
            className="object-cover opacity-60"
          />
          {/* Degradado de negro a verde */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-green-900 opacity-70"></div>
        </div>
        
        {/* Contenido del header */}
        <div className="relative z-10 py-6 px-6 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Our Services</h1>
          <p className="text-gray-300 text-lg">
            Discover a wide range of tailored solutions designed to meet your needs.
          </p>
        </div>
      </header>

      {/* Integra aqui la seccion top four */}
      <TopFour/>

      <EmployeeTab />

      <Footer />
    </div>
  );
}

