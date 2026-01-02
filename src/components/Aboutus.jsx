import React from "react";
import man from "../assets/man2.jpg";
import { ChartLine, CirclePlay, MonitorSmartphone, Users } from "lucide-react";

const Aboutus = () => {
  return (
    <section className="bg-white w-full py-16" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* IMAGE SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="relative rounded-3xl w-full max-w-sm h-105 lg:h-120 shadow-lg"
              style={{
                backgroundImage: `url(${man})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Floating stats */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-36 h-36 rounded-full bg-gold border-4 border-white shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <span className="text-white text-2xl font-bold">1,485+</span>
                  <span className="text-white text-xs tracking-wide">
                    Trusted Clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
            {/* Section label */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
              <CirclePlay className="h-4 w-4 text-darkcyan" />
              <span>About Company</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl lg:text-3xl font-semibold leading-snug text-darkcyan">
              We Are The Best Online <br className="hidden sm:block" />
              Payment Gateway Agency
            </h2>

            {/* Description */}
            <div className="space-y-2 text-xs text-gray-600 max-w-md mx-auto lg:mx-0">
              <p>
                At Cosha, creativity and collaboration fuel our work. We're dedicated to bringing ideas to life and 
                innovative solutions. We prioritize understanding our clients' needs and aim to exceed expectations with
                exceptional results
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5 pt-4">
              {/* Feature item */}
              <div className="flex items-start gap-4">
                <div className="bg-gold text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Trusted Partner</h3>
                  <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="border rounded-full w-12 h-12 flex items-center justify-center shadow-md text-greyturquoise shrink-0">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Fastpace Platform
                  </h3>
                  <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="border rounded-full w-12 h-12 flex items-center justify-center shadow-md text-greyturquoise shrink-0">
                  <ChartLine className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Tested Reliability
                  </h3>
                  <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* statistics section */}
       <div className="mt-12 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
  <div className="flex flex-col items-center justify-center p-6 bg-white ">
    <h1 className="text-4xl font-bold text-gray-800">
      25<span className="text-greyturquoise">+</span>
    </h1>
    <p className="mt-2 text-sm text-gray-500">Years Of Experience</p>
  </div>
  
  <div className="flex flex-col items-center justify-center p-6 bg-white">
    <h1 className="text-4xl font-bold text-gray-800">
      3,452<span className="text-greyturquoise">+</span>
    </h1>
    <p className="mt-2 text-sm text-gray-500">Total Transactions</p>
  </div>
  
  <div className="flex flex-col items-center justify-center p-6 bg-white ">
    <h1 className="text-4xl font-bold text-gray-800">
      751<span className="text-greyturquoise">+</span>
    </h1>
    <p className="mt-2 text-sm text-gray-500">Actual Users</p>
  </div>
  
  <div className="flex flex-col items-center justify-center p-6 bg-white ">
    <h1 className="text-4xl font-bold text-gray-800">
      592<span className="text-greyturquoise">+</span>
    </h1>
    <p className="mt-2 text-sm text-gray-500">Positive Reviews</p>
  </div>
</div>


      </div>
    </section>
  );
};

export default Aboutus;
