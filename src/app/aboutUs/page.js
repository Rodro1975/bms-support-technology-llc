import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer";
import EmployeeTab from "@/components/EmployeeTab";
import Headquarters from "@/components/Headquarters";

export default function AboutUsPage() {
  return (
    <div className="bg-black text-white">
      <NavBar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/aobout.jpg"
            alt="About BMS"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        </div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl font-extrabold text-primary text-shadow-lg mb-6">
            About BMS SUPPORT TECHNOLOGY
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-fadeIn">
            At BMS Support Technology, we are committed to delivering innovative IT solutions that empower businesses to thrive in an ever-evolving digital landscape. Our team of dedicated professionals brings a wealth of experience and expertise to every project, ensuring that we meet the unique needs of our clients.
          </p>
        </div>
      </div>

      {/* Vision, Mission, and Core Values Section */}
      <div className="bg-black min-h-screen flex flex-col items-center justify-center px-8">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold mt-10 text-secondary text-shadow-lg">
            Our Vision
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            To be a leading provider of comprehensive IT solutions, recognized for our commitment to excellence, innovation, and customer satisfaction.
          </p>

          <h2 className="text-4xl font-extrabold mt-10 text-secondary text-shadow-lg">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Our mission is to deliver high-quality IT services that enhance operational efficiency and drive business success. We strive to build long-term partnerships with our clients by providing tailored solutions and exceptional support.
          </p>

          <h2 className="text-4xl font-extrabold mt-10 text-secondary text-shadow-lg">
            Core Values
          </h2>
          <ul className="mt-4 text-lg text-gray-300 list-disc list-inside">
            <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
            <li>Innovation: We embrace change and continuously seek innovative solutions.</li>
            <li>Excellence: We strive for excellence in every aspect of our work.</li>
            <li>Collaboration: We believe in teamwork and the power of collaboration.</li>
            <li>Customer Focus: Our customers are at the heart of everything we do.</li>
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black min-h-screen flex flex-col items-center justify-center px-8">
        <div className="mt-8 space-y-8 max-w-3xl">
          <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300">
            <h3 className="text-3xl font-bold text-white">Well-Organized IT Assistance</h3>
            <p className="text-gray-300 mt-2">
              Enhancing efficiency and streamlining operations, we specialize in providing meticulously managed IT support aimed at boosting productivity and refining processes through system upgrades.
            </p>
          </div>

          <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300">
            <h3 className="text-3xl font-bold text-white">Network Support for Data Centers</h3>
            <p className="text-gray-300 mt-2">
              Our proficient support squad stands ready 24/7, accessible via Skype and online calls, and prepared to visit client sites to swiftly resolve any IT-related issues in the field.
            </p>
          </div>

          <div className="p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-2xl hover:scale-105 transition transform duration-300">
            <h3 className="text-3xl font-bold text-white">Storage Solutions</h3>
            <p className="text-gray-300 mt-2">
              We offer boundless, secure storage choices along with comprehensive after-service support to cater to the diverse needs of our esteemed clients.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <EmployeeTab />
      <Headquarters />
      <Footer />
    </div>
  );
}



