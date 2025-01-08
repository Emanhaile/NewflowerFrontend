import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-8 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Wedding and Event Decor & Rentals
          </motion.h1>
        </header>

        {/* Mission Section */}
        <motion.section 
          className="bg-white p-10 rounded-xl shadow-lg mb-12 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our mission is to provide exceptional wedding and event decor solutions that transform any occasion into a breathtaking experience. 
            With a keen eye for detail, top-quality rentals, and personalized design services, we aim to make every event memorable and stress-free.
          </p>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          className="bg-white p-10 rounded-xl shadow-lg mb-12 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To be the leading provider of wedding and event decor, setting trends in design, offering innovative rental options, and creating unforgettable moments for our clients. 
            We envision a world where every event feels unique, elegant, and perfectly tailored to each individual’s dreams.
          </p>
        </motion.section>

        {/* Core Values Section */}
        <motion.section 
          className="bg-white p-10 rounded-xl shadow-lg mb-12 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Core Values</h2>
          <ul className="list-disc list-inside text-xl text-gray-600 space-y-4">
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Creativity:</strong> We bring innovative and fresh ideas to every event.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Quality:</strong> Our decor and rentals are of the highest standards.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Customer Focus:</strong> We listen, understand, and deliver to make your event special.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <strong>Collaboration:</strong> We work closely with clients to realize their vision and goals.
            </motion.li>
          </ul>
        </motion.section>

        {/* Terms and Policies Section */}
        <motion.section 
          className="bg-white p-10 rounded-xl shadow-lg mb-12 transition-all hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Terms & Policies</h2>
          <p className="text-xl text-gray-600 mb-6">
            By using our services, you agree to the following terms and conditions:
          </p>

          {/* Rental Agreement */}
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">1. Rental Agreement</h3>
            <p className="text-xl text-gray-600">
              All rentals must be booked in advance. A deposit is required to confirm your booking. Any cancellations within 48 hours of the event will result in a forfeited deposit.
            </p>
          </motion.div>

          {/* Payment Terms */}
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">2. Payment Terms</h3>
            <p className="text-xl text-gray-600">
              Final payments for rentals are due 7 days before the event. We accept payments via credit card, PayPal, and bank transfer.
            </p>
          </motion.div>

          {/* Liability */}
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">3. Liability</h3>
            <p className="text-xl text-gray-600">
              We are not responsible for any damage to property or injury during the event. Clients are responsible for the proper care of rented items during the event.
            </p>
          </motion.div>

          {/* Delivery and Setup */}
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">4. Delivery and Setup</h3>
            <p className="text-xl text-gray-600">
              Delivery and setup services are available for an additional fee. All decor items will be set up according to pre-arranged plans. Any changes to the event setup must be communicated at least 24 hours in advance.
            </p>
          </motion.div>

          {/* Privacy Policy */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">5. Privacy Policy</h3>
            <p className="text-xl text-gray-600">
              We value your privacy. We do not share or sell your personal information to third parties. Your data is used exclusively for fulfilling your booking and communication.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
