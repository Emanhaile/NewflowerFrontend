import React from 'react'
import Image1 from '../../../assets/images/eventdecore.jpg'
import  Image2 from '../../../assets/images/weddind decore2.jpg'
import Image3 from '../../../assets/images/weddind decore3.jpg'
import { Link } from 'react-router-dom'

const WeedingDesign = () => {
  return (
    <div>
      <div class="page_content_wrap page_paddings_no weedingdesign">
                <div class="content">
                    <article class="post_item post_item_single page type-page">
                        <div class="post_content">
                        <section class="no-col-padding">
                                <div class="container-fluid ">    
                                    <div class="content_container">
                                        <div class="columns_wrap">
                                            <div class="column_container column-1_1">
                                                <div class="column-inner">
                                                    <div class="m_wrapper">
                                                         <div class="columns_wrap sc_columns columns_nofluid sc_columns_count_9 sc_home-margin-type-a ">
                                                            <div class="column-5_9 sc_column_item  odd first span_5">
                                                                <h6 class="sc_title sc_title_regular margin_top_null sc_home-margin-type-b">about us</h6>
                                                                <h2 class="sc_title sc_title_iconed margin_top_tiny margin_bottom_null sc_home-margin-type-c fsz_cust">We Plan event decor &amp;  Weddings Design
                                                                That Capture the Imagination<span class="sc_title_icon sc_title_icon_bottom  sc_title_icon_small"><img src="images/vector-smart-object-copy-12.png" alt="" /></span></h2>
                                                                <div class="m_text_column m_content_element ">
                                                                    <div class="m_wrapper">
                                                                        <p>Weddings are significant events in people&#8217;s lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding planners are often used by couples who work long hours and have little spare time available for sourcing and managing wedding venues.</p>
                                                                    </div>
                                                                </div> 
                                                                <div className='flex justify-between'>
                                                                    <p><Link to="/weddingdecore" class="sc_button sc_button_square sc_button_style_filled sc_button_size_medium sc_home-margin-type-d">more about us</Link></p>
                                                                    <p><Link to="/admin/eventbooking" class="sc_button sc_button_square sc_button_style_filled sc_button_size_medium sc_home-margin-type-d">Book us Today</Link></p>
                                                                    </div></div><div class="column-4_9 sc_column_item even span_4">
                                                                <div class="cq-coverslider  navigation-overlay-right tinyshadow grapefruit " data-imagemaxheight="300" data-buttonbackground="" data-buttonhoverbackground="#222F46" data-contentbackground="" data-contentcolor="" data-arrowcolor="" data-arrowhovercolor="" data-delaytime="2">
                                                                    <div class="cq-coverslider-area btn-large square">
                                                                        <div class="cq-coverslider-cover">
                                                                            <div class="cq-coverslider-itemcontainer">
                                                                                <div class="cq-coverslider-imageitem"><img src={Image1} class="cq-coverslider-image" alt=""/></div>
                                                                               
                                                                            </div>
                                                                        </div>
                                                                        <div class="cq-coverslider-content">
                                                                            <div class="cq-coverslider-contentitem"></div>
                                                                            <div class="cq-coverslider-contentitem"></div>
                                                                            <div class="cq-coverslider-contentitem"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cq-coverslider-navigation btn-large">
                                                                        <div class="coverslider-navigation-prev"><i class="cq-coverslider-icon entypo-icon entypo-icon-left-open-big"></i></div><div class="coverslider-navigation-next"><i class="cq-coverslider-icon entypo-icon entypo-icon-right-open-big"></i></div>
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
                            </div>
                            </article>
                            </div>
                            </div>
    </div>
  )
}

export default WeedingDesign
