import Navbar from "./Navbar";
import woman6 from "../assets/Woman6.jpg";
import woman4 from "../assets/woman4.jpg";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] w-full overflow-visible z-10">
      <Navbar />

      <div className="relative lg:absolute lg:inset-0 flex flex-col lg:flex-row z-10">
        {/* Right side */}
        <div className="w-full lg:w-5/12 relative order-1 lg:order-2">
          <img
            src={woman6}
            alt="Your image description"
            className="w-full h-auto lg:h-full object-cover"
          />
        </div>

        {/* Left side */}
        <div className="w-full lg:w-7/12 bg-gray-100 bg-opacity-20 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10 lg:py-0 lg:order-1 order-2">
          <div
            className="w-full max-w-3xl mx-auto flex flex-col 
                  text-center lg:text-left"
          >
            <p
              className="text-3xl sm:text-4xl lg:text-5xl 
              tracking-tight leading-tight text-darkcyan font-(--font-heading)"
            >
              JUST <Typewriter text="TECH-IT" />
            </p>
            <p
              className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold 
                  text-greyturquoise leading-snug"
            >
              Unlocking the future, one byte at a time.
            </p>

            <div className="mt-4 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm text-gray-700 leading-relaxed font-bold">
              <p>
                At Cosha, we're not just tech enthusiasts – we're your strategic
                allies.
                <br className="hidden lg:block" />
                Together, we'll tailor solutions to your needs, ensure
                excellence,
                <br className="hidden lg:block" />
                and turn your ideas into reality. Let's collaborate for success.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="mt-6 flex flex-col sm:flex-row 
                    items-center lg:items-start 
                    gap-3"
            >
              <button
                className="shadow-xl bg-darkcyan hover:bg-greyorange 
                         text-white px-6 py-2 rounded-full text-sm 
                         transition-colors w-full sm:w-auto hover:cursor-pointer"
              >
                Get Started
              </button>

              <button
                className="shadow-xl bg-white hover:bg-gray-100 
                         text-gold px-6 py-2 rounded-full text-sm border
                         transition-colors w-full sm:w-auto hover:cursor-pointer"
              >
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
