import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Clients = () => {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 300, // Faster transition
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500, // Faster auto-scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  // Client data (21 clients) with correct image paths
  const clientLogos = Array.from({ length: 21 }, (_, i) => ({
    image: `/Client ${i + 1}.png`, // Ensure correct image paths
  }));

  return (
    <section
      id="clients"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8 
                     tracking-tight leading-tight bg-gradient-to-r from-blue-600 to-purple-600 
                     text-transparent bg-clip-text"
        >
          Our Clients
        </motion.h2>

        {/* Paragraph After Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl leading-relaxed md:leading-loose text-center max-w-4xl mx-auto mb-12 
             font-semibold md:font-bold px-4 md:px-0 
             bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
        >
          🌟 We are proud to serve a wide range of clients across multiple
          industries. Our customer base includes leading enterprises, dynamic
          small businesses, and innovative start-ups. We are committed to
          delivering tailored solutions that exceed expectations and drive
          success.
        </motion.p>

        {/* Client Carousel */}
        <Slider {...settings} className="mx-auto max-w-screen-lg">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, x: -50 }} // Start small and move in
              animate={{ opacity: 1, scale: 1, x: 0 }} // Animate in
              exit={{ opacity: 0, scale: 0.8, x: 50 }} // Exit animation
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="p-4 flex items-center justify-center"
            >
              {/* Circular Client Logo */}
              <div className="client-circle">
                <img
                  src={client.image}
                  alt={`Client ${index + 1}`}
                  className="client-image"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
