"use client";

import React from "react";
import Image from "next/image";

const ModFoot1 = ({ isVisible, footerHeight }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      } transition-opacity duration-300 mt-6`}
      style={{ height: footerHeight }}
    >
      {/* Modal Content */}
      <div className="bg-black text-white rounded-2xl p-6 shadow-lg max-w-4xl w-full max-h-[60vh] overflow-y-auto mt-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Contact Us</h2>
          <p className="text-primary mb-4">
            If you need additional information, advice, or quotes, please reach out via WhatsApp:
          </p>

          {/* WhatsApp Links with Enhanced Flags */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://wa.me/+5215587600578"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 via-green-600 to-green-800 rounded-full p-2 shadow-lg">
                <Image
                  src="/mexico.png"
                  alt="Mexico Flag"
                  width={100}
                  height={100}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-sm text-gray-300">Mexico</span>
            </a>
            <a
              href="https://wa.me/+573022283964"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 rounded-full p-2 shadow-lg">
                <Image
                  src="/colombia.png"
                  alt="Colombia Flag"
                  width={100}
                  height={100}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-sm text-gray-300">Colombia</span>
            </a>
            <a
              href="https://wa.me/+447743315120"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full p-2 shadow-lg">
                <Image
                  src="/uk.png"
                  alt="UK Flag"
                  width={100}
                  height={100}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-sm text-gray-300">UK</span>
            </a>
          </div>

          {/* Company Information in Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 text-sm leading-relaxed">
            <p>
              <strong className="text-white">Future Idea:</strong> From inception to implementation, we oversee and manage new ideas and processes, ensuring seamless execution from inquiry to realization.
            </p>
            <p>
              <strong className="text-white">200+ Engineers:</strong> With over 200 competent Field Engineers worldwide, we boast a skilled and expansive team ready to tackle any challenge.
            </p>
            <p>
              <strong className="text-white">Our Presence:</strong> With a global footprint spanning Africa, Asia, Europe, Latin America, USA, Canada, and the Middle East, we ensure widespread coverage and accessibility.
            </p>
            <p>
              <strong className="text-white">Since <span className="font-bold">2020</span>:</strong> Established in 2020, our company has been serving clients for over 15 years, delivering excellence and reliability.
            </p>
            <p>
              <strong className="text-white">Our Service Supply:</strong> We offer a wide range of services covering renowned brands such as HP, IBM, DELL, CISCO, FUJITSU, NETAPP, EMC, Aruba, Oracle/Sun, Hitachi, and more.
            </p>
          </div>

          {/* Logo at the end */}
          <div className="flex justify-center mt-4">
            <Image src="/bmsLogoBlack.png" alt="BMS Logo" width={150} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModFoot1;
