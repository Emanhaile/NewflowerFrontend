import { useState } from "react";
import { motion } from "framer-motion";
import userService from "../Service/user.service";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye as Eye, AiOutlineEyeInvisible as EyeOff } from 'react-icons/ai';

function Register() {
  const [user_firstName, setFirstName] = useState("");
  const [user_lastName, setLastName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password_value, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { user } = useAuth();
  const loggedInUserToken = user?.token || "";
  const navigate = useNavigate();

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError(user_email ? (validateEmail(user_email) ? "" : "Invalid email format") : "Email is required");
    setPasswordError(user_password_value ? (validatePassword(user_password_value) ? "" : "Password must meet requirements") : "Password is required");
    setFirstNameError(user_firstName ? "" : "First name is required");
    setLastNameError(user_lastName ? "" : "Last name is required");
    setServerError(termsAccepted ? "" : "You must accept the terms and conditions");

    if (!user_email || !validateEmail(user_email) || !user_password_value || !validatePassword(user_password_value) || !user_firstName || !user_lastName || !termsAccepted) {
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    const formData = { user_firstName, user_lastName, user_email, user_password_value };

    try {
      const response = await userService.createUser(formData, loggedInUserToken);
      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("user", JSON.stringify(data.data));
        navigate("/login");
      } else {
        setServerError(data.message || "Failed to process request");
      }
    } catch (error) {
      setServerError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 transition-all duration-300 ease-in-out">
  <motion.div
    className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg transform transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <p className="text-xl font-semibold text-center text-blue-600 bg-yellow-100 p-4 rounded-lg shadow-lg">
      Create a New Account
    </p>

    {serverError && (
      <div className="mb-4 text-red-500" role="alert">
        {serverError}
      </div>
    )}

    <form onSubmit={handleSubmit}>
      {/* Email Input */}
      <div className="relative mb-4">
        <input
          type="email"
          name="user_email"
          value={user_email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
        />
        {emailError && (
          <div className="text-red-500 text-sm mt-2" role="alert">
            {emailError}
          </div>
        )}
      </div>

      {/* First Name Input */}
      <div className="relative mb-4">
        <input
          type="text"
          name="user_firstName"
          value={user_firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First Name"
          className="block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
        />
        {firstNameError && (
          <div className="text-red-500 text-sm mt-2" role="alert">
            {firstNameError}
          </div>
        )}
      </div>

      {/* Last Name Input */}
      <div className="relative mb-4">
        <input
          type="text"
          name="user_lastName"
          value={user_lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Last Name"
          className="block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
        />
        {lastNameError && (
          <div className="text-red-500 text-sm mt-2" role="alert">
            {lastNameError}
          </div>
        )}
      </div>

      {/* Password Input */}
      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="user_password_value"
          value={user_password_value}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {passwordError && (
          <div className="text-red-500 text-sm mt-2" role="alert">
            {passwordError}
          </div>
        )}
      </div>

      {/* Terms & Conditions Checkbox */}
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={() => setTermsAccepted(!termsAccepted)}
          className="mr-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700">
          I agree to the{" "}
          <Link to="/terms" className="text-blue-600">
            terms and conditions
          </Link>
        </label>
        {!termsAccepted && (
          <div className="text-red-500 text-sm mt-2">
            You must agree to the terms
          </div>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full py-3 bg-[#A3AD6F] text-white rounded-md border-2 border-[#A3AD6F] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
        disabled={loading || !termsAccepted}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {loading ? <span className="loader"></span> : "Register"}
      </motion.button>
    </form>

    <p className="mt-4 text-center">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-blue-500 hover:underline ml-1 transition duration-200 ease-in-out hover:text-blue-600"
      >
        Click here to login
      </Link>
    </p>
  </motion.div>
</section>

  );
}

export default Register;
