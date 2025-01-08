import React from "react";
import { motion } from "framer-motion";
import '../Header/Header.css';
import weddingImage1 from '../../../assets/images/Rental/RENTALS2.jpg'; 
import weddingImage2 from '../../../assets/images/Rental/rentals4.jpg'; 
import { useNavigate } from "react-router-dom";
import weddingImage8 from '../../../assets/images/Wedding and event/wedding and event 2.jpg';
import weddingImage4 from '../../../assets/images/Wedding and event/IMG_0866.mov.jpg';
import weddingImage5 from '../../../assets/images/Wedding and event/event5.jpg';
import weddingImage6 from '../../../assets/images/Wedding and event/event8.jpg';
import weddingImage7 from '../../../assets/images/Wedding and event/eventdecore.jpg';
import weddingImage9 from '../../../assets/images/Wedding and event/event6.jpg';
import CustomerTestimonial from "../Commentlist/Customercomment";

const WeddingDecorPage = () => {
  const Navigate = useNavigate();

  const bookUsRedirect = () => {
    Navigate("/admin/eventbooking");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 wedding-decor">

      {/* Hero Section */}
     
      {/* Wedding Decor Showcase Section */}
      <section className="py-16 px-6 bg-white">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Wedding Decor Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Classic Wedding Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-72 object-cover rounded-t-lg" src={weddingImage4} alt="Classic Wedding Decor" />
            <div className="p-6 bg-white rounded-b-lg">
              <h3 className="text-xl font-semibold">Classic Wedding Decor</h3>
              <p className="text-gray-600 mt-2">
                Timeless elegance for your special day. We specialize in creating classic wedding setups with delicate florals, romantic lighting, and more.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Modern Wedding Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-72 object-cover rounded-t-lg" src={weddingImage6} alt="Modern Wedding Decor" />
            <div className="p-6 bg-white rounded-b-lg">
              <h3 className="text-xl font-semibold">Modern Wedding Decor</h3>
              <p className="text-gray-600 mt-2">
                Bold and contemporary designs that reflect your modern love story. We create chic, minimalist setups for a stylish wedding.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Rustic Wedding Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-72 object-cover rounded-t-lg" src={weddingImage9} alt="Rustic Wedding Decor" />
            <div className="p-6 bg-white rounded-b-lg">
              <h3 className="text-xl font-semibold">Rustic Wedding Decor</h3>
              <p className="text-gray-600 mt-2">
                Celebrate your love in a natural, rustic setting. We create charming setups with wood elements, greenery, and a cozy atmosphere.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Beach Wedding Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-72 object-cover rounded-t-lg" src={weddingImage7} alt="Beach Wedding Decor" />
            <div className="p-6 bg-white rounded-b-lg">
              <h3 className="text-xl font-semibold">Beach Wedding Decor</h3>
              <p className="text-gray-600 mt-2">
                Exchange vows by the sea! We create dreamy beach wedding setups with soft tones, flowing fabrics, and coastal elements.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Garden Wedding Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-72 object-cover rounded-t-lg" src={weddingImage5} alt="Garden Wedding Decor" />
            <div className="p-6 bg-white rounded-b-lg">
              <h3 className="text-xl font-semibold">Garden Wedding Decor</h3>
              <p className="text-gray-600 mt-2">
                For a fresh and vibrant atmosphere, we bring nature into your celebration with floral arches, lush greenery, and elegant touches.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Fairytale Wedding Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-72 object-cover rounded-t-lg" src={weddingImage8} alt="Fairytale Wedding Decor" />
            <div className="p-6 bg-white rounded-b-lg">
              <h3 className="text-xl font-semibold">Fairytale Wedding Decor</h3>
              <p className="text-gray-600 mt-2">
                Create a whimsical, fairytale atmosphere with magical elements, dreamy lighting, and enchanting floral arrangements.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      
      <CustomerTestimonial/>

      {/* Call to Action Section */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Create Your Dream Wedding?
        </motion.h2>
        <motion.button
          className="bg-[#A3AD6F] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all mt-4"
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          onClick={bookUsRedirect}
        >
          Book Us Now
        </motion.button>
      </section>
    </div>
  );
};

export default WeddingDecorPage;
