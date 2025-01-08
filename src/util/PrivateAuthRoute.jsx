import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import PropTypes from "prop-types"; // Import PropTypes
import getAuth from "./Auth";

const PrivateAuthRoute = ({ roles, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLogged, setIsLogged] = useState(false); // Fixed typo here
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Retrieve the logged-in user from local storage
        const response = await getAuth();
        
        if (response.user_token) {
          console.log(response);
          // If in here, that means the user is logged in
          setIsLogged(true);
          if (roles && roles.length > 0 && roles.includes(response.user_role)) {
            // If in here, that means the user is logged and has authorization to access the route
            setIsAuthorized(true);
          }
        }
      } catch (error) {
        console.error("Failed to authenticate", error);
      } finally {
        setIsChecked(true);
      }
    };

    checkAuth();
  }, [roles]);

  if (isChecked) {
    if (!isLogged) {return <Navigate to="/login" />;
    }
    if (!isAuthorized) {
      return <Navigate to="/unauthorized" />;
    }
  }

  return children;
};

// Define prop types for the component
PrivateAuthRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateAuthRoute;
