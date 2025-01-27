"use client";

import  { useState } from "react";
import ContactUs from "./ContactUs";

const Headquarters = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleContactClick = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
  return (
    <section className="bg-black text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-6">Our Headquarters</h2>
      <p className="text-lg text-gray-300 text-center mb-4">
        Visit us at: <strong>2232 Dell Range Blvd Suite 245-3411</strong>
      </p>

      {/* Google Maps Iframe */}
      <div className="flex justify-center mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1737941181736!6m8!1m7!1srZ1raTK8pgvHyncAuhhQPA!2m2!1d41.16059301966236!2d-104.7854715285155!3f266.03015!4f0!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>

        {/* Contact Us */}
        <div className="flex justify-center mb-6">            
        <button 
            onClick={handleContactClick} 
            className="mt-6 px-6 py-3 bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Contact Us
        </button> 

        {/* Renderizar el modal si está abierto */}
        {isModalOpen && <ContactUs onClose={handleCloseModal} />}
        </div>      

    </section>
  );
};

export default Headquarters;






