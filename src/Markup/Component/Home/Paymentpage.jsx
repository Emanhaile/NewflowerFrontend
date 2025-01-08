// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const PaymentPage = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extracting cart, totalDays, totalAmount, delivery options, and user details from the previous page state
//   const { cart, totalDays, totalAmount, userId, isDelivery, mileage, orderId, street_address, rentalDate, rentalTime, city } = location.state || {};
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Calculate the final total after delivery and rental days
//   const calculateFinalTotal = () => {
//     const baseTotal = cart?.reduce((total, item) => {
//       const avgPrice = (item.priceRange[0] + item.priceRange[1]) / 2;
//       return total + avgPrice * item.quantity;
//     }, 0);

//     // If delivery is selected, include mileage cost
//     const deliveryFee = isDelivery ? mileage * 1 : 0; // Assuming 1 is the cost per mile
//     const totalAfterDays = baseTotal * totalDays;

//     return (totalAfterDays + deliveryFee).toFixed(2); // Final total price
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setIsLoading(true);
//     setMessage("Processing your payment...");

//     // Prepare the request data to send to the backend
//     const requestData = {
//       cart,           // Array of cart items
//       totalAmount,    // The total amount (before any calculations like mileage)
//       totalDays,      // The total number of days for rental
//       mileage,        // Delivery mileage cost (if applicable)
//       isDelivery,     // Flag for whether delivery is selected
//       userId,         // User ID to associate with the order
//       street_address,  
//       city,
//       rentalDate,
//       rentalTime,
//       // Address and rental details from previous page
//     };

//     try {
//       // Send POST request to the backend to create the checkout session
//       const response = await fetch("http://localhost:3000/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       // Check if the response is ok
//       if (!response.ok) {
//         throw new Error("Failed to create checkout session");
//       }

//       // Parse the response as JSON
//       const data = await response.json();
//       console.log("Response from backend:", data);

//       // Check if the sessionId is in the response
//       if (data && data.sessionId) {
//         // Confirm the payment using the sessionId from the backend
//         const { error } = await stripe.confirmPayment({
//           elements,
//           confirmParams: {
//             return_url: `${window.location.origin}/success`, // Redirect to success page after payment success
//           },
//         });

//         if (error) {
//           // If there's an error, display the error message and redirect to the cancel page
//           setMessage("Payment failed. Please try again.");
//           navigate("/cancel"); // Redirect to cancel page if payment fails
//         } else {
//           // Payment successful, redirect to success page
//           navigate("/success"); // Redirect to success page
//         }
//       } else {
//         throw new Error("Unexpected response format");
//       }
//     } catch (error) {
//       console.error("Error during payment request:", error);
//       setMessage("Payment failed. Please try again.");
//     }

//     setIsLoading(false);
//   };

//   useEffect(() => {
//     // Redirect back if cart data or totalDays are missing
//     if (!cart || cart.length === 0 || !totalDays) {
//       navigate("/"); // Redirect to homepage if invalid state
//     }
//   }, [cart, totalDays, navigate]);

//   return (
//     <div className="container mx-auto py-8 bg-slate-500">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Complete Your Payment</h1>

//         {/* Order Summary */}
//         <div className="space-y-4">
//           <div className="flex justify-between text-lg">
//             <span>Subtotal</span>
//             <span>${calculateFinalTotal()}</span>
//           </div>
//           <div className="flex justify-between text-lg">
//             <span>Total Days</span>
//             <span>{totalDays} day(s)</span>
//           </div>
//           {isDelivery && (
//             <div className="flex justify-between text-lg">
//               <span>Delivery Fee (per mile)</span>
//               <span>${mileage}</span>
//             </div>
//           )}
//           <div className="flex justify-between text-xl font-semibold mt-4">
//             <span>Total</span>
//             <span>${calculateFinalTotal()}</span>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <PaymentElement />
//           <button
//             type="submit"
//             disabled={isLoading || !stripe || !elements}
//             className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
//           >
//             {isLoading ? "Processing..." : "Pay Now"}
//           </button>
//         </form>

//         {message && <p>{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
