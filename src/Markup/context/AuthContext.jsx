import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import getAuth from "../../util/Auth";

// Create a context object
const AuthContext = React.createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const value = { isLogged, isAdmin, user };

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const response = await getAuth();
        if (response && response.user_token) {
          setIsLogged(true);
          setUser(response);
          // Assuming `1` represents the admin role
          setIsAdmin(Number(response.user_role) === 1 ||Number(response.user_role)===2 || Number(response.user_role)===3 ||Number(response.user_role)===4 );
        } else {
          setIsLogged(false);
          setIsAdmin(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch authentication data:", error);
        setIsLogged(false);
        setIsAdmin(false);
        setUser(null);
      }
    };

    fetchAuthData();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Define prop types for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
