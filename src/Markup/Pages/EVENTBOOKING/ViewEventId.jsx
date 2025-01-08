import React from "react";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "../../Component/signup/Login";
import { useParams } from "react-router-dom";
import Admincustomer from "../../Component/AdminMenu/Admincustomer";
import EventListByid from "../../Component/Eventlist/EventListByid";

function ViewEventId() {
  // Destructure the auth hook
  const { isLogged, isAdmin, user } = useAuth();
  
  console.log("Customer ID from URL:", { user_id: user.user_id });
  
  // If user is not logged in, show the login form
  if (!isLogged) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoginForm />
      </div>
    );
  }

  // If user is not an admin, show authorization message
  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl text-red-600">You are not authorized to access this page</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto  ">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          {/* Pass customer_id to AdminMenu component */}
          <Admincustomer user_id={user.user_id} />
        </div>
        <div className="w-full md:w-3/4 ">
          {/* Pass customer_id to CustomDeclarationsList component */}
          <EventListByid user_id={user.user_id} />
        </div>
      </div>
    </div>
  );
}

export default ViewEventId;
