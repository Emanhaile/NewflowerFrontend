import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const rentalProducts = [
  {
    name: 'Table',
    description: 'Elegant round table for your event',
    priceRange: [50, 100], // Price range example
    image: 'path_to_image',
  },
  {
    name: 'Chairs',
    description: 'Comfortable chairs for your guests',
    priceRange: [15, 30], // Price range example
    image: 'path_to_image',
  },
  // Add more products here
];

const RentalProducts = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product, rentalDays) => {
    if (rentalDays <= 0) return; // Prevent adding to cart if rental days are invalid

    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.name === product.name);
      if (productIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1;
        updatedCart[productIndex].rentalDays = rentalDays; // Update rental days
        return updatedCart;
      } else {
        return [
          ...prevCart,
          { ...product, quantity: 1, rentalDays }, // Add rental days to product
        ];
      }
    });
  };

  const handleCheckout = () => {
    console.log('Cart data being passed to PaymentPage:', cart); // Log cart data to console for debugging
    navigate('/payment', { state: { cart } });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold">Wedding & Event Rentals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rentalProducts.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-medium text-gray-900">
                ${((product.priceRange[0] + product.priceRange[1]) / 2).toFixed(2)} / day
              </p>

              <div className="mt-4">
                <label htmlFor={`rental-days-${index}`} className="block text-sm text-gray-700">
                  Rental Days
                </label>
                <input
                  type="number"
                  id={`rental-days-${index}`}
                  min="1"
                  placeholder="1"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={(e) => addToCart(product, parseInt(e.target.value))}
                />
              </div>

              <button
                onClick={() => addToCart(product, 1)} // Default to 1 day if not set
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleCheckout}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default RentalProducts;
