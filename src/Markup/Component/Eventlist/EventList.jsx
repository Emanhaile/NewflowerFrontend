import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import eventBookingService from "../Service/eventbookingservice";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaDownload, FaFile } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const EventList = () => {
  const [eventBookings, setEventBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useAuth();
  const token = user?.user_token || "";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventBookings = async () => {
      try {
        const response = await eventBookingService.getAllEventBookings(token);
        const data = await response.json();

        if (response.ok && data.success) {
          setEventBookings(data.data || []);
        } else {
          setApiError(true);
          setApiErrorMessage(data.message || "An error occurred while fetching data");
        }
      } catch (error) {
        setApiError(true);
        setApiErrorMessage("An error occurred while fetching data");
        console.error("Error fetching event bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventBookings();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      const response = await eventBookingService.deleteEventBooking(id, token);
      if (response.ok) {
        setEventBookings((prevBookings) => prevBookings.filter(book => book.event_id !== id));
        setSuccessMessage("Event booking deleted successfully!");
      } else {
        const errorText = await response.text();
        throw new Error(`Failed to delete event booking: ${errorText}`);
      }
    } catch (error) {
      setApiError(true);
      setApiErrorMessage(error.message || "An error occurred while deleting the event booking.");
      console.error("Error deleting event booking:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/event/edit/${id}`);
  };

  const handleStatus = (id) => {
    navigate(`/admin/status/${id}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date";

    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
  };

  const filteredBookings = eventBookings.filter(book =>
    book.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalBookings = filteredBookings.length;
  const totalPages = Math.ceil(totalBookings / itemsPerPage);
  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

  return (
    <div className="pb-12">
      {loading ? (
        <LoadingState />
      ) : apiError ? (
        <ErrorState message={apiErrorMessage} />
      ) : (
        <EventBookingTable 
          eventBookings={currentBookings} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
          onStatus={handleStatus}
          formatDate={formatDate} 
          successMessage={successMessage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
};

// Loading State Component
const LoadingState = () => (
  <section className="text-center h-screen">
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
    </div>
    <p className="mt-4 text-lg">Loading event bookings...</p>
  </section>
);

// Error State Component
const ErrorState = ({ message }) => (
  <section className="text-center py-8">
    <h2 className="text-xl font-semibold text-red-600">{message}</h2>
  </section>
);

// Event Booking Table Component
const EventBookingTable = ({ eventBookings, onEdit, onDelete, onStatus, formatDate, successMessage, totalPages, setCurrentPage, searchTerm, setSearchTerm }) => (
  <section className="p-6 bg-white shadow-md rounded-lg">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-semibold">Event Bookings</h2>
      {successMessage && <div className="bg-green-100 text-green-700 px-4 py-2 rounded mt-4">{successMessage}</div>}
    </div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by Name or Email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Event ID</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Phone</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Event Date</th>
            <th className="px-4 py-2 border-b">Event Type</th>
            <th className="px-4 py-2 border-b">Event Details</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {eventBookings.map((booking) => (
            <EventBookingRow 
              key={booking.event_id} 
              booking={booking} 
              onEdit={onEdit} 
              onDelete={onDelete} 
              onStatus={onStatus} 
              formatDate={formatDate}
            />
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-between items-center mt-4">
      <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  </section>
);

// Pagination Component
const Pagination = ({ totalPages, setCurrentPage }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(i => i + 1);

  return (
    <div className="flex space-x-2">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

// Event Booking Row Component
const EventBookingRow = ({ booking, onEdit, onDelete, onStatus, formatDate }) => (
  <tr className="border-b">
    <td className="px-4 py-2">{booking.event_id}</td>
    <td className="px-4 py-2">{booking.name}</td>
    <td className="px-4 py-2">{booking.phone}</td>
    <td className="px-4 py-2">{booking.email}</td>
    <td className="px-4 py-2">{formatDate(booking.event_date)}</td>
    <td className="px-4 py-2">{booking.event_type}</td>
    <td className="px-4 py-2">{booking.event_details}</td>
    <td className="px-4 py-2">{booking.status}</td>
    <td className="px-4 py-2 flex space-x-2">
      <button onClick={() => onEdit(booking.event_id)} className="text-blue-500">
        <MdEdit />
      </button>
      <button onClick={() => onStatus(booking.event_id)} className="text-green-500">
        <IoMdEye />
      </button>
      <button onClick={() => onDelete(booking.event_id)} className="text-red-500">
        <MdDelete />
      </button>
    </td>
  </tr>
);

export default EventList;
