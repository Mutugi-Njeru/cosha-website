import React from "react";
import Navbar from "./Navbar";
import woman from "../assets/trial1.png";
import woman4 from "../assets/woman4.jpg";
import { FaRegPlayCircle } from "react-icons/fa";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full">
      <Navbar />

  <div className="absolute inset-0 flex flex-col lg:flex-row z-0">
  {/* Right side - Appears first on mobile */}
  <div className="w-full lg:w-5/12 relative lg:order-2 order-1">
    <img
      src={woman4}
      alt="Your image description"
      className="w-full h-auto lg:h-full object-cover"
    />
  </div>

  {/* Left side - Appears second on mobile */}
<div className="w-full lg:w-7/12 bg-gray-100 bg-opacity-20 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10 lg:py-0 lg:order-1 order-2">
  <div className="w-full max-w-3xl mx-auto flex flex-col 
                  text-center lg:text-left">

    {/* Brand Heading */}
  
<p className="text-3xl sm:text-4xl lg:text-5xl font-semibold 
              tracking-tight leading-tight text-green-900">
  JUST <Typewriter text="TECH-IT" />
</p>

    {/* Tagline */}
    <p className="mt-2 text-lg sm:text-xl lg:text-2xl 
                  text-gray-800 leading-snug">
      Unlocking the future, one byte at a time.
    </p>

    {/* Description */}
    <div className="mt-4 space-y-1 max-w-xl 
                    mx-auto lg:mx-0 
                    text-xs sm:text-sm text-gray-700 leading-relaxed">
      <p>At Cosha, we're not just tech enthusiasts - we're your strategic allies.</p>
      <p>Together, we'll tailor solutions to your needs, ensure excellence,</p>
      <p>and turn your ideas into reality. Let's collaborate for success</p>
    </div>

    {/* Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row 
                    items-center lg:items-start 
                    gap-3">
      <button className="shadow-xl bg-green-900 hover:bg-green-800 
                         text-white px-6 py-2 rounded-full text-sm 
                         transition-colors w-full sm:w-auto">
        Get Started
      </button>

      <button className="shadow-xl bg-white hover:bg-gray-100 
                         text-gold px-6 py-2 rounded-full text-sm 
                         transition-colors w-full sm:w-auto">
        Learn More
      </button>
    </div>
  </div>
</div>

</div>

    </div>
  );
};

export default Hero;
