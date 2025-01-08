import React, { useState } from 'react';
import { useAuth } from "../../context/AuthContext"; 
 import loginServices from "../Service/login.service";
import { Link , useNavigate} from 'react-router-dom';
 import logo from '../../../assets/images/Eventdecore/LOGO21.gif';







const Header = () => {
   const [nav, setNav] = useState(false);
 const { isLogged, setIsLogged, user } = useAuth();
 const Navigate= useNavigate();
 

 const handleLogout = () => {
  window.location.href='/login'
 
  loginServices.logOut(); // Log out the user
  setIsLogged(false); 
 };
  
  return (
    <div>
       <header class="top_panel_wrap top_panel_style_2 scheme_original">
                <div class="top_panel_wrap_inner top_panel_inner_style_2 top_panel_position_above">
                    <div class="top_panel_middle">
                        <div class="content_wrap">
                        <div className="flex justify-between items-center">
      {/* Contact Phone */}
      

      {/* Logo Section */}
      
    </div>
                        </div>
                    </div>
                    <div className='header'>
                    <div class=" header flex justify-between max-w-[1400px] mx-auto ">
                    <li className='menu-item  list-none pt-5 '>  <Link to="/" className="list-none">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-24 h-24" 
          />
        </Link></li>
                        <div class="content_wrap clearfix header ">
                          
                            <nav class="menu_main_nav_area menu_hover_fade flex  justify-between mt-6">
                           
                            
                                <ul id="menu_main" class="menu_main_nav  max-[1200px] mt-6 ">
                             
                               
                                    <li class="menu-item  menu-item-has-children current-menu-ancestor">

                                        <Link to="/"><span className='textcolor text-lg'>Home</span></Link>
                                        
                                    </li>

                                    <li class="menu-item menu-item-has-children"><Link to="/about"><span className='textcolor text-lg'>About</span></Link>
                                       
                                            
                                    </li>
                                   
                                    <li class="menu-item"><Link to="/shope"><span className='textcolor text-lg'>Rental</span></Link></li>
                                    <li class="menu-item"><Link to="/service"><span className='textcolor text-lg'>Services</span></Link></li>
                                   
                                        
                                    
                                    
                                    <li class="menu-item"><Link to="/contact"><span className='textcolor text-lg '>Contacts</span></Link></li>
                                   
                                </ul>
                                
                               
                            </nav>
                          
                        </div>
                        {isLogged && user ? (
  <li className='menu-item pt-5 list-none textcolor mt-6'>
    <button
      onClick={handleLogout}
      className="text-lg font-semibold ml  no-underline py-2 px-4  textcolor rounded"
    >
      <span className='textcolor'>Logout</span>
    </button>
  </li>
) : (
  <li className='menu-item pt-5 list-none'>
    <button
      onClick={() => Navigate('/login')} // Assuming you are using useNavigate from react-router-dom
      className="text-lg   font-semibold  no-underline py-2 px-4  textcolor rounded"
    >
      <span className='textcolor'>Login</span>
    </button>
  </li>
)}
                    </div>
                    </div>
                    
                </div>
            </header>
            <div class="header_mobile">
                <div class="content_wrap">
                    <div class="menu_button icon-menu"></div>
                    <div class="logo">
                        <Link to="#"><img src={logo} class="logo_main" width={10} height={10} alt=""/></Link>
                    </div>
                   
                </div>
                <div class="side_wrap">
                    <div class="close">Close</div>
                    <div class="panel_top">
                        <nav class="menu_main_nav_area">
                            <ul id="menu_mobile" class="menu_main_nav bg-blue-500">
                                <li class="menu-item  current-menu-ancestor "><Link to="/"><span>Home</span></Link>
                                    
                                </li>
                                <li class="menu-item "><Link to="/about"><span>About</span></Link>
                                    
                                </li>
                                <li class="menu-item  "><Link to="/shope"><span>Rental</span></Link>
                                    
                                </li>
                                <li class="menu-item"><Link to="/services"><span>services</span></Link></li>
                                <li class="menu-item"><Link to="/contact"><span>contact</span></Link></li>
                                
                                    
                                
                                <li class="menu-item"><Link to="contacts.html"><span>Contacts</span></Link></li>
                                {isLogged && user ? (
              <li>
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className="text-xl font-semibold text-dark hover:text-black no-underline py-2"
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-xl font-semibold text-dark-800 hover:text-black no-underline py-2"
                >
                  Login
                </Link>
              </li>
      )}
                            </ul>
                        </nav>
                    </div>
                    
                </div>
                <div class="mask"></div>
            </div>
    </div>
  )
}

export default Header
