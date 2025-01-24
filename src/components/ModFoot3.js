import React from "react";

const ModFoot3 = ({ isVisible, footerHeight }) => {
  return (
    <div
      className={`modal ${isVisible ? "visible" : ""}`}
      style={{ height: footerHeight }}
    >
      {/* Contenido del modal */}
      <div className="flex items-center justify-center h-full"> {/* Usar Flexbox para centrar */}
        <h2 className="text-xl font-bold mb-4">Here is the Detail of the selected list 3</h2>
      </div>
    </div>
  );
};

export default ModFoot3;