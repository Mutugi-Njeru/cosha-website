import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const BelowHero = () => {
  return (
    <section className="relative z-20 mt-6 lg:-mt-24 px-4 sm:px-6 lg:px-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        {/* LEFT CARD */}
        <div
          className=" order-1 lg:order-1
      w-full lg:w-[42%]
      rounded-3xl bg-darkcyan p-6 sm:p-8 shadow-xl"
        >
          <h1 className="mb-3 text-xl font-semibold text-white">
            Always Update Every Day
          </h1>

          <p className="text-sm text-white opacity-90">
            Lorem ipsum, dolor sit amet consectetur ipsum
          </p>
          <p className="text-sm text-white opacity-90">
            Lorem ipsum, dolor sit amet adipisicing
          </p>
          <p className="mb-8 text-sm text-white opacity-90">
            Lorem ipsum, dolor sit amet adipisicing
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="w-full rounded-full border border-white/30 bg-transparent px-5 py-2 text-sm text-white transition hover:bg-white/10 sm:w-auto">
              Your Email
            </button>

            <button className="w-full rounded-full bg-white px-6 py-2 text-sm font-medium text-gold shadow-md transition hover:bg-violet-100 sm:w-auto">
              Request
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className=" order-2 lg:order-2
      w-full lg:w-[58%]
      rounded-3xl bg-somecream p-6 sm:p-8 shadow-xl"
        >
          <div className="flex flex-col gap-6 md:flex-row">
            {/* FEATURES */}
            <div className="space-y-3 md:w-1/2">
              {[
                "Online Payment Online Payment",
                "Platform Support",
                "Secure Transaction",
                "Responsive Web App",
                "Divide Group Payments",
                "Lock Protection",
              ].map((item) => (
                <div key={item} className="flex items-center text-sm">
                  <TiTick className="mr-2 text-gold" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            {/* CONTENT */}
            <div className="md:w-1/2">
              <h2 className="mb-3 text-xl font-semibold text-gray-800">
                How Can I Help You?
              </h2>

              <p className="mb-4 text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur sit. Lorem ipsum, dolor
                sit amet consectetur sit.
              </p>

              <div className="flex items-center text-sm font-medium text-gold hover:underline cursor-pointer">
                <span className="mr-2">Read More</span>
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowHero;
