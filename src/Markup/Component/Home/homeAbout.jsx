import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Floral Arrangements",
      description: "Exquisite bouquets, centerpieces, and floral decor to complement any theme.",
      icon: "🌸", // Example Icon
    },
    {
      title: "Elegant Backdrops",
      description: "Beautifully designed backdrops and arches to set the perfect scene.",
      icon: "🌿", // Example Icon
    },
    {
      title: "Table Settings",
      description: "Chic and stylish table settings with premium linens, dinnerware, and centerpieces.",
      icon: "🍽️", // Example Icon
    },
    {
      title: "Lighting",
      description: "Ambient lighting solutions to enhance the mood and atmosphere of your venue.",
      icon: "💡", // Example Icon
    },
    {
      title: "Custom Decor",
      description: "Personalized decorations that reflect your style and story, including signage, favors, and more.",
      icon: "🎨", // Example Icon
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <motion.h3
                className="text-2xl font-semibold text-gray-800 mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
