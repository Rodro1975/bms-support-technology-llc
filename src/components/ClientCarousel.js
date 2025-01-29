"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ClientCarousel = () => {
  const clients = [
    { src: "/avaso.png", alt: "Avaso Logo" },
    { src: "/dell.jpg", alt: "Dell Logo" },
    { src: "/hcl.jpg", alt: "HCL Logo" },
    { src: "/hitachi.png", alt: "Hitachi Logo" },
    { src: "/ict.png", alt: "ICT Logo" },
    { src: "/iff.png", alt: "IFF Logo" },
    { src: "/infosys.png", alt: "Infosys Logo" },
    { src: "/layers.jpg", alt: "Layers Logo" },
    { src: "/lenovo.png", alt: "Lenovo Logo" },
    { src: "/tech.jpg", alt: "Tech Logo" },
  ];

  return (
    <section className="bg-black h-[30vh] py-10 overflow-hidden">
      <h2 className="text-center text-secondary text-2xl font-bold mb-6">
        Our Clients
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Se mueve hasta la mitad del contenido duplicado
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => ( // Duplicamos los logos
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 bg-black rounded-lg flex items-center justify-center shadow-lg"
            >
              <Image
                src={client.src}
                width={100}
                height={100}
                alt={client.alt}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientCarousel;



