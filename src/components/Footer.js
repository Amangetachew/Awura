import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { useRouter } from "next/router"; // ✅ Import Next.js router

const Footer = () => {
  const router = useRouter(); // ✅ Get current route

  const handleNavigation = (section) => {
    if (router.pathname === "/") {
      // ✅ Scroll if already on Home page
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // ✅ Go to Home first, then scroll
      router.push(`/#${section}`);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={() => handleNavigation("home")}
            className="hover:text-blue-400 transition-all focus:outline-none"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("services")}
            className="hover:text-blue-400 transition-all focus:outline-none"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation("products")}
            className="hover:text-blue-400 transition-all focus:outline-none"
          >
            Products
          </button>
          <button
            onClick={() => handleNavigation("clients")}
            className="hover:text-blue-400 transition-all focus:outline-none"
          >
            Clients
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-x-10 social-icons">
          <a
            href="https://web.facebook.com/people/Owlevents-ET/100092874956734/?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn text-2xl p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-all"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.instagram.com/awura_et/?igsh=MTI4eGl6dXlzMWlzaA%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn text-2xl p-3 rounded-full bg-pink-600 hover:bg-pink-500 transition-all"
          >
            <FiInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/awura/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn text-2xl p-3 rounded-full bg-blue-700 hover:bg-blue-600 transition-all"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="mt-4 md:mt-0 text-sm text-center md:text-left">
          &copy; 2025 Awura. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
