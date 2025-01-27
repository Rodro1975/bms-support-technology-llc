"use client";

import Image from "next/image";

const Specializations = () => {
  return (
    <section className="bg-black text-white flex flex-col lg:flex-row items-center justify-center h-[90vh] p-8">
      {/* Imagen a la izquierda */}
      <div className="flex-1 w-full flex justify-center mb-6 lg:mb-0">
        <Image
          src="/specialization.jpg"
          alt="Specialization"
          width={800}
          height={600}
          className="rounded-xl object-cover w-full max-w-lg h-auto"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="flex-1 text-center lg:text-left px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">Specializations</h2>
        <p className="text-lg leading-relaxed">
          At BMS, our primary focus lies in delivering flexible and comprehensive IT 
          support services globally, ensuring seamless operations for our esteemed 
          clientele. With a dedicated team of highly skilled engineers available 
          round the clock, we prioritize resolving issues promptly and effectively, 
          thereby optimizing our clients operational efficiency.
        </p>
      </div>
    </section>
  );
};

export default Specializations;


