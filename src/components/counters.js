"use client";

import React, { useState, useEffect } from "react";

const Counters = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [satisfiedEmployeesCount, setSatisfiedEmployeesCount] = useState(0);

  const maxExperience = 20;
  const maxLikes = 100;
  const maxSatisfiedEmployees = 50;

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
      }, 50);
      return () => clearInterval(interval);
    }
  }, [likesCount]);

  useEffect(() => {
    if (satisfiedEmployeesCount < maxSatisfiedEmployees) {
      const interval = setInterval(() => {
        setSatisfiedEmployeesCount((prev) => prev + 1);
      }, 70);
      return () => clearInterval(interval);
    }
  }, [satisfiedEmployeesCount]);

  return (
    <section className="bg-black text-white h-[90vh] flex flex-col justify-center">
      {/* Contador 1 */}
      <div className="bg-black w-full py-8 text-center">
        <h3 className="text-2xl font-bold">Years of Experience</h3>
        <p className="text-6xl font-semibold" style={{ color: "#00C207" }}>
          {experienceCount}+
        </p>
      </div>

      {/* Contador 2 */}
      <div
        className="w-full py-8 text-center"
        style={{ backgroundColor: "#00C207" }}
      >
        <h3 className="text-2xl font-bold text-foreground">Likes</h3>
        <p className="text-6xl font-semibold text-black">{likesCount}+</p>
      </div>

      {/* Contador 3 */}
      <div className="bg-black w-full py-8 text-center">
        <h3 className="text-2xl font-bold">Satisfied Clients</h3>
        <p className="text-6xl font-semibold" style={{ color: "#00C207" }}>
          {satisfiedEmployeesCount}+
        </p>
      </div>
    </section>
  );
};

export default Counters;

