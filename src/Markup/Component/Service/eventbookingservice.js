const API_URL = "http://localhost:3003";

// Function to create a new event booking
const createEventBooking = async (eventData, loggedInCustomerToken) => {
  const options = {
    method: "POST",
    headers: {
      "x-access-token": loggedInCustomerToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData), // Pass event data as JSON
  };

  const response = await fetch(`${API_URL}/api/bookus`, options);
  return response;
};

// Function to get all event bookings
const getAllEventBookings = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  const response = await fetch(`${API_URL}/api/bookus`, requestOptions);
  return response;
};

// Function to get a specific event booking by ID
const getEventBookingById = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  const response = await fetch(`${API_URL}/api/bookus/${id}`, requestOptions);
  return response;
};

// Function to get event booking status by ID
const getEventBookingStatusById = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  const response = await fetch(`${API_URL}/api/bookus/status/${id}`, requestOptions);
  return response;
};

// Function to update an event booking
const updateEventBooking = async (id, eventData, token) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(eventData), // Pass updated event data as JSON
  };

  const response = await fetch(`${API_URL}/api/bookus/${id}`, options);
  return response;
};

// Function to delete an event booking
const deleteEventBooking = async (id, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  const response = await fetch(`${API_URL}/api/bookus/${id}`, requestOptions);
  return response;
};

// Export all the functions
const eventBookingService = {
  createEventBooking,
  getAllEventBookings,
  getEventBookingById,
  updateEventBooking,
  deleteEventBooking,
  getEventBookingStatusById,
};

export default eventBookingService;
