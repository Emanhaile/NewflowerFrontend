import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import image1 from '../../../assets/images/Rental/RENTALS1.jpg';
import image2 from '../../../assets/images/Rental/RENTALS2.jpg';
import image3 from '../../../assets/images/Rental/Rentals3.jpg';
import image5 from '../../../assets/images/Rental/Round-Polyester-Tablecloth-Yellow.webp';


const rentalProducts = [
  {
    name: 'White Chiavari Chairs',
    price: '$8–$15 per day',
    image: image1,
    description: 'Elegant white Chiavari chairs for weddings, banquets, and special events.',
    priceRange: [8, 15],
  },
  {
    name: 'Round Polyester 132" Tablecloth - Yellow',
    price: '$8–$15 per day',
    image: image5,
    description: 'The Round Polyester 132" Tablecloth in Yellow offers vibrant color, durable fabric, and elegant coverage for large tables at events.',
    priceRange: [8, 15],
  },
  {
    name: 'Banquet Tables (6ft)',
    price: '$15–$30 per day',
    image: image2,
    description: '6ft banquet tables perfect for large events or wedding receptions.',
    priceRange: [15, 30],
  },
  {
    name: 'Wedding Arch (Wooden)',
    price: '$50–$100 per day',
    image: image3,
    description: 'Rustic wooden wedding arch for ceremonies, customizable with florals.',
    priceRange: [50, 100],
  },
  
  
];

const RentalProducts = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // To navigate to the payment page

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex((item) => item.name === product.name);

      if (itemIndex !== -1) {
        updatedCart[itemIndex].quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1, rentalDays: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleCartClick = () => {
    // Navigate to the ProceedToPaymentPage
    navigate('/checkout');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const avgPrice = (item.priceRange[0] + item.priceRange[1]) / 2;
      return total + avgPrice * item.rentalDays * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-8 px-4 mt-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Wedding & Event Rentals</h1>
        <button
          onClick={handleCartClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rentalProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-medium text-gray-900 mb-4">{product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalProducts;
