"use client";

import React from "react";

const Logo = ({ className }) => {
  return (
    <div className={`flex flex-col text-left w-full ${className}`}>
      {/* Primera línea: BMS Support */}
      <div className="flex justify-end w-full">
        <h1 className="text-4xl font-bold">
          <span style={{ color: "var(--primary)" }}>BMS</span>{" "}
          <span style={{ color: "var(--secondary)" }}>Support</span>
        </h1>
      </div>
      {/* Segunda línea */}
      <div className="flex justify-end w-full">
        <h1 className="text-4xl font-bold">
          <span style={{ color: "var(--secondary)" }}>Technology</span>
          <span style={{ color: "var(--primary)" }} className="ml-2">
            LLC
          </span>
        </h1>
      </div>
      {/* Eslogan */}
      <div className="flex justify-center w-full mt-4">
        <p
          style={{ color: "var(--foreground)" }}
          className="text-sm font-medium text-center max-w-xs"
        >
          We Transform Ideas Into Digital Innovation
        </p>
      </div>
    </div>
  );
};

export default Logo;







