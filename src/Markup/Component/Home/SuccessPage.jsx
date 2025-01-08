import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    // Get the order details from localStorage or from the backend
    const orderData = JSON.parse(localStorage.getItem('token'));

    if (orderData) {
      setOrderDetails(orderData);
      setLoading(false);
    } else {
      // Redirect to home if there's no order details
      Navigate('/');
    }
  }, [Navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-4xl mx-auto py-8">
      <div className="text-center space-y-6">
        <FaCheckCircle size={50} className="text-green-500 mx-auto" />
        <h1 className="text-3xl font-semibold text-gray-800">Payment Successful!</h1>
        <p className="text-lg text-gray-600">Thank you for your order. Your rental details are as follows:</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
        <div className="space-y-4 mt-4">
          <div className="flex justify-between text-lg">
            <span>Order ID:</span>
            <span>{orderDetails.orderId}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Total Price:</span>
            <span>${orderDetails.totalPrice}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Total Days:</span>
            <span>{orderDetails.totalDays} day(s)</span>
          </div>
          {orderDetails.isDelivery && (
            <div className="flex justify-between text-lg">
              <span>Delivery Fee (per mile):</span>
              <span>${orderDetails.deliveryFee}</span>
            </div>
          )}
          <div className="flex justify-between text-xl font-semibold mt-4">
            <span>Total:</span>
            <span>${orderDetails.finalTotal}</span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Shipping Address</h3>
          <div className="text-gray-600 mt-2">
            <p>{orderDetails.streetAddress}</p>
            <p>{orderDetails.city}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Rental Date & Time</h3>
          <div className="text-gray-600 mt-2">
            <p>{orderDetails.rentalDate}</p>
            <p>{orderDetails.rentalTime}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => Navigate('/')}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
