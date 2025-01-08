import image1 from '../../../assets/images/Wedding and event/wedding and event 2.jpg'; // EventDecorPage.js
import image2 from '../../../assets/images/Wedding and event/event10.jpg'; //
import image3 from '../../../assets/images/Wedding and event/event8.jpg';
import React from 'react';
import { motion } from 'framer-motion';

const EventDecorPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Wedding Decor Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Wedding Décor</h2>
          <section className="flex flex-col md:flex-row justify-between gap-8">
            <div className="mt-8 space-y-4 text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800">What We Offer:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <p className="text-lg text-gray-600 mb-8">
                  Transform your special day with stunning wedding decorations that reflect your unique style.
                </p>
                <li><strong>Floral Arrangements:</strong> Bouquets, centerpieces, and floral arches.</li>
                <li><strong>Table Settings & Linens:</strong> Elegant tablecloths and custom settings.</li>
                <li><strong>Backdrops & Arches:</strong> Beautiful and customizable backdrops for photos and ceremonies.</li>
                <li><strong>Lighting & Ambience:</strong> Fairy lights, chandeliers, and uplighting to set the mood.</li>
                <li><strong>Themed Décor:</strong> Custom-designed décor to fit your unique wedding theme.</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Our team works with you to ensure your wedding décor is as unique as your love story, creating a memorable experience for you and your guests.
              </p>
            </div>
            <motion.div
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={image2}
                alt="Wedding Décor"
                className="w-full h-auto rounded-lg shadow-xl transition-all"
              />
            </motion.div>
          </section>
        </motion.div>
      </section>

      {/* Event Decor Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Event Décor</h2>
          <section className="flex flex-col md:flex-row justify-between gap-8">
            <motion.div
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={image1}
                alt="Event Décor"
                className="w-full h-auto rounded-lg shadow-xl transition-all"
              />
            </motion.div>
            <div className="mt-8 space-y-4 text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800">What We Offer:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <p className="text-lg text-gray-600 mb-8">
                  From corporate events to birthday parties, we offer versatile and creative décor solutions for all events.
                </p>
                <li><strong>Themed Decorations:</strong> Custom décor to match your event theme.</li>
                <li><strong>Furniture & Layout Design:</strong> Stylish tables, chairs, and layouts tailored for your space.</li>
                <li><strong>Stage Design:</strong> Custom backdrops, podiums, and stage decor.</li>
                <li><strong>Lighting & Ambience:</strong> Fairy lights, chandeliers, and uplighting to set the mood.</li>
                <li><strong>Floral & Greenery Installations:</strong> Beautiful flowers and plants to elevate your event.</li>
               
              </ul>
            </div>
          </section>
        </motion.div>
      </section>

      {/* Rental Services Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Rental Services</h2>
          <section className="flex flex-col md:flex-row justify-between gap-8">
            <motion.div
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={image3}
                alt="Rental Services"
                className="w-full h-auto rounded-lg shadow-xl transition-all"
              />
            </motion.div>
            <div className="mt-8 space-y-4 text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800">What We Offer:</h3>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <p className="text-lg text-gray-600 mb-8">
                  We offer a wide range of high-quality rental items, including tables, chairs, linens, and more.
                </p>
                <li><strong>Furniture Rentals:</strong> Chairs, tables, and lounges for any event.</li>
                <li><strong>Linens & Tableware:</strong> A variety of linens and table settings.</li>
                <li><strong>Catering Equipment:</strong> Serving trays, chafing dishes, and glassware.</li>
               
                <li><strong>Tents & Outdoor Equipment:</strong> Tents, flooring, lighting, and more for outdoor events.</li>
              </ul>
            </div>
          </section>
        </motion.div>
      </section>
    </div>
  );
};

export default EventDecorPage;
