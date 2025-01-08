import React from "react";
import { motion } from "framer-motion";
import '../Header/Header.css';
import { useNavigate } from "react-router-dom";
import image2 from '../../../assets/images/Wedding and event/graduation-event.gif'; 
import image1 from '../../../assets/images/Wedding and event/event7.jpg';
import image3 from '../../../assets/images/Wedding and event/event6.jpg'; 
import image4 from '../../../assets/images/Wedding and event/videoimage.jpg'; 
import image5 from '../../../assets/images/Wedding and event/grandevent.jpg'; 
import image6 from '../../../assets/images/Eventdecore/themebirthday.jpg'; 
import image7 from '../../../assets/images/Wedding and event/wedding and event 2.jpg'; 
 // Importing the image properly
import { Navigate } from "react-router-dom";
import CustomerTestimonial from "../Commentlist/Customercomment";

const EventDecorPage = () => {
    const Navigate= useNavigate()
  const bookUsRedirect = () => {
    Navigate('/admin/eventbooking');
  };

  return (
    <div className="min-h-screen text-gray-800 eventdeore">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image3})` }} // Set the image2 as background here
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white py-20 px-6">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Beautiful Event Decorations for Every Occasion
          </motion.h1>
          <p className="mt-4 text-lg sm:text-xl">
            Whether it's a Baby Shower, Anniversary, or Graduation — we create stunning decor that makes your event unforgettable.
          </p>
        </div>
      </section>

      {/* Event Decor Showcase Section */}
      <section className="py-16 px-6">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Event Decor Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Baby Shower Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-72 object-cover"
              src={image1}
              alt="Baby Shower Decor"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold">Baby Shower Decor</h3>
              <p className="text-gray-600 mt-2">
                Celebrate the arrival of your little one with beautiful, customizable baby shower decor that reflects your style and theme.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Anniversary Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-72 object-cover"
              src={image2}
              alt="Anniversary Decor"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold">Anniversary Decor</h3>
              <p className="text-gray-600 mt-2">
                Celebrate your love with stunning anniversary decor, tailored to your unique relationship and theme.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Birthday Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-72 object-cover"
              src={image4}
              alt="Birthday Decor"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold">Birthday Decor</h3>
              <p className="text-gray-600 mt-2">
                Make your birthday celebration extra special with custom decor tailored to your theme, from elegant to fun and festive.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Theme Birthday Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-72 object-cover"
              src={image6}
              alt="Theme Birthday Decor"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold">Theme Birthday Decor</h3>
              <p className="text-gray-600 mt-2">
                Bring your favorite theme to life! From superheroes to princesses, we can create the perfect setting for any themed birthday party.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Graduation Decor */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-72 object-cover"
              src={image5}
              alt="Graduation Decor"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold">Graduation Decor</h3>
              <p className="text-gray-600 mt-2">
                Celebrate your academic achievements with customized graduation decor that adds an extra special touch to your big day.
              </p>
              <button
                className="bg-[#A3AD6F] text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-700 transition"
                onClick={bookUsRedirect}
              >
                Book Us
              </button>
            </div>
          </motion.div>

          {/* Wedding Decor (New) */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-72 object-cover"
              src={image7}
              alt="Wedding Decor"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold">Wedding Decor</h3>
              <p className="text-gray-600 mt-2">
                Make your wedding day magical with beautiful floral arrangements, elegant table settings, and stunning backdrops.
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
            
          Ready to Create Your Perfect Event?
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

      {/* Footer */}
     
    </div>
  );
};

export default EventDecorPage;
