import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userService from "../Service/user.service";
import { useAuth } from "../../context/AuthContext";

function EditUserForm() {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate();
  const [user_firstName, setFirstName] = useState("");
  const [user_lastName, setLastName] = useState("");
  const [user_email, setEmail] = useState("");
  const [role_id, setUserRoleId] = useState(1);
  const [roles, setRoles] = useState([]);
  const [serverError, setServerError] = useState("");
  const { user } = useAuth();
  const loggedInUserToken = user?.user_token || "";

  useEffect(() => {
    // Fetch user data by ID
    userService
      .getUserById(id, loggedInUserToken)
      .then((response) => {
        console.log("User fetch response:", response); // Log the response
        if (response && response.json) {
          return response.json();
        } else {
          throw new Error("Invalid response format");
        }
      })
      .then((data) => {
        if (data.status === "success") {
          const { user_firstName, user_lastName, user_email, role_id } = data.data;
          setFirstName(user_firstName || "");
          setLastName(user_lastName || "");
          setEmail(user_email || "");
          setUserRoleId(role_id || 1);
        } else {
          setServerError(data.error || "Failed to fetch user data");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setServerError("Failed to fetch user data");
      });

    // Fetch roles
    fetchRoles(loggedInUserToken);
  }, [id, loggedInUserToken]);

  const fetchRoles = (token) => {
    userService
      .getRoles(token)
      .then((response) => {
        console.log("Roles fetch response:", response); // Log the response
        if (response && response.json) {
          return response.json();
        } else {
          throw new Error("Invalid response format");
        }
      })
      .then((data) => {
        if (data.status === "success") {
          const rolesData = data.data || []; // Ensure response structure matches
          setRoles(rolesData);
          console.log(roles);
        } else {
          setServerError(data.error || "Failed to fetch roles");
        }
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
        setServerError("Failed to fetch roles");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_firstName,
      user_lastName,
      user_email,
      role_id,
    };

    userService
      .updateUser(id, formData, loggedInUserToken)
      .then((response) => {
        console.log("Update user response:", response); // Log the response
        if (response && response.json) {
          return response.json();
        } else {
          throw new Error("Invalid response format");
        }
      })
      .then((data) => {
        if (data.status === "success") {
          setServerError("");
          navigate("/admin/user");
        } else {
          setServerError(data.error || "Failed to update user");
        }
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        setServerError("Failed to update user");
      });
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Edit User</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {serverError && (
                  <div className="bg-red-100 text-red-600 p-2 rounded-md">
                    {serverError}
                  </div>
                )}

                {/* Email Field */}
                <div className="flex flex-col">
                  <label htmlFor="user_email" className="text-sm font-medium text-gray-700">User Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={user_email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter user email"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* First Name Field */}
                <div className="flex flex-col">
                  <label htmlFor="user_firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="user_firstName"
                    name="user_firstName"
                    value={user_firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Last Name Field */}
                <div className="flex flex-col">
                  <label htmlFor="user_lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="user_lastName"
                    name="user_lastName"
                    value={user_lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Role Select Field */}
                <div className="flex flex-col">
                  <label htmlFor="user_role_id" className="text-sm font-medium text-gray-700">Role</label>
                  <select
                    id="user_role_id"
                    name="user_role_id"
                    value={role_id}
                    onChange={(e) => setUserRoleId(Number(e.target.value))}
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {roles.length > 0 ? (
                      roles.map((role) => (
                        <option key={role.role_id} value={role.role_id}>
                          {role.Company_role}
                        </option>
                      ))
                    ) : (
                      <option value="">No roles available</option>
                    )}
                  </select>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Update User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditUserForm;
