import { useState } from "react";
import customerService from "../Service/eventbookingservice"; // Adjust the path as necessary
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EventBookingForm(props) {
  const id = useParams().id;
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerFullname, setCustomerfullname] = useState("");
  const [customerphone, setCustomerphone] = useState("");
  const [eventdate, seteventdate] = useState("");
  const [eventdetail, seteventdetail] = useState("");
  const [eventtype, seteventtype] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const loggedInCustomerToken = user?.token || "";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle client-side validations
    let valid = true;

    // Validation for customer fullname
    if (!customerFullname) {
      setErrors((prev) => ({ ...prev, customerFullname: "Name is required" }));
      valid = false;
    } else if (customerFullname.length < 3) {
      setErrors((prev) => ({ ...prev, customerFullname: "Name must be at least three characters" }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, customerFullname: "" }));
    }

    // Validation for event type
    if (!eventtype) {
      setErrors((prev) => ({ ...prev, eventtype: "Event type is required" }));
      valid = false;
    } else if (eventtype.length < 3) {
      setErrors((prev) => ({ ...prev, eventtype: "Event type must be at least three characters" }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, eventtype: "" }));
    }

    // Validation for email
    if (!customerEmail) {
      setErrors((prev) => ({ ...prev, customerEmail: "Email is required" }));
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(customerEmail)) {
      setErrors((prev) => ({ ...prev, customerEmail: "Invalid email format" }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, customerEmail: "" }));
    }

    // Validation for phone number
    if (!customerphone) {
      setErrors((prev) => ({ ...prev, customerphone: "Phone number is required" }));
      valid = false;
    } else if (customerphone.length < 9) {
      setErrors((prev) => ({ ...prev, customerphone: "Please enter a full phone number" }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, customerphone: "" }));
    }

    // Validation for event details
    if (!eventdetail) {
      setErrors((prev) => ({ ...prev, eventdetail: "Event details are required" }));
      valid = false;
    } else if (eventdetail.length < 3) {
      setErrors((prev) => ({ ...prev, eventdetail: "Event details must be at least three characters" }));
      valid = false;
    } else {
      setErrors((prev) => ({ ...prev, eventdetail: "" }));
    }

    // If the form is not valid, do not submit
    if (!valid) return;

    const formData = {
      user_id: user.user_id,
      name: customerFullname || null,
      email: customerEmail || null,
      phone: customerphone || null,
      event_type: eventtype || null,
      event_details: eventdetail || null,
      event_date: eventdate || null,
    };

    setIsLoading(true);

    try {
      const response = await customerService.createEventBooking(
        formData,
        loggedInCustomerToken
      );
      const data = await response.json();
      console.log("Parsed Response Data:", data);
      if (data.status === "true") {
        const bookId = data.event_id; // Assuming the backend returns event_id
        console.log("Event ID: ", bookId);

        setSuccess(true);
        setServerError("");

        // Clear form fields
        setCustomerEmail("");
        setCustomerfullname("");
        setCustomerphone("");
        seteventdate("");
        seteventtype("");
        seteventdetail("");

        // Navigate to the document upload page with the event ID
        setTimeout(() => {
          navigate(`/admin/viewevent/${user.user_id}`);
        }, 2000);
      } else {
        setServerError("Failed to add event booking. Please try again.");
      }
    } catch (error) {
      setServerError("An error occurred while adding the event booking.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F1F1]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Your Event With Us
        </h2>

        {serverError && (
          <div className="bg-red-100 text-red-600 p-2 mb-4 rounded-md">
            {serverError}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-600 p-2 mb-4 rounded-md">
            Event booked successfully! We will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerFullname}
              onChange={(event) => setCustomerfullname(event.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
            />
            {errors.customerFullname && <div className="text-red-600 text-sm">{errors.customerFullname}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerphone}
              onChange={(event) => setCustomerphone(event.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
            />
            {errors.customerphone && <div className="text-red-600 text-sm">{errors.customerphone}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerEmail}
              onChange={(event) => setCustomerEmail(event.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
            />
            {errors.customerEmail && <div className="text-red-600 text-sm">{errors.customerEmail}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="eventDate" className="block text-lg font-medium text-gray-700">
              Event Date and Time
            </label>
            <input
              type="datetime-local"
              id="eventDate"
              name="event_date"
              value={eventdate}
              onChange={(event) => seteventdate(event.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
            />
            {errors.eventDate && <div className="text-red-600 text-sm">{errors.eventDate}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="event_type" className="block text-lg font-medium text-gray-700">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              value={eventtype}
              onChange={(event) => seteventtype(event.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
            >
              <option value="">Select an option</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Graduation Party">Graduation Party</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Other">Other</option>
            </select>
            {errors.eventtype && <div className="text-red-600 text-sm">{errors.eventtype}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="eventDetails" className="block text-lg font-medium text-gray-700">
              Event or Party Details
            </label>
            <textarea
              id="eventDetails"
              name="event_details"
              value={eventdetail}
              onChange={(event) => seteventdetail(event.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              rows={4} placeholder="write detail vendor address, color , Timeline: [Event start and end times, including set-up and breakdown times], Total Number of Guests: [Number of invited guests], Event Decor Details: ."
            ></textarea>
            {errors.eventdetail && <div className="text-red-600 text-sm">{errors.eventdetail}</div>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#A3AD6F] hover:bg-indigo-700 text-white font-bold py-3 rounded-md shadow-sm"
            disabled={isLoading}
          >
            {isLoading ? "Booking..." : "Book Event"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventBookingForm;
