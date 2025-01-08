// util/auth.js
const decodeTokenPayload = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding the token payload:", error);
      return {};
    }
  };
  
  const getAuth = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.user_token) {
        const decodedToken = decodeTokenPayload(user.user_token);
  
        // Check if the token has expired
        if (
          decodedToken.exp &&
          decodedToken.exp < Math.floor(Date.now() / 1000)
        ) {
          console.warn("Token has expired");
          return {};
        }
  
        // Extract and assign token details
        user.user_role = decodedToken.user_role;
        user.user_id = decodedToken.user_id;
        user.user_firstName = decodedToken.user_firstName;
  
        return user;
      } else {
        return {};
      }
    } catch (error) {
      console.error("Error reading the authentication data:", error);
      return {};
    }
  };
  
  export default getAuth;
  