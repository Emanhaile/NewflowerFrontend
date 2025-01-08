import { useAuth } from "../../context/AuthContext.jsx";
// Import the AddCustomerForm component
// Import the AdminMenu component

import Login from "../../Component/signup/Login.jsx";
import ContinuePaymentPage from "../../Component/Home/ContinuePaymentPage.jsx";




function Rentalpayment() {
  // Destructure the auth hook
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    
   
      return (
        
            
            <div className="">
              <ContinuePaymentPage/>
            </div>
          
        
      )
    
    }
   else {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Login />
        
      </div>
    );
  }
}

export default Rentalpayment;
