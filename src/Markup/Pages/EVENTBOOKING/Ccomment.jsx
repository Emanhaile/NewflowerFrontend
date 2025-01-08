import { useAuth } from "../../context/AuthContext.jsx";
// Import the AddCustomerForm component
// Import the AdminMenu component

import Login from "../../Component/signup/Login.jsx";;
import AdminMenu from "../../Component/AdminMenu/AdminMenu.jsx";
import Comments from "../../Component/Commentlist/Comments.jsx";
import Admincustomer from "../../Component/AdminMenu/Admincustomer.jsx";

function CComment() {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div className="min-h-screen ">
          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-1/4  PX-1 shadow-md rounded-lg">
              <Admincustomer />
            </div>
            {/* Right Content */}
            <div className="md:w-3/4  PX-1 shadow-md rounded-lg">
              <Comments />
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

export default CComment;
