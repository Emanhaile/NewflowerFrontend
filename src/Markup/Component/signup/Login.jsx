import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import loginService from "../../Component/Service/login.service";

function Login() {
  const location = useLocation();
  const [user_email, setEmail] = useState("");
  const [user_password_value, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = true;

    // Email validation
    if (!user_email) {
      setEmailError("Please enter your email address first");
      valid = false;
    } else if (!user_email.includes("@")) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(user_email)) {
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }

    // Password validation
    if (!user_password_value || user_password_value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    }

    const formData = {
      user_email,
      user_password_value,
    };

    try {
      const response = await loginService.logIn(formData);
      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        if (data.data.user_token) {
          localStorage.setItem("user", JSON.stringify(data.data));
        }

        if (location.pathname === "/login") {
          window.location.replace("/checkout");
        } else {
          window.location.reload();
        }
      } else {
        setServerError(data.message);
      }
    } catch (err) {
      console.log(err)
      setServerError("An error has occurred. Please try again later." + err);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 transition-all duration-300 ease-in-out">
      <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {serverError && (
              <div className="mb-4 text-red-500" role="alert">
                {serverError}
              </div>
            )}
            <input
              type="email"
              name="user_email"
              value={user_email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
            />
            {emailError && (
              <div className="mb-4 text-red-500" role="alert">
                {emailError}
              </div>
            )}
          </div>

          <div>
            <input
              type="password"
              name="user_password_value"
              value={user_password_value}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="block w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
            />
            {passwordError && (
              <div className="mb-4 text-red-500" role="alert">
                {passwordError}
              </div>
            )}
          </div>

          <button
            className="w-full py-3 bg-[#A3AD6F] text-white rounded-md hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out transform hover:scale-105"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Need an account? 
          <Link to="/register" className="text-blue-500 hover:underline ml-1 transition duration-200 ease-in-out hover:text-blue-600">
            Click Register
          </Link>
        </p>
        <p className="mt-4 text-center">
        
          <Link to="/forgot-password" className="text-blue-500 hover:underline ml-1 transition duration-200 ease-in-out hover:text-blue-600">
            Forget Password 
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
