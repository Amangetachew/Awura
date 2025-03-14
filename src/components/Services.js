import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const serviceItems = [
    {
      title: "Software Product Development",
      description:
        "Developing scalable and robust software solutions tailored to your needs.",
    },
    {
      title: "ERP Systems",
      description:
        "Streamline your business processes with customizable ERP solutions.",
    },
    {
      title: "Intelligent Infrastructure Solution",
      description:
        "Build smart and efficient infrastructure using cutting-edge technologies.",
    },
    {
      title: "In-House Products",
      description:
        "Leverage our proprietary products to enhance your operations.",
    },
    {
      title: "Technology Consultancy",
      description:
        "Expert advice to guide your tech strategy and decision-making.",
    },
    {
      title: "Support and Troubleshooting",
      description: "Reliable support to keep your systems running smoothly.",
    },
  ];

  // State to manage the number of visible services
  const [showMore, setShowMore] = useState(false);

  // Determine how many services to display
  const visibleServices = showMore ? serviceItems : serviceItems.slice(0, 3);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-center 
             text-gray-900 dark:text-white leading-tight"
        >
          🚀 Our <span className="text-blue-500">Services</span>
        </motion.h2>

        {/* Paragraph After Title */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mt-4 max-w-3xl mx-auto leading-relaxed">
          Our company helps clients grow and succeed through a range of services
          including custom software development, ERP systems, intelligent
          infrastructure solution, technology consultancy, in-house solutions,
          and testing.
        </p>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {visibleServices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="service-box cursor-pointer"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {serviceItems.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 text-sm font-semibold text-white rounded-full shadow-lg 
               border-2 border-transparent bg-neutral-800 relative overflow-hidden 
               transition-all duration-300 ease-in-out 
               hover:bg-sky-700 hover:border-yellow-400 hover:scale-105"
            >
              <span className="relative z-10">
                {showMore ? "Show Less 🔼" : "Show More 🔽"}
              </span>

              {/* Decorative bubbles */}
              <div className="absolute w-16 h-16 bg-yellow-500 rounded-full right-12 top-12 transition-transform duration-700 transform scale-0 group-hover:scale-150"></div>
              <div className="absolute w-12 h-12 bg-orange-500 rounded-full right-20 -top-6 transition-transform duration-700 transform scale-0 group-hover:scale-150"></div>
              <div className="absolute w-8 h-8 bg-pink-500 rounded-full right-32 top-6 transition-transform duration-700 transform scale-0 group-hover:scale-150"></div>
              <div className="absolute w-4 h-4 bg-red-600 rounded-full right-2 top-12 transition-transform duration-700 transform scale-0 group-hover:scale-150"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
