import React from "react";
import { Link } from "react-router-dom";

function AdminMenu({ user_id }) {
  if (!user_id) {
    console.error("AdminMenu received an undefined user_id.");
  }

  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className=" text-white p-4 rounded-md ">
        <h2 className="text-2xl font-semibold">Admin Menu</h2>
      </div>
      <div className=" shadow-lg rounded-lg p-6 space-y-6 mt-6">
        

        <Link
          to="/admin/user"
          className="block px-4 py-3  bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300"
        >
          user Manage
        </Link>
        <Link
          to="/admin/orders"
          className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          View Order Managment 
        </Link>

        <Link
          to="/admin/eventlist"
          className="block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          View booking event
        </Link>

       
        <Link
          to="/customer/comment"
          className="block px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
        >
          View all comment
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
