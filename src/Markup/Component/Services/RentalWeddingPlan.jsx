import React from "react";

const RentalWeddingPlan = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Rental Wedding Plan</h1>
        <p className="mt-4 text-xl text-gray-600">
          Our comprehensive rental wedding packages ensure that your special day is stress-free and filled with elegance.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">What’s Included in Our Rental Wedding Plan</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Elegant Wedding Furniture Rentals: Chairs, Tables, Lounges, and More</li>
            <li>Decorative Elements: Centerpieces, Linens, and Fabrics</li>
            <li>Lighting and Ambiance: Chandeliers, String Lights, and Candles</li>
            <li>Customized Rentals: Personalization options for every detail</li>
            <li>Delivery, Setup, and Breakdown Service</li>
            <li>Expert Wedding Coordinators to Assist with Setup and Design</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Our Rental Packages</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">Classic Wedding Package</h3>
              <p className="mt-2 text-gray-600">Perfect for an intimate, elegant ceremony with all the essentials.</p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                <li>Chairs & Tables</li>
                <li>Tablecloths & Napkins</li>
                <li>Centerpieces</li>
                <li>Basic Lighting</li>
                <li>Delivery & Setup</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">Premium Wedding Package</h3>
              <p className="mt-2 text-gray-600">For couples who want to create a truly unforgettable experience.</p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                <li>Custom Lounge Areas</li>
                <li>Luxurious Linens</li>
                <li>Full Wedding Lighting Setup</li>
                <li>Custom Decor Design</li>
                <li>Complete Setup, Breakdown, and Coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark">
          Contact Us for a Custom Quote
        </button>
      </div>
    </div>
  );
};

export default RentalWeddingPlan;
