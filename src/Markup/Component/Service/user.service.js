// user.services.js
const API_URL = "http://localhost:3003";

// Function to create a new user
export const createUser = async (userData, loggedInUserToken) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": loggedInUserToken,
    },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`${API_URL}/api/users`, options);
    return response; // Handle response in AuthForm
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Re-throw error for upstream handling
  }
};


// Function to get all users
const getAllUsers = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${API_URL}/api/users`, requestOptions);
    return response; // Return the raw response
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Function to get a user by ID
const getUserById = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${API_URL}/api/users/${id}`, requestOptions);
    return response; // Return the raw response
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Function to get all roles
const getRoles = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${API_URL}/api/roles`, requestOptions);
    return response; // Return the raw response
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Function to update a user
const updateUser = async (id, userData, token) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(`${API_URL}/api/users/${id}`, options);
    return response; // Return the raw response
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Function to delete a user
const deleteUser = async (userId, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${API_URL}/api/users/${userId}`,
      requestOptions
    );
    return response; // Return the raw response
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Function to get a user by email
const getUserByEmail = async (email, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${API_URL}/api/users/email/${email}`,
      requestOptions
    );
    return response; // Return the raw response
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error; // Re-throw error for upstream handling
  }
};

// Export all the functions
const userService = {
  createUser,
  getAllUsers,
  getUserById,
  getRoles,
  updateUser,
  deleteUser,
  getUserByEmail,
};

export default userService;
