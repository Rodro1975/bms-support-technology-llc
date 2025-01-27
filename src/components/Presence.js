"use client";

import Image from "next/image";

const OurPresence = () => {
  return (
    <section className="bg-black min-h-[90vh] py-10 mb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl text-primary mb-5">Our Presence</h2>
          <p className="text-foreground mb-10 max-w-2xl mx-auto">
            With a global footprint spanning Africa, Asia, Europe, Latin America, USA, Canada, and the Middle East, we ensure widespread coverage and accessibility.
          </p>
        </div>
        <div className="relative w-full h-96 mb-8">
          <Image 
            src="/WorldMap.png" 
            alt="World Map" 
            fill 
            className="rounded-lg object-cover" 
          />
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {[
            { region: "Africa", text: "Expanding our services across major cities." },
            { region: "Asia", text: "Connecting with diverse markets and cultures." },
            { region: "Europe", text: "Providing tailored solutions for local needs." },
            { region: "Latin America", text: "Enhancing accessibility and support across the region." },
            { region: "USA", text: "Leading the way in technology and innovation." },
            { region: "Canada", text: "Fostering partnerships for mutual growth." },
            { region: "Middle East", text: "Expanding our influence in emerging markets." },
          ].map(({ region, text }, index) => (
            <div
              key={index}
              className="flex-1 min-w-[200px] p-4 rounded-lg bg-white shadow-lg"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {region}
              </h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;




