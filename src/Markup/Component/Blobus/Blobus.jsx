// DecorBlogPage.js
import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../../assets/images/Eventdecore/contact bannerwedi.jpg';

const DecorBlogPage = () => {
  return (
    <div className="p-4">
      {/* Banner Image Section */}
      <header className="relative">
        <motion.img
          src={image1}
          alt="Event & Wedding Decor Banner"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Event & Wedding Decor Ideas
          </motion.h1>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mt-8 text-center">
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Discover stunning decor ideas for all types of events and weddings. From rentals to custom designs, create
          unforgettable experiences with our expert tips and inspiration.
        </motion.p>
      </section>

      {/* Event Decor Section */}
      <section className="mt-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Stunning Event Decor Ideas
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Whether you’re hosting a corporate event, birthday party, or a milestone celebration, the right decor can
          elevate any occasion. Here are some of the top trends in event decor:
        </motion.p>

        {/* Event Decor Trends with Images */}
        <div className="mt-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <img
              src={image1}
              alt="Floral Centerpiece"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Floral Centerpieces</h3>
            <p className="mt-4 text-gray-600">
              Floral arrangements are timeless for any event. From elegant table centerpieces to whimsical floral
              arches, flowers can set the tone for your entire celebration.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <img
              src={image1}
              alt="Lighting Ambiance"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Lighting & Ambiance</h3>
            <p className="mt-4 text-gray-600">
              Transform the mood of your event with unique lighting options, such as chandeliers, string lights, or LED
              fixtures, to create a warm and inviting atmosphere.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <img
              src={image1}
              alt="Custom Signage"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Custom Signage</h3>
            <p className="mt-4 text-gray-600">
              Personalized signs, from welcome boards to custom directionals, add a special touch and help guide guests
              through your event with ease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wedding Decor & Rentals Section */}
      <section className="mt-16">
        <motion.h2
          className="text-3xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          Elegant Wedding Decor & Rentals
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          Planning a wedding? Whether you're looking for rustic charm, modern elegance, or a boho chic vibe, our
          wedding decor and rental options are designed to bring your vision to life. Explore our offerings:
        </motion.p>

        {/* Wedding Decor & Rentals with Images */}
        <div className="mt-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 1 }}
          >
            <img
              src={image1}
              alt="Chandeliers and Lighting"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Chandeliers & Lighting</h3>
            <p className="mt-4 text-gray-600">
              Create a romantic atmosphere with our collection of chandeliers and string lights, perfect for both indoor
              and outdoor weddings.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.5, duration: 1 }}
          >
            <img
              src={image1}
              alt="Wedding Furniture Rentals"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Wedding Furniture Rentals</h3>
            <p className="mt-4 text-gray-600">
              From elegant chairs and tables to lounge areas and bars, our furniture rentals are designed to complement
              any wedding theme.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 1 }}
          >
            <img
              src={image1}
              alt="Floral Arrangements"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Floral Arrangements</h3>
            <p className="mt-4 text-gray-600">
              Whether you want a lush floral arch or simple centerpieces, we offer a variety of stunning floral
              arrangements to make your wedding day even more special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rental Tips Section */}
      <section className="mt-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.5, duration: 1 }}
        >
          Wedding Rentals: What to Consider
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 1 }}
        >
          Renting decor and furniture for your wedding can save both time and money while providing flexibility. Here are
          a few tips to make your rental experience seamless:
        </motion.p>
        <ul className="mt-4 list-disc pl-8 text-lg text-gray-600">
          <li>Book your rentals early to ensure availability of popular items.</li>
          <li>Match your rentals to the style of your venue to create a cohesive look.</li>
          <li>Mix rented items with personal touches to add uniqueness to your wedding.</li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="mt-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5, duration: 1 }}
        >
          Start Planning Your Event or Wedding Today
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8, duration: 1 }}
        >
          Whether you're planning an intimate gathering or a grand celebration, the right decor can make all the
          difference. Browse our rental options and find the perfect pieces to bring your vision to life.
        </motion.p>
      </section>
    </div>
  );
};

export default DecorBlogPage;
