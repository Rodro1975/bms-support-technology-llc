"use client";

import Image from "next/image";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el inicio de sesión
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-black bg-opacity-90"
            style={{ backdropFilter: "blur(4px)" }} // Desenfoque opcional
        >
            <div className="bg-black dark:bg-gray-900 p-6 rounded-lg max-w-sm w-full mx-4">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/bmsLogoBlack.png"
                        alt="BMS Support Tech"
                        width={150}
                        height={150}
                        priority
                        className="rounded-lg"
                    />
                </div>

                {/* Título */}
                <h2 className="text-2xl font-bold text-center text-var(--primary)">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    {/* Campo de correo */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-var(--foreground)"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-var(--primary) focus:border-var(--primary) block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-var(--primary) dark:focus:border-var(--primary)"
                            placeholder="name@mail.com"
                            required
                        />
                    </div>

                    {/* Campo de contraseña */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-var(--foreground)"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-var(--primary) focus:border-var(--primary) block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-var(--primary) dark:focus:border-var(--primary)"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Botón de inicio de sesión */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Sign In
                    </button>
                </form>

                {/* Enlace de registro */}
                <p className="mt-4 text-sm text-center text-var(--foreground)">
                By clicking login, you agree to all our privacy policies{" "}                   
                </p>
            </div>
        </div>
    );
};

export default Login;
