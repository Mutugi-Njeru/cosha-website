import React from "react";

const partners = [
  {
    name: "Partner One",
    logo: "https://via.placeholder.com/150x80?text=Partner+1",
  },
  {
    name: "Partner Two",
    logo: "https://via.placeholder.com/150x80?text=Partner+2",
  },
  {
    name: "Partner Three",
    logo: "https://via.placeholder.com/150x80?text=Partner+3",
  },
  {
    name: "Partner Four",
    logo: "https://via.placeholder.com/150x80?text=Partner+4",
  },
  {
    name: "Partner Five",
    logo: "https://via.placeholder.com/150x80?text=Partner+5",
  },
];

const OurPartners = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Our Trusted Partners
        </h2>
        <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
          We collaborate with industry-leading partners to deliver reliable,
          secure, and innovative solutions.
        </p>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-xl shadow-sm p-6 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
