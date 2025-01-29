"use client";

import Image from "next/image";

const Coverage = () => {
  return (
    <section
      className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 py-12 bg-black text-white"
      id="digital-process"
    >
      {/* Imagen a la Izquierda */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
        <Image
          src="/seamless.jpg" // Reemplaza con la ruta de tu imagen
          alt="Digital Process"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Texto a la Derecha */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Global Coverage
        </h2>
        <p className="text-gray-300">
          At BMS Support, we recognize that businesses today operate in an increasingly global environment. To support your international operations, we offer comprehensive IT services with global coverage. Our extensive network of skilled professionals and strategic partnerships allows us to deliver consistent, high-quality IT support no matter where your business is located.
        </p>

        <h3 className="text-2xl font-semibold text-secondary">
          Comprehensive Global IT Solutions
        </h3>
        <p className="text-gray-300 mt-2">
          Our global coverage ensures that your IT infrastructure is reliable, secure, and efficient across all your locations. From network management and cybersecurity to IT support and maintenance, BMS Support provides end-to-end solutions tailored to the unique needs of your multinational operations. With our global reach, you can ensure seamless connectivity and operational continuity around the world.
        </p>

        <h3 className="text-2xl font-semibold text-secondary">
          Key Features of Our Global Coverage
        </h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2">
          <li>24/7 Support: Our team is available around the clock to provide support and resolve issues promptly, regardless of time zones.</li>
          <li>Multi-Language Support: We offer support in multiple languages to ensure clear and effective communication with your international teams.</li>
          <li>Consistent Service Delivery: We provide standardized IT services across all locations, ensuring consistency and reliability.</li>
          <li>Local Expertise: Our global network includes local experts who understand the specific challenges and requirements of different regions.</li>
          <li>Scalable Solutions: Our services are scalable to accommodate the growth and expansion of your business into new markets.</li>
          <li>Advanced Security: We implement robust security measures to protect your global IT infrastructure from threats and vulnerabilities.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-secondary">
          Benefits of Global Coverage with BMS Support
        </h3>
        <p className="text-gray-300 mt-2">
          Uninterrupted Operations: Ensure continuous operations and minimize downtime with our reliable global IT support.
        </p>
        <p className="text-gray-300 mt-2">
          Streamlined IT Management: Simplify the management of your international IT infrastructure with a single point of contact.
        </p>
        <p className="text-gray-300 mt-2">
          Enhanced Efficiency: Improve operational efficiency with standardized IT processes and solutions across all locations.
        </p>
      </div>
    </section>
  );
};

export default Coverage;
