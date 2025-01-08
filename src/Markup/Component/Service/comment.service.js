// user.services.js
const API_URL = "http://localhost:3003";

// Function to create a new user
export const createComment = async (userData, loggedInUserToken) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInUserToken,
    },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`${API_URL}/api/comment`, options);
    return response; // Handle response in AuthForm
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Re-throw error for upstream handling
  }
};


// Function to get all users
const getAllcomments = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${API_URL}/api/comment`, requestOptions);
    return response; // Return the raw response
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Function to get a user by ID
const getcommentById = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${API_URL}/api/comment/${id}`, requestOptions);
    return response; // Return the raw response
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error; // Re-throw error for upstream handling
  }
};



// Function to update a user
const updatecomment = async (id, userData, token) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`${API_URL}/api/comment/${id}`, options);
    return response; // Return the raw response
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Function to delete a user
const deleteComment = async (userId, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${API_URL}/api/comment/${userId}`,
      requestOptions
    );
    return response; // Return the raw response
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Re-throw error for upstream handling
  }
};



// Export all the functions
const userService = {
  createComment,
  getAllcomments,
  getcommentById,
  updatecomment,
  deleteComment
};

export default userService;
