import { useState } from "react";
import { CirclePlay, Menu, X } from "lucide-react";
import logo from "../assets/coshalogo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Info", href: "#info" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20 mt-2 w-full max-w-4xl px-4">
      <div className="bg-lightorange p-3 rounded-4xl shadow-md">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src={logo}
            alt="Cosha Logo"
            className="w-32 h-10 object-contain"
          />

          {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
  {navLinks.map((link) => {
    const isActive = activeLink === link.name;

    return (
      <a
        key={link.name}
        href={link.href}
        onClick={() => setActiveLink(link.name)}
        className="relative px-1 py-2 text-sm text-black group font-(--font-nav)"
      >
        <span className="relative z-10">{link.name}</span>

        {/* Active underline */}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-greyorange rounded-full" />
        )}
        {!isActive && (
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-greyorange transition-all duration-300 group-hover:w-full rounded-full" />
        )}
      </a>
    );
  })}
</div>


          {/* Desktop Button */}
         <button className="
  hidden md:flex items-center gap-2
  px-5 py-2 rounded-full text-sm text-white font-(--font-nav)
  bg-darkcyan
  shadow-md hover:shadow-lg hover:bg-greyorange cursor-pointer
  hover:brightness-110
">
  <CirclePlay size={16} />
  Get Quote
</button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden mt-4 space-y-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setOpen(false);
                }}
                className="block font-semibold text-black"
              >
                {link.name}
              </a>
            ))}

            <button className="flex items-center justify-center w-full bg-darkcyan text-white px-4 py-2 rounded-full text-sm">
              <CirclePlay size={16} className="mr-2" />
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
