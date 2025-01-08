import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState({});
  const [paymentStatus, setPaymentStatus] = useState('Success');

  useEffect(() => {
    // Fetch the order details from local storage or a backend
    const order = JSON.parse(localStorage.getItem('order')) || {};
    setOrderDetails(order);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Order Confirmation
        </motion.h1>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Thank you for your order!
          </motion.h2>
          <p className="text-lg text-gray-600">
            Your order has been successfully processed.
          </p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold">Order Details</h3>
            <div className="space-y-4 mt-4">
              {orderDetails.items?.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                >
                  <span className="text-lg font-medium">{item.name} (x{item.quantity})</span>
                  <span className="font-semibold text-lg">
                    ${( ((item.priceRange[0] + item.priceRange[1]) / 2) * item.quantity).toFixed(2)}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between font-semibold text-xl mt-4">
              <span>Total</span>
              <span>${orderDetails.total}</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold">Payment Status</h3>
            <p className={`text-lg mt-2 ${paymentStatus === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
              {paymentStatus === 'Success' ? 'Payment was successful!' : 'Payment failed'}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transform transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/'}
          >
            Back to Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmationPage;
