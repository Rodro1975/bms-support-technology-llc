"use client";

import React from "react";

const ModFoot1 = ({ isVisible, content, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        {/* Contenido del modal */}
        <div>
          <h2 className="text-xl font-bold mb-4">Here is the Detail of the selected list</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ModFoot1;