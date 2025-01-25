// Counters.js
"use client";

import React, { useState, useEffect } from "react";

const Counters = () => {
  // Estado para los contadores
  const [experienceCount, setExperienceCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [satisfiedEmployeesCount, setSatisfiedEmployeesCount] = useState(0);

  const maxExperience = 20; // Valor máximo para el contador de experiencia
  const maxLikes = 100; // Valor máximo para el contador de likes
  const maxSatisfiedEmployees = 50; // Valor máximo para el contador de empleados satisfechos

  useEffect(() => {
    if (experienceCount < maxExperience) {
      const interval = setInterval(() => {
        setExperienceCount((prev) => prev + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [experienceCount]);

  useEffect(() => {
    if (likesCount < maxLikes) {
      const interval = setInterval(() => {
        setLikesCount((prev) => prev + 1);
      }, 50); // Ajusta la velocidad según sea necesario
      return () => clearInterval(interval);
    }
  }, [likesCount]);

  useEffect(() => {
    if (satisfiedEmployeesCount < maxSatisfiedEmployees) {
      const interval = setInterval(() => {
        setSatisfiedEmployeesCount((prev) => prev + 1);
      }, 70); // Ajusta la velocidad según sea necesario
      return () => clearInterval(interval);
    }
  }, [satisfiedEmployeesCount]);

  return (
<section className="bg-black text-white py-8">
  <div className="text-center">
    <h3 className="text-2xl font-bold">Years of Experience</h3>
    <p className="text-6xl font-semibold" style={{ color: '#00C207' }}>{experienceCount}+</p>
    
    {/* Sección de Likes con fondo primario usando estilo en línea */}
    <div style={{ backgroundColor: '#00C207' }} className="text-black p-4 rounded mt-4">
      <h3 className="text-2xl font-bold">Likes</h3>
      <p className="text-6xl font-semibold">{likesCount}+</p>
    </div>

    <h3 className="text-2xl font-bold mt-4">Satisfied Clients</h3>
    <p className="text-6xl font-semibold" style={{ color: '#00C207' }}>{satisfiedEmployeesCount}+</p>
  </div>
</section>


  );
};

export default Counters;
