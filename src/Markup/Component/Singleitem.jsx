import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Assuming you're using react-router for routing

const OrderDetails = () => {
  const { orderId } = useParams();  // Get orderId from the URL parameters
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`https://emandecor.onrender.com/orders/${orderId}`);
        if (!response.ok) {
          throw new Error('Order not found');
        }
        const data = await response.json();
        setOrder(data);  // Store the order data in state
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);  // Re-fetch if orderId changes

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Order Details</h1>
      <div className="border-t-2 border-gray-200 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="font-semibold">Order ID:</div>
          <div>{order.id}</div>

          <div className="font-semibold">Customer Name:</div>
          <div>{order.customerName}</div>

          <div className="font-semibold">Order Date:</div>
          <div>{new Date(order.createdAt).toLocaleDateString()}</div>

          <div className="font-semibold">Status:</div>
          <div>{order.status}</div>

          <div className="font-semibold">Total Amount:</div>
          <div>{`$${order.totalAmount.toFixed(2)}`}</div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Items</h2>
        <div className="space-y-2">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div>{item.name}</div>
              <div>{`$${item.price.toFixed(2)} x ${item.quantity}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
