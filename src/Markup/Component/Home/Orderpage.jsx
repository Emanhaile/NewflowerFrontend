import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { FaTrashAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]); // State for storing all orders
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [openOrderId, setOpenOrderId] = useState(null); // State for toggling order details
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const ordersPerPage = 10; // Number of orders per page
  const { User } = useAuth(); // Get user details from context

  // Fetch all orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://emandecor.onrender.com/orders'); // Fetch all orders
        const data = await response.json();

        if (response.ok) {
          setOrders(data); // Store all orders in state
        } else {
          setMessage('Failed to load the orders.');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setMessage('Error fetching the orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); // Fetch orders only once when the component mounts

  // Handle order deletion
  const handleDeleteOrder = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/orders/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Order deleted successfully.');
        // Remove deleted order from the list without needing to refetch
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
      } else {
        setMessage('Failed to delete the order.');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      setMessage('Error deleting the order.');
    }
  };

  // Filter orders based on the search query (by name or email)
  const filteredOrders = orders.filter((order) => {
    const searchLowerCase = searchQuery.toLowerCase();
    return (
      order.user_firstName.toLowerCase().includes(searchLowerCase) ||
      order.user_lastName.toLowerCase().includes(searchLowerCase) ||
      order.user_email.toLowerCase().includes(searchLowerCase)
    );
  });

  // Get the orders for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="container mx-auto py-8 max-w-full px-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">All Orders</h1>

      {/* Full-width search input */}
      <div className="mb-6 w-full md:w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className="w-full p-4 text-lg rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <div className="text-center text-xl text-gray-600">Loading orders...</div>
      ) : (
        <>
          {message && <div className="text-center text-red-500 mb-4">{message}</div>}

          {currentOrders.length > 0 ? (
            <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
              <table className="min-w-full table-auto">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Order ID</th>
                    <th className="py-3 px-6 text-left">User Info</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    <th className="py-3 px-6 text-left">Total</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.map((order) => (
                    <React.Fragment key={order.id}>
                      <tr
                        className="border-b hover:bg-gray-100 cursor-pointer"
                        onClick={() => setOpenOrderId(openOrderId === order.id ? null : order.id)} // Toggle details
                      >
                        <td className="py-4 px-6">{order.id}</td>
                        <td className="py-4 px-6">
                          <div className="font-semibold">{order.user_firstName} {order.user_lastName}</div>
                          <div className="text-gray-600">{order.user_email}</div>
                        </td>
                        <td className="py-4 px-6">{order.status}</td>
                        <td className="py-4 px-6">${order.final_total}</td>
                        <td className="py-4 px-6 flex items-center space-x-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent click from triggering the toggle
                              handleDeleteOrder(order.id);
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrashAlt size={20} />
                          </button>
                        </td>
                      </tr>

                      {/* Detailed Order Info */}
                      {openOrderId === order.id && (
                        <tr className="bg-gray-50">
                          <td colSpan="5" className="py-4 px-6">
                            <div>
                              <h3 className="text-xl font-semibold">Order Details</h3>
                              <div><strong>Status:</strong> {order.status}</div>
                              <div><strong>Total Days:</strong> {order.total_days}</div>
                              <div><strong>Mileage:</strong> {order.mileage}</div>
                              <div><strong>Street_Address:</strong> {order.street_address}</div>
                              <div><strong>City:</strong> {order.city}</div>
                              <div><strong>rentalDate:</strong> {order.rental_date}</div>
                              <div><strong>rentalTime:</strong> {order.rental_time}</div>
                              <div><strong>returnDate:</strong> {order.return_date}</div>
                              <div><strong>returnTime:</strong> {order.return_time}</div>
                              <div><strong>tax total:</strong> {order.taxAmount}</div>
                              <div><strong>Items:</strong>
                                <ul className="space-y-2">
                                  {order.cart.map((item, index) => (
                                    <li key={index} className="flex justify-between">
                                      <span>{item.name} (x{item.quantity})</span>
                                      <span>
                                        ${(item.priceRange[0] + item.priceRange[1]) / 2 * item.quantity}
                                        
                                      </span>
                                    </li>
                                    
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-lg font-medium text-gray-600">No orders found.</div>
          )}

          {/* Pagination */}
          {totalPages > 1&& (
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
              >
                Previous
              </button>
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`py-2 px-4 rounded-lg ${currentPage === number + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500`}
                >
                  {number + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrdersPage;


