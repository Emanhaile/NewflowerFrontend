import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion for animations

function CustomerTestimonial() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current testimonial index

  // Fetch all comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/comment");

        // Ensure the response is an array
        if (Array.isArray(response.data)) {
          setComments(response.data);
        } else {
          setError("Unexpected response format.");
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch comments.");
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // Cycle through the testimonials automatically
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length); // Loop back to the first testimonial
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [comments.length]);

  // Handle Next and Prev buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length); // Go to next testimonial
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length); // Go to previous testimonial
  };

  // Loading and Error Handling
  if (loading) {
    return (
      <div className="flex justify-center items-center space-x-2">
        <div className="w-8 h-8 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
        <span className="text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mb-4">{error}</p>;
  }

  const currentComment = comments[currentIndex];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Customer Testimonials</h2>

      {/* Display one testimonial at a time */}
      {comments.length > 0 && (
        <motion.div
          key={currentComment.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50 }} // Initial position and opacity for animation
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          exit={{ opacity: 0, y: -50 }} // Exit animation
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          <div className="flex items-center space-x-4 mb-6">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center text-white font-bold">
              {currentComment.name[0].toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{currentComment.name}</h3>
            </div>
          </div>
          <p className="text-gray-700 italic">"{currentComment.comment}"</p>
        </motion.div>
      )}

      {/* Prev and Next buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomerTestimonial;
