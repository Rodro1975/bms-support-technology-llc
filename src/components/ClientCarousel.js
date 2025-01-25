"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ClientCarousel = () => {
  const clients = [
    { src: "/avaso.png", alt: "Avaso Logo" },
    { src: "/ict.png", alt: "ICT Logo" },
    { src: "/iff.png", alt: "IFF Logo" },
    { src: "/layers.jpg", alt: "Layers Logo" },
    { src: "/tech.jpg", alt: "Tech Logo" },
  ];

  return (
    <section className="bg-gray-900 py-8">
      <h2 className="text-center text-secondary text-2xl font-bold mb-6">
        Nuestros Clientes
      </h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {clients.map((client, index) => (
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
          {clients.map((client, index) => (
            <div
              key={`loop-${index}`}
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


