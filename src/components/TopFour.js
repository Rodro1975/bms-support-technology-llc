"use client";

const TopFour = () => {
  const services = [
    {
      title: "Web Apps Development",
      description:
        "Creation of secure and functional web applications tailored to the specific needs of clients.",
    },
    {
      title: "Cyber Security Services",
      description:
        "Specialized services in cybersecurity to protect systems and data from online threats.",
    },
    {
      title: "Database Administration",
      description:
        "Expert administration of databases to ensure their efficiency, integrity, and security.",
    },
    {
      title: "Software Support Services",
      description:
        "Technical support services to ensure the continuous operation and optimization of enterprise software.",
    },
  ];

  return (
    <section
      className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-12 bg-black"
      id="top-four"
    >
      <h2 className="text-4xl font-bold text-primary mb-8">Top 4our</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="transparent-card">
            <div className="glowing-ring">
              {/* Puedes incluir un ícono aquí si deseas */}
            </div>
            <h3 className="text-xl font-semibold text-primary mt-4">
              {service.title}
            </h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopFour;

