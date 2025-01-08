import { useAuth } from "../../context/AuthContext.jsx";
// Import the AddCustomerForm component
// Import the AdminMenu component

import Login from "../../Component/signup/Login.jsx";
import EventList from "../../Component/Eventlist/EventList.jsx";
import AdminMenu from "../../Component/AdminMenu/AdminMenu.jsx";

function AdminMenupage() {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div className="min-h-screen ">
          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-1/4  PX-1 shadow-md rounded-lg">
              <AdminMenu />
            </div>
            {/* Right Content */}
            <div className="md:w-3/4  PX-1 shadow-md rounded-lg">
              <EventList />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <h1 className="text-2xl font-semibold text-gray-800">You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Login />
      </div>
    );
  }
}

export default AdminMenupage;
