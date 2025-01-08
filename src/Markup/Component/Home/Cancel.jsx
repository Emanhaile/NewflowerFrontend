import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CancelPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Payment was canceled. Please try again.");

  useEffect(() => {
    // If necessary, you can add a timeout to redirect after some time
    setTimeout(() => {
      navigate('/'); // Redirect back to the home page
    }, 5000); // Redirect after 5 seconds
  }, [navigate]);

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Payment Canceled</h1>
        <p className="mb-4">{message}</p>
        <p>If you believe this is an error, please contact support.</p>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => navigate('/')}
          >
            Go Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
