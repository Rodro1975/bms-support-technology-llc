"use client";

import React from "react";

const Logo = ({ className }) => {
  return (
    <div
      className={`flex flex-col text-left ${className}`}
      style={{ width: "150px" }}
    >
      {" "}
      {/* Ajustar el ancho del contenedor */}
      {/* Primera línea: BMS Support */}
      <div className="flex justify-end w-full">
        <h1 className="text-2xl font-bold">
          {" "}
          {/* Reducir el tamaño del texto */}
          <span style={{ color: "var(--primary)" }}>BMS</span>{" "}
          <span style={{ color: "var(--secondary)" }}>Support</span>
        </h1>
      </div>
      {/* Segunda línea */}
      <div className="flex justify-end w-full">
        <h1 className="text-2xl font-bold">
          {" "}
          {/* Reducir el tamaño del texto */}
          <span style={{ color: "var(--secondary)" }}>Technology</span>
          <span style={{ color: "var(--primary)" }} className="ml-2">
            LLC
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
