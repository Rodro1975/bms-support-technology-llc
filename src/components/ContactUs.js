"use client";

import React from "react";

const ContactUs = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            style={{ backdropFilter: "blur(4px)" }} // Desenfoque opcional
        >
            <section className="bg-transparent dark:bg-gray-900 p-6 rounded-lg max-w-screen-md w-full mx-4">
                <div className="py-8 lg:py-16 px-4 mx-auto">
                    <h2 className="text-2xl font-bold text-center text-var(--primary)">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-var(--foreground) sm:text-xl">
                        Got a technical issue? Want to give us feedback on a service? Need details about our Business plan? Let us know.
                    </p>
                    <form action="#" className="space-y-8">
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
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-var(--primary) focus:border-var(--primary) dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-var(--primary) dark:focus:border-var(--primary)"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                    </form>
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

