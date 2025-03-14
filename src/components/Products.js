import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SamplePrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 md:left-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all"
  >
    <FiChevronLeft className="text-2xl text-gray-600" />
  </button>
);

const SampleNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-4 md:right-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all"
  >
    <FiChevronRight className="text-2xl text-gray-600" />
  </button>
);

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const products = [
    {
      title: "Discover OwlEvents",
      description:
        "OwlEvents is a digital platform designed to streamline the process of planning, managing, and coordinating events of various types and sizes.",
      image: "/phone.f0b284a08b5299a0e76d.png",
      links: [
        { label: "Visit Website", url: "https://owlevents.app/" },
        {
          label: "Download from Play Store",
          url: "https://play.google.com/store/apps/details?id=owlevents",
        },
      ],
    },
    {
      title: "Discover LabExAfrica",
      description:
        "LabExAfrica is a project we did to streamline the process of planning, managing, and coordinating events of various types and sizes.",
      image: "/labex.8605b4feb3908188846d.png",
      links: [
        { label: "Visit Website", url: "https://portal.labexafrica.com/" },
      ],
    },
    {
      title: "Discover MFS",
      description:
        "MFS is a digital platform designed to streamline the process of agricultural management and coordination.",
      image: "/farm.01c3528f0487854b6f47.png",
      links: [{ label: "Visit Website", url: "https://maed.farm/auth/login" }],
    },
    {
      title: "Discover Meklit",
      description:
        "Meklit is a digital platform designed to streamline various health conditions regarding women and children.",
      image: "/meklit.2462a6ad4e5aa8ffc7a5.png",
      links: [{ label: "Visit Website", url: "https://meklit.life/" }],
    },
  ];

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-200"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-8 
             tracking-tight leading-tight bg-gradient-to-r from-blue-600 to-purple-600 
             text-transparent bg-clip-text"
        >
          Our Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12 
             font-medium px-4 md:px-0"
        >
          🌟 We offer a diverse range of high-quality products to meet the
          varied needs of our customers. Our product portfolio includes{" "}
          <span className="font-bold text-gray-900">
            cutting-edge technology solutions
          </span>
          as well as{" "}
          <span className="italic text-blue-600">
            innovative consumer goods
          </span>{" "}
          for the home and outdoors.
        </motion.p>

        <Slider {...settings} className="mx-auto max-w-screen-md relative">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="product-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-full h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  {product.links.map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() => window.open(link.url, "_blank")}
                      className="px-6 py-3 text-white font-medium rounded-full transition-all
                      bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500
                      shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Products;
