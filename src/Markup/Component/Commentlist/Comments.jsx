import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Import FaTrash icon from react-icons

function Comments() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Search input state

  // Fetch all comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Correct API URL
        const response = await axios.get("https://emandecor.onrender.com/api/comment");
        
        // Check the response structure
        console.log(response.data);

        // Ensure the response is an array
        if (Array.isArray(response.data)) {
          setComments(response.data);
        } else {
          setError("Unexpected response format.");
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch comments.");
        setLoading(false);
      }
    };

    fetchComments();
  }, []); // Empty dependency array means this will run once when the component mounts

  // Handle delete comment
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://emandecor.onrender.com/api/comment/${id}`);
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    } catch (err) {
      setError("Failed to delete comment.");
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter comments based on the search query
  const filteredComments = comments.filter(
    (comment) =>
      comment.name.toLowerCase().includes(search.toLowerCase()) ||
      comment.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Customer Comments</h2>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Name or Email"
          value={search}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center space-x-2">
          <div className="w-8 h-8 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      ) : (
        // Table Layout
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Comment</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.length > 0 ? (
                filteredComments.map((comment) => (
                  <tr key={comment.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{comment.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{comment.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{comment.comment}</td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleDelete(comment.id)}
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                      >
                        <FaTrash /> {/* Display trash icon */}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                    No comments available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Comments;
