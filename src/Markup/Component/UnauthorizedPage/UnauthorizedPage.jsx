import React from 'react';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center relative overflow-hidden">
      {/* Main Content */}
      <div className="z-10 text-center p-8 sm:p-10 md:p-12 rounded-xl shadow-lg max-w-lg w-full bg-white border border-gray-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-600 animate__animated animate__fadeIn animate__delay-1s">
          Access Denied
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-700">
          You don't have permission to view this page. If you believe this is an error, please contact support.
        </p>

        {/* Contact Information */}
        <div className="text-md sm:text-lg mb-6 text-gray-700">
          <p>If you need assistance, please contact us:</p>
          <p>Email: <a href="mailto:gmnetwork21@gmail.com" className="text-indigo-500 hover:text-indigo-600 transition duration-300">gmnetwork21@gmail.com</a></p>
          <p>Phone: <a href="tel:+84919393210" className="text-indigo-500 hover:text-indigo-600 transition duration-300">0919393210</a></p>
        </div>

        {/* Go Back Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Return to Homepage
        </a>
      </div>

      {/* Floating Animation Icon */}
      <div className="absolute inset-0 flex justify-center items-center animate__animated animate__fadeIn animate__infinite animate__slow">
        <svg className="text-indigo-600 opacity-60 w-16 h-16 animate__animated animate__pulse animate__infinite animate__delay-1s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 4"></path>
        </svg>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
