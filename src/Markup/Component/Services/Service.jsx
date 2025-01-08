import React from 'react';
import EventDecorAndPlanning from './EventDecorAndPlanning';
import RentalWeddingPlan from './RentalWeddingPlan';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/Wedding and event/IMG_0866.mov.jpg'

const Service = () => {
  return (
    <div className='bgroundcontact'>
      
      <body className="bgroundcontact">
        <div className="">
          <div className="">
            {/* Banner Section */}
            <div className="relative h-[700px] sm:h-[500px]">
              {/* Include banner image */}
              <img 
                src={image1} 
                alt="Banner" 
                className="w-full h-full object-cover"
              />
<h1 className="text-4xl sm:text-6xl  text-center text-white font-bold">Our Services</h1>
              
            </div>

            <div className="footer_wrap_inner widget_area_inner">
              <div className="content_wrap">
                <aside className="widget widget_socials">
                  <div className="widget_inner">
                    <div className="logo">
                      <a href="#"><img src="images/logo_2x.png" className="logo_main" alt=""/></a>
                    </div>
                    <div className="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
                      <div className="sc_socials_item"><a href="#" className="social_icons social_facebook"><span className="icon-facebook"></span></a></div>
                      <div className="sc_socials_item"><a href="#" className="social_icons social_twitter"><span className="icon-twitter"></span></a></div>
                      <div className="sc_socials_item"><a href="#" className="social_icons social_instagramm"><span className="icon-instagramm"></span></a></div>
                      <div className="sc_socials_item"><a href="#" className="social_icons social_gplus"><span className="icon-gplus"></span></a></div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <a href="#" className="scroll_to_top icon-up" title="Scroll to top"></a>
          </div>
        </div>
      </body>
      
      <EventDecorAndPlanning />
    </div>
  );
}

export default Service;
