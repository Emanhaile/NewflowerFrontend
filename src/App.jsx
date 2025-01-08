import { useState } from 'react'
import Header from './Markup/Component/Header/Header'
import Aboutpage from './Markup/Pages/About/Aboutpage';
import { Routes,  Route } from 'react-router-dom';
import Footer from './Markup/Component/Footer/Footer';
import Home from './Markup/Pages/Home/Home';
import Shopepage from './Markup/Pages/ShopePage.jsx/Shopepage';
import Teamspage from './Markup/Pages/Teamspage/Teamspage';
import Servicepage from './Markup/Pages/Servicepage/Servicepage';
import Contactpage from './Markup/Pages/Contact/Contactpage';
import Blobus from './Markup/Component/Blobus/Blobus';
import Register from './Markup/Component/signup/Register';
import Loginpage from './Markup/Pages/Signuppage/Loginpage';
import AdminMenu21 from './Markup/Pages/EVENTBOOKING/AdminMenu21';
import PrivateAuthRoute from './util/PrivateAuthRoute';
import ViewEventId from './Markup/Pages/EVENTBOOKING/ViewEventId';
import AdminMenupage from './Markup/Pages/EVENTBOOKING/AdminMenupage';
import AdminUser from './Markup/Pages/EVENTBOOKING/AdminUser';
import EditUser from './Markup/Component/EditUser/EditUser';
import WeddingPlanningPage from './Markup/Component/Detailpage/WeddingPlanningPage';
import EventDecore from './Markup/Component/Detailpage/EventDecore';
import Term from './Markup/Component/Detailpage/Term';
import AdminComment from './Markup/Pages/EVENTBOOKING/AdminComent';
import CComment from './Markup/Pages/EVENTBOOKING/Ccomment';
import SuccessPage from './Markup/Component/Home/SuccessPage';
import Cancel from './Markup/Component/Home/Cancel';

import Rentalpayment from './Markup/Pages/Rentalpayment.jsx/Rentalpayment';


import AdminOrder from './Markup/Pages/EVENTBOOKING/Admin-Order';
import QrScanner from './Markup/Component/QRScanner';
import OrderConfirmationPage from './Markup/Component/Order';


import UnauthorizedPage from './Markup/Component/UnauthorizedPage/UnauthorizedPage';
import ForgotPassword from './Markup/Component/Password/ForgotPassword';
import ResetPassword from './Markup/Component/Password/ResetPassword';



function App() {
  

  return (
    <>
    <Header/>
   
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<Aboutpage />}/>
      <Route path="/Shope" element={<Shopepage />}/>
      <Route path="/Team" element={<Teamspage />}/>
      <Route path="/Service" element={<Servicepage/>}/>
<Route path="/contact" element={<Contactpage/>}/>
<Route path="/blog" element={<Blobus/>}/>

<Route path="/login" element={<Loginpage/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/weddingdecore" element={<WeddingPlanningPage/>}/>
<Route path="/admin/eventdecore" element={<EventDecore/>}/>
<Route path="/admin/term" element={<Term/>}/>
<Route path="/unauthorized" element={<UnauthorizedPage/>}/>
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password/:token" element={<ResetPassword />} />

{/* <Route path="/payment" element={<PaymentPage/>} /> */}

<Route
          path="/cancel"
          element={
            <PrivateAuthRoute roles={[1, 2,3, 4]}>
              <Cancel />
            </PrivateAuthRoute>
          }
        />

<Route
          path="/success"
          element={
            <PrivateAuthRoute roles={[1, 2,3, 4]}>
              <SuccessPage />
            </PrivateAuthRoute>
          }
        />
<Route
          path="/qrscanner"
          element={
            <PrivateAuthRoute roles={[1,2,3,4]}>
              <QrScanner />
            </PrivateAuthRoute>
          }
        />

<Route
          path="/customer/comment"
          element={
            <PrivateAuthRoute roles={[4]}>
              <AdminComment />
            </PrivateAuthRoute>
          }
        />
        {/* <Route path="/Success/:orderId" element={<SuccessPage />} /> */}

        

<Route
          path="/order/:orderId"
          element={
            <PrivateAuthRoute roles={[1, 2, 3,4]}>
              <OrderConfirmationPage />
            </PrivateAuthRoute>
          }
        />
<Route
          path="/admin/eventbooking"
          element={
            <PrivateAuthRoute roles={[1, 2, 3,4]}>
              <AdminMenu21 />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="admin/eventlist"
          element={
            <PrivateAuthRoute roles={[4]}>
              <AdminMenupage />
            </PrivateAuthRoute>
          }
        />
       <Route  path="/admin/viewevent/:user_id"
          element={
            <PrivateAuthRoute roles={[ 1,2, 3, 4]}>
              <ViewEventId/>
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/user"
          element={
            <PrivateAuthRoute roles={[4]}>
              <AdminUser />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/user/edit/:id"
          element={
            <PrivateAuthRoute roles={[4]}>
              <EditUser />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="checkout"
          element={
            <PrivateAuthRoute roles={[1, 2, 3,4]}>
              <Rentalpayment/>
            </PrivateAuthRoute>
          }
        />
         <Route
          path="/admin/Orders"
          element={
            <PrivateAuthRoute roles={[1, 4]}>
              <AdminOrder/>
            </PrivateAuthRoute>
          }
        />
    </Routes>
    
    
  <Footer/>
      
     
    </>
  )
}

export default App;