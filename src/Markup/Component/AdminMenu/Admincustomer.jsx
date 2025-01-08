import React from "react";
import { Link } from "react-router-dom";

function Admincustomer({ user_id }) {
  if (!user_id) {
    console.error("Admincustomer received an undefined user_id.");
  }

  return (
    <div className="container-fluid h-screen bg-gradient-to-r from-[#1A202C] to-[#2D3748]">
      <div className="text-white p-6 rounded-md  shadow-lg">
        <h2 className="text-3xl font-semibold text-center">Customer Admin</h2>
      </div>
      <div className="bg-[#1E2A37] shadow-xl rounded-lg p-8 space-y-6">
        <Link
          to="/admin/eventbooking"
          className="block px-6 py-3 text-white rounded-md bg-indigo-500 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          Event Booking Form
        </Link>

        <Link
          to={`/admin/viewevent/${user_id}`}
          className="block px-6 py-3 text-white rounded-md bg-green-500 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          View Booking Event
        </Link>

        
      </div>
    </div>
  );
}

export default Admincustomer;
