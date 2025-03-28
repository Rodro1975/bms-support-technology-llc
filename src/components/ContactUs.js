"use client";

import React, { useState } from "react";

const ContactUs = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Correo enviado exitosamente.");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setStatus("Error enviando el correo.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error enviando el correo.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto pt-16"
      style={{ backdropFilter: "blur(4px)" }}
    >
      <section className="bg-transparent dark:bg-gray-900 p-6 rounded-lg max-w-screen-md w-full mx-4 my-16">
        <div className="py-8 lg:py-16 px-4 mx-auto">
          <h2 className="text-2xl font-bold text-center text-var(--primary)">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-var(--foreground) sm:text-xl">
            Got a technical issue? Want to give us feedback on a service? Need
            details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-var(--foreground)"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-var(--primary) focus:border-var(--primary) block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-var(--primary) dark:focus:border-var(--primary)"
                placeholder="name@mail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-var(--foreground)"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-var(--primary) focus:border-var(--primary) block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-var(--primary) dark:focus:border-var(--primary)"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-var(--foreground)"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-var(--primary) focus:border-var(--primary) dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-var(--primary) dark:focus:border-var(--primary)"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 rounded hover:bg-[#00C207] text-white"
              style={{ backgroundColor: "#82B70E" }}
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
