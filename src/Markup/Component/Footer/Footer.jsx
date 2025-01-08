import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#969f59]  py-8">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12">

        

        <div>
          <h3 className="text-xl font-bold mb-4">Contacts</h3>
          <p>Phone: + 1 (240) 507-2582</p>
          <p>Email: info@example.com</p>
          {/* <p>Address: 123 Main Street, City</p> */}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <Link to="https://web.facebook.com/people/Z-Event-Decor-Rental/100093331080269/" target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className=" text-2xl 
                            hover:text-gray-300" />
            </Link>
            
            <Link to="https://www.instagram.com/zdecore_/" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className=" text-2xl
                            hover:text-gray-300" />
            </Link>
            <Link to="https://www.tiktok.com/@zdecore15/" target="_blank"
              rel="noopener noreferrer">
              <FaTiktok className=" text-2xl
                            hover:text-gray-300" />
            </Link>
          
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold ">Services</h3>
          <ul>
            <li><Link to="/Shope" className="hover:underline">
              Rental Service</Link></li>
            <li><Link to="#" className="hover:underline">
              weding decore</Link></li>
            <li><Link to="#" className="hover:underline">
              Event decore</Link></li>
              <li><Link to="/admin/term" className="hover:underline">
              term and policy</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  )}
    export default Footer;