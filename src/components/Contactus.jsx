import React from "react";
import { CirclePlay, Mail, Phone } from "lucide-react";

const Contactus = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-20" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="flex gap-2 mb-4">
            <CirclePlay className="h-4 w-4 text-darkcyan" />
            <p className="text-sm font-semibold text-gray-700">Contact Us</p>
          </div>

          <p className="text-sm tracking-widest text-greyturquoise font-semibold">
            WE'RE HERE TO HELP YOU
          </p>

          <h2 className="relative text-4xl lg:text-5xl font-bold text-darkcyan leading-tight">
            <span className="absolute -left-4 top-2 h-10 w-1 bg-greyturquoise hidden lg:block" />
            Discuss Your <br />
            Chemical <br />
            Solution Needs
          </h2>

          <p className="text-sm text-gray-600 max-w-md mx-auto lg:mx-0">
            Reach out to us for expert guidance, product inquiries, or custom
            chemical solutions tailored to your requirements.
          </p>

          {/* CONTACT INFO */}
          <div className="grid gap-4 pt-6 max-w-sm mx-auto lg:mx-0">
            <div className="flex items-center gap-4 bg-white p-4">
              <Mail className="w-5 h-5 text-greyturquoise" />
              <span className="text-sm text-gray-700">
                info@cosha.co.ke
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 ">
              <Phone className="w-5 h-5 text-greyturquoise" />
              <span className="text-sm text-gray-700">+254 700 000 000</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
            <form className="space-y-6">
              {[
                { label: "Full Name", placeholder: "Jane Smith", type: "text" },
                {
                  label: "Email Address",
                  placeholder: "jane@email.com",
                  type: "email",
                },
                {
                  label: "Phone Number",
                  placeholder: "+254 712 345 678",
                  type: "tel",
                },
                {
                  label: "Company",
                  placeholder: "Cosha Technologies",
                  type: "text",
                },
              ].map((field, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                               focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm resize-none
                             focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gold text-white rounded-xl py-3.5 text-sm font-semibold
                           hover:bg-lightgold transition shadow-md hover:shadow-lg hover:cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
