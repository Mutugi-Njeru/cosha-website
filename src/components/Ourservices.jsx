import React from "react";
import { CirclePlay, LockKeyhole } from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";

const services = [
  {
    title: "Secure Payments",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur sit",
      "Lorem ipsum dolor."
    ],
  },
  {
    title: "Investing Features",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur sit",
      "Lorem ipsum dolor."
    ],
  },
  {
    title: "No Hidden Fees",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur sit",
      "Lorem ipsum dolor."
    ],
  },
  {
    title: "Fast Transactions",
    highlight: true, // ⭐ highlighted card
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur sit",
      "Lorem ipsum dolor."
    ],
  },
  {
    title: "24/7 Support",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur sit",
      "Lorem ipsum dolor."
    ],
  },
  {
    title: "Smart Analytics",
    description: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur sit",
      "Lorem ipsum dolor."
    ],
  },
];

const Ourservices = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <CirclePlay className="h-4 w-4 text-gold" />
          <p className="text-sm font-semibold text-gray-700">Our Services</p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          We Prioritize Transaction Security
        </h1>

        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit amet
          consectetur adipisicing elit.
        </p>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg p-6 text-left
                hover:-translate-y-2 hover:shadow-2xl transition duration-300
                ${service.highlight ? "bg-darkgreen text-white" : "bg-somecream"}
              `}
            >
              {/* Icon */}
              <div
                className={`absolute -top-6 left-6 h-12 w-12 rounded-full flex items-center justify-center
                  ${service.highlight ? "bg-green-700" : "bg-gold"}
                `}
              >
                <LockKeyhole className="text-white" size={20} />
              </div>

              <h2 className="text-lg font-semibold mt-8 mb-2">
                {service.title}
              </h2>

              {service.description.map((text, i) => (
                <p
                  key={i}
                  className={`text-sm ${
                    service.highlight ? "text-green-100" : "text-gray-500"
                  }`}
                >
                  {text}
                </p>
              ))}

              <div
                className={`mt-4 flex items-center gap-2 font-medium cursor-pointer hover:underline
                  ${service.highlight ? "text-white" : "text-violet-500"}
                `}
              >
                <span>Read More</span>
                <FaLongArrowAltRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
