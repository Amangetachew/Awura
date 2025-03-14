"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image"; // Added Image import

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md py-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 space-y-4">
        {/* Logo */}
        <Link href="/" className="cursor-pointer flex items-center">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="Company Logo"
            priority // Added for above-the-fold images
          />
        </Link>

        {/* Navigation Items (Vertical Layout) */}
        <div className="flex flex-col space-y-4">
          {[
            { name: "Home", section: "home" },
            { name: "Services", section: "services" },
            { name: "Products", section: "products" },
            { name: "Clients", section: "clients" },
          ].map((item) => (
            <motion.button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 text-lg font-semibold rounded-lg hover:bg-white/20 transition"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
