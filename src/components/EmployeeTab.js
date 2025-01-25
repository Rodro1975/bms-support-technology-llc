"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";

const EmployeeTab = () => {
    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 group z-50">
            {/* Contenedor de la pestaña oculta */}
            <div className="absolute right-0 transform translate-x-full bg-secondary text-white p-4 rounded-l-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 ease-in-out">
                <Link href="/login" className="text-white hover:underline">
                    For Employees Only
                </Link>
            </div>
            {/* Pestaña visible */}
            <div className="bg-secondary text-white p-4 rounded-l-lg cursor-pointer transition duration-300 hover:bg-primary flex items-center">
                {/* Ícono de la pestaña con estilos mejorados */}
                <FontAwesomeIcon 
                    icon={faNoteSticky} 
                    className="mr-2 text-secondary text-2xl transition duration-300 transform hover:scale-110 hover:text-white shadow-lg" 
                />
                {/* No se incluye el texto "Agenda" */}
            </div>
        </div>
    );
};

export default EmployeeTab;







