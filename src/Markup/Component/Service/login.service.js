// Access environment variables using process.env
// login.services.js
const API_URL = "https://emandecor.onrender.com";

// A function to send the login request to the server
export const logIn = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  console.log("About to send request", requestOptions.body);

  const response = await fetch(`${API_URL}/api/user/login`, requestOptions);
  return response; // Handle response in AuthForm
};


// A function to log out the user
const logOut = () => {
  localStorage.removeItem("user"); // Changed from "employee" to "user"
};

const loginServices = {
  logIn,
  logOut,
};

// Export the functions
export default loginServices;
