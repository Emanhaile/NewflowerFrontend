import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import userService from "../Service/user.service";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ITEMS_PER_PAGE = 10;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { user } = useAuth();
  const token = user?.user_token || null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getAllUsers(token);
        const data = await response.json();

        if (data.status === "success") {
          setUsers(data.data || []);
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (err) {
        setApiError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  const handleDelete = async (userId) => {
    try {
      const response = await userService.deleteUser(userId, token);
      const data = await response.json();

      if (data.status === "success") {
        setUsers((prevUsers) =>
          prevUsers.filter((usr) => usr.user_id !== userId)
        );
        toast.success("User deleted successfully!");
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const formatDate = (dateString) => {
    return dateString ? format(new Date(dateString), "MMMM dd, yyyy") : "N/A";
  };

  const filteredUsers = users.filter(user =>
    user.user_email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const currentUsers = filteredUsers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Function to get the role color based on the role
  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-green-200 text-green-800';
      case 'employee':
        return 'bg-orange-200 text-orange-800';
      case 'user':
        return 'bg-red-200 text-red-800';
      case 'manager':
        return 'bg-blue-200 text-blue-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <section className="flex justify-center items-center h-screen bg-gray-100">
          <div className="text-center">
            <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-12 h-12 mx-auto"></div>
            <p className="mt-2 text-lg">Loading users...</p>
          </div>
        </section>
      ) : apiError ? (
        <section className="p-4">
          <div className="text-center">
            <h2 className="text-red-500">{apiError}</h2>
          </div>
        </section>
      ) : (
        <section className="p-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Users</h2>
            <div className="mb-3">
              <label htmlFor="searchEmail" className="block text-sm font-medium text-gray-700">
                Search by Email
              </label>
              <input
                type="text"
                id="searchEmail"
                placeholder="Enter email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">First Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Last Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Role</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Created At</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map(user => (
                    <motion.tr
                      key={user.user_id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <td className="px-4 py-2">{user.user_firstName}</td>
                      <td className="px-4 py-2">{user.user_lastName}</td>
                      <td className="px-4 py-2">{user.user_email}</td>
                      <td className={`px-4 py-2 ${getRoleColor(user.company_role)}`}>{user.company_role}</td>
                      <td className="px-4 py-2">{formatDate(user.CreatedAt)}</td>
                      <td className="px-4 py-2 flex gap-2">
                        <button
                          onClick={() =>
                            navigate(`/admin/user/edit/${user.user_id}`)
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <MdEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(user.user_id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center my-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="mx-2 text-sm text-gray-700">
                {`Page ${currentPage} of ${totalPages}`}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserList;
