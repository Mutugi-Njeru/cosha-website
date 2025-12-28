import React from "react";
import logo from "../assets/coshalogo2.png";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-black to-gray-900 text-gray-300 pt-16" id="info">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-2 space-y-6">
            <img src={logo} alt="Cosha Logo" className="h-9" />

            <p className="text-sm leading-relaxed text-gray-400">
              Building modern digital experiences with performance, scalability,
              and design at the core.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full 
               bg-gray-800 text-white 
               hover:bg-blue-600 transition"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full 
               bg-gray-800 text-white 
               hover:bg-blue-600 transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full 
               bg-gray-800 text-white 
               hover:bg-blue-600 transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full 
               bg-gray-800 text-white 
               hover:bg-blue-600 transition"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              {["About", "Features", "Works", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Help
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Newsletter
            </h4>

            <p className="mt-4 text-sm text-gray-400">
              Subscribe to get updates, news & insights.
            </p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-gold text-white font-semibold hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-16 pt-8 pb-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Cosha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
