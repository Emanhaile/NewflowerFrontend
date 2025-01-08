import React from 'react'
import Contact from '../Home/Contact'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
import image1 from '../../../assets/images/Wedding and event/graduation-event.gif'

const Contactus = () => {
  return (
    <div className='bgroundcontact'>
       <div class="page_content_wrap page_paddings_no">
                <div class="content bgroundcontact">
                    <article class="post_item post_item_single page  ">
                        <div class="post_content">
                        <div class="top_panel_title title_present">
                        <div className="relative h-[700px] sm:h-[500px]">
              {/* Include banner image */}
              <img 
                src={image1} 
                alt="Banner" 
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 opacity-50"></div>
              <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
                <h1 className="text-4xl sm:text-6xl  text-white font-bold">Our Services</h1>
               
              </div>
            </div>
                
            </div>
            <div class="page_content_wrap page_paddings_no scheme_original">
                <div class="content">
                   {/* <!-- .post_item_single .page .type-page  --> */}
                    <article class="post_item_single page type-page">
                       {/* <!-- .post_content --> */}
                        <div class="post_content">
                          
                             <section class="no-col-padding">
                                <div class="content_wrap">
                                    <div class="columns_wrap">
                                        <div class="column_container column-1_1">
                                            <div class="column-inner">
                                                <div class="m_wrapper">
                                                    <div class="sc_section contact_block sc_section_block ">
                                                        <div class="sc_section_inner">
                                                            <div class="sc_section_overlay">
                                                                <div class="sc_section_content padding_on">
                                                                    <div class="sc_section_content_wrap">
                                                                        <div class="columns_wrap sc_columns columns_nofluid sc_columns_count_3">
                                                                            <div class="column-1_3 sc_column_item odd first sc-contacts-column-custom"><span class="sc_icon icon-icon4 sc_icon_shape_round sc-contacts-transform"></span>
                                                                                <h5 class="sc_title sc_title_regular sc_align_center sc-contacts-custom-h5">Address</h5>
                                                                                <div class="m_text_column m_content_element ">
                                                                                    <div class="m_wrapper">
                                                                                        <p>123 New Lenox,
                                                                                            <br /> Chicago, IL 60606</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-contacts-emptyspace" ></div>
                                                                            </div><div class="column-1_3 sc_column_item even sc-contacts-column-custom"><span class="sc_icon icon-icon5 sc_icon_shape_round sc-contacts-transform"></span>
                                                                                <h5 class="sc_title sc_title_regular sc_align_center sc-contacts-custom-h5">Phone</h5>
                                                                                <div class="m_text_column m_content_element ">
                                                                                    <div class="m_wrapper">
                                                                                        <p>(800)-456-7890</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-contacts-emptyspace"></div>
                                                                            </div><div class="column-1_3 sc_column_item odd sc-contacts-column-custom"><span class="sc_icon icon-icon6 sc_icon_shape_round sc-contacts-transform"></span>
                                                                                <h5 class="sc_title sc_title_regular sc_align_center sc-contacts-custom-h5">Email address</h5>
                                                                                <div class="m_text_column m_content_element ">
                                                                                    <div class="m_wrapper">
                                                                                        <p>info@yoursite.com</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-contacts-emptyspace"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>	
                            </section>
                            <section class="no-col-padding">
                               <Contact/>   
                            </section>                        
                        </div>
                      
                    </article>
                   
                </div>
                
            </div>
                            </div>
                            </article>
                            </div>
                            </div>
    </div>
  )
}

export default Contactus
