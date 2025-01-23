import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-black text-white">
      <NavBar />
      <div className="relative">
        {/* Sección de fondo con imagen */}
        <div className="absolute inset-0">
          <Image
            src="/aobout.jpg"
            alt="About BMS"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para mejor contraste */}
        </div>

        {/* Contenido del texto */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 mt-16 text-center">
          <h1 className="text-6xl font-extrabold text-primary text-shadow-lg mt-16 mb-6">About BMS SUPPORT TECHNOLOGY</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-fadeIn">
            BMS is a dynamic consortium of accomplished professionals with rich and diverse backgrounds in IT services, spanning various regions including EMEA, APAC, the Middle East, and LATAM. Founded in 2024, we pride ourselves on delivering top-notch technical solutions tailored to meet the needs of our clients across different countries.
          </p>

          <h2 className="text-4xl font-extrabold mt-10 text-secondary text-shadow-lg">Why Choose Us</h2>

          <div className="mt-8 space-y-8 max-w-3xl mx-auto">
            <div className="p-6 bg-black bg-opacity-70 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300">
              <h3 className="text-3xl font-bold text-white">Well-Organized IT Assistance</h3>
              <p className="text-gray-300 mt-2">
                Enhancing efficiency and streamlining operations, we specialize in providing meticulously managed IT support aimed at boosting productivity and refining processes through system upgrades.
              </p>
            </div>

            <div className="p-6 bg-black bg-opacity-70 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300">
              <h3 className="text-3xl font-bold text-white">Network Support for Data Centers</h3>
              <p className="text-gray-300 mt-2">
                Our proficient support squad stands ready 24/7, accessible via Skype and online calls, and prepared to visit clients sites to swiftly resolve any IT-related issues in the field.
              </p>
            </div>

            <div className="p-6 bg-black bg-opacity-70 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300">
              <h3 className="text-3xl font-bold text-white">Storage Solutions</h3>
              <p className="text-gray-300 mt-2">
                We offer boundless, secure storage choices along with comprehensive after-service support to cater to the diverse needs of our esteemed clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

