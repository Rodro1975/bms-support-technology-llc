"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ModFoot2 = ({ isVisible, footerHeight }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      } transition-opacity duration-300 mt-6`}
      style={{ height: footerHeight }}
    >
      {/* Modal Content */}
      <div className="bg-black text-white rounded-2xl p-6 shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto mt-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Who We Are</h2>
          <p className="text-primary mb-4">
            About BMS SUPPORT TECHNOLOGY
          </p>
          <p className="text-gray-300 mb-6">
            BMS is a dynamic consortium of accomplished professionals with rich and diverse
            backgrounds in IT services, spanning various regions including EMEA, APAC, the Middle East,
            and LATAM. Founded in 2024, we pride ourselves on delivering top-notch technical solutions
            tailored to meet the needs of our clients across different countries.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">Why Choose Us</h3>

          {/* Why Choose Us Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm leading-relaxed mb-4">
            <p>
              <strong className="text-white">Well-Organized IT Assistance:</strong> Enhancing efficiency and
              streamlining operations, we specialize in providing meticulously managed IT support aimed
              at boosting productivity and refining processes through system upgrades.
            </p>
            <p>
              <strong className="text-white">Network Support for Data Centers:</strong> Our proficient support squad
              stands ready 24/7, accessible via Skype and online calls, and prepared to visit clients
              sites to swiftly resolve any IT-related issues in the field.
            </p>
            <p>
              <strong className="text-white">Storage Solutions:</strong> We offer boundless, secure storage choices
              along with comprehensive after-service support to cater to the diverse needs of our esteemed
              clients.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center gap-6 mb-6">
            <Link href="/" className="text-primary underline">
              Home
            </Link>
            <Link href="/information" className="text-primary underline">
              Information
            </Link>
            <Link href="/aboutUs" className="text-primary underline">
              About Us
            </Link>
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

export default ModFoot2;
