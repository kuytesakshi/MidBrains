import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const menuItems = [
  "Home",
  "About Us",
  "Products",
  "Gallery",
  "Review",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0f1a24] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <span className="flex items-center gap-2">
              <IoMdMail className="text-orange-500 text-lg" />
              vijaylaxmihomefurniture@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500 text-sm" />
              +91 9766804229
            </span>
          </div>

          <div className="flex gap-4 text-orange-500 text-lg">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b-4">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <img
            src="https://vijaylaxmifurniture.in/images/logos/logo.png"
            alt="Vijay Laxmi Home Furniture"
            className="h-14"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold text-[#0f1a24]">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative">
                <Link
                  to="/"
                  className="uppercase hover:text-orange-500 transition-colors"
                >
                  {item}
                </Link>
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-[#0f1a24]">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="uppercase hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
