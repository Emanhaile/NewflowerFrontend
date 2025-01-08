import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FaTrashAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { useAuth } from '../../context/AuthContext';

const stripePromise = loadStripe('pk_test_51OqOrIBNtOp7hUepOnWipveOCQ1S5o8FAoe9AsEvwnESE2HrhAxPWNdupTpNeJAs3FxIaIJyxP6E8KIJEoskpuUo00yTTSinE5');

// Washington D.C. Sales Tax Rate (6%)
const TAX_RATE_DC = 0.06;

const ContinuePaymentPage = () => {
  const [cart, setCart] = useState([]);
  const [totalDays, setTotalDays] = useState(1);
  const [mileage, setMileage] = useState(0);
  const [isDelivery, setIsDelivery] = useState(false);
  const [address, setAddress] = useState({
    streetAddress: '',
    city: '',
    rentalDate: '',
    rentalTime: '',
    returnDate: '',
    returnTime: '',
  });
  const [isPaymentProcessed, setIsPaymentProcessed] = useState(false);
  const [addressFilled, setAddressFilled] = useState(false);
  const [message, setMessage] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedAddress = JSON.parse(localStorage.getItem('address'));

    if (savedCart) setCart(savedCart);
    if (savedAddress) {
      setAddress(savedAddress);
      setTotalDays(savedAddress.totalDays || 1);
      setMileage(savedAddress.mileage || 0);
      setIsDelivery(savedAddress.isDelivery || false);
    }
  }, []);

  const handleQuantityChange = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, idx) => idx !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const checkAddressFilled = () => {
    const { streetAddress, city, rentalDate, rentalTime, returnDate, returnTime } = address;
    return streetAddress && city && rentalDate && rentalTime && returnDate && returnTime;
  };

  const proceedToPayment = async () => {
    if (!checkAddressFilled()) {
      setMessage('Please fill out all required fields before proceeding.');
      return;
    }

    try {
      const finalTotal = calculateFinalTotal();
      const totalAmount = parseFloat(finalTotal);
      const userId = user?.user_id;

      const response = await fetch('http://localhost:3003/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart,
          totalAmount,
          totalDays,
          mileage,
          isDelivery,
          userId,
          ...address,
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        setMessage(result.error || 'Something went wrong. Please try again.');
        return;
      }

      const result = await response.json();
      if (result.sessionId) {
        const { sessionId, orderId } = result;
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
          setMessage('Error redirecting to checkout. Please try again.');
        } else {
          localStorage.setItem('orderDetails', JSON.stringify({
            orderId,
            totalPrice: calculateTotal(),
            totalDays,
            deliveryFee: isDelivery ? mileage : 0,
            finalTotal,
            ...address,
            isDelivery,
          }));

          window.location.href = '/success'; // Redirect to success page once checkout is completed
        }
      } else {
        setMessage('Failed to create session. Please try again.');
      }
    } catch (error) {
      setMessage('Error processing your payment. Please try again.');
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const avgPrice = (item.priceRange[0] + item.priceRange[1]) / 2;
      return total + avgPrice * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateFinalTotal = () => {
    const baseTotal = calculateTotal();
    const deliveryFee = isDelivery ? mileage * 1 : 0; // Delivery fee based on mileage
    const totalAfterDays = baseTotal * totalDays; // Multiply by the number of rental days
    
    // Calculate tax (6% for Washington D.C.)
    const taxAmount = totalAfterDays * TAX_RATE_DC;
    
    // Final total including delivery fee and tax
    const finalTotal = (totalAfterDays + deliveryFee + taxAmount).toFixed(2);
    
    return finalTotal;
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto py-8 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-2/3 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg font-semibold text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Description: ${item.description}</p>
                  <p className="text-sm text-gray-500">Price: ${(item.priceRange[0] + item.priceRange[1]) / 2}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => handleQuantityChange(index, Math.max(1, item.quantity - 1))}
                      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                    >
                      <HiOutlineMinus size={20} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                    >
                      <HiOutlinePlus size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))
        )}

        <div className="mt-6 flex items-center space-x-4">
          <h3 className="text-lg font-semibold">Total Rental Days: {totalDays}</h3>
          <button
            onClick={() => setTotalDays(Math.max(1, totalDays - 1))}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
          >
            <HiOutlineMinus size={20} />
          </button>
          <button
            onClick={() => setTotalDays(totalDays + 1)}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
          >
            <HiOutlinePlus size={20} />
          </button>
        </div>

        <div className="mt-6 flex items-center space-x-4">
          <button
            onClick={() => setIsDelivery(!isDelivery)}
            className={`flex items-center space-x-2 p-4 w-full rounded-md text-lg font-semibold transition duration-300 ${isDelivery ? 'bg-yellow-500' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {isDelivery ? (
              <>
                <FaCheckCircle size={20} />
                <span>Delivery Selected</span>
              </>
            ) : (
              <>
                <FaTruck size={20} />
                <span>Do you want delivery?</span>
              </>
            )}
          </button>
        </div>

        {isDelivery && (
          <div className="mt-4 flex items-center space-x-4">
            <h3 className="text-lg font-semibold">Delivery Mileage: {mileage} miles</h3>
            <button
              onClick={() => setMileage(Math.max(0, mileage - 1))}
              className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
            >
              <HiOutlineMinus size={20} />
            </button>
            <button
              onClick={() => setMileage(mileage + 1)}
              className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
            >
              <HiOutlinePlus size={20} />
            </button>
          </div>
        )}

        {message && <p className="text-red-500 mt-4">{message}</p>}
      </div>

      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
      <p className="text-xl font-semibold text-center text-blue-600 bg-yellow-100 p-4 my-2 rounded-lg shadow-lg">
     Order SUmmary
    </p>
        <div className="space-y-4 mt-4">
          <div className="flex justify-between text-lg">
            <span>Subtotal</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Total Days</span>
            <span>{totalDays} day(s)</span>
          </div>
          {isDelivery && (
            <div className="flex justify-between text-lg">
              <span>Delivery Fee (per mile)</span>
              <span>${mileage}</span>
            </div>
          )}
          <div className="flex justify-between text-lg">
            <span>Tax (6% - Washington D.C.)</span>
            <span>${(calculateTotal() * totalDays * TAX_RATE_DC).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-semibold mt-4">
            <span>Total</span>
            <span>${calculateFinalTotal()}</span>
          </div>
        </div>

        {/* Rental Address Inputs */}
        <h3 className="text-lg font-semibold mt-6">Rental Details</h3>
        <p className="text-xl font-semibold text-center text-blue-600 bg-yellow-100 p-4 rounded-lg shadow-lg">
      Rental Details
    </p>
        <div className="space-y-4 mt-2">
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={address.streetAddress}
            onChange={handleAddressChange}
            className="p-2 w-full border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleAddressChange}
            className="p-2 w-full border border-gray-300 rounded-md"
          />
          <p className="text-xl font-semibold text-center text-blue-600 bg-yellow-100 p-4 rounded-lg shadow-lg">
      Rental Date
    </p>
          <input
            type="date"
            name="rentalDate"
            value={address.rentalDate}
            onChange={handleAddressChange}
            className="p-2 w-full border border-gray-300 rounded-md"
          />
           <p className="text-xl font-semibold text-center text-blue-600 bg-yellow-100 p-4 rounded-lg shadow-lg">
      Rental time
    </p>
          <input
            type="time"
            name="rentalTime"
            value={address.rentalTime}
            onChange={handleAddressChange}
            className="p-2 w-full border border-gray-300 rounded-md"
          />
           <p className="text-xl font-semibold text-center text-blue-600 bg-yellow-100 p-4 rounded-lg shadow-lg">
      Return Date
    </p>
          <input
            type="date"
            name="returnDate"
            value={address.returnDate}
            onChange={handleAddressChange}
            className="p-2 w-full border border-gray-300 rounded-md"
          />
           <p className="text-xl font-semibold text-center text-blue-600 bg-yellow-100 p-4 rounded-lg shadow-lg">
      Return time
    </p>
          <input
            type="time"
            name="returnTime"
            value={address.returnTime}
            onChange={handleAddressChange}
            className="p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={proceedToPayment}
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md mt-6"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ContinuePaymentPage;
