import Link from "next/link"; // Import Link from Next.js for navigation
import { motion } from "framer-motion"; // Import motion for animations

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md py-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 space-y-4">
        {/* Logo (Replaced with Text) */}
        <Link href="/" className="cursor-pointer flex items-center text-2xl font-bold">
          MyBrand
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
