import React from 'react'
import image2 from '../../../assets/images/Wedding and event/graduation event.jpg';
import image1 from  '../../../assets/images/Wedding and event/event5.jpg'
import image3 from '../../../assets/images/Wedding and event/event10.jpg'
import { Link } from 'react-router-dom';

const Weeding = () => {
  return (
    <div>
        
       <section class="no-col-padding">
                                <div class="content_container">
                                    <div class="columns_wrap">
                                        <div class="column_container column-1_1">
                                            <div class="column-inner">
                                                 <div class="m_wrapper">
                                                   
                                                    <div class="sc_services_wrap">
                                                       
                                                        <div class="sc_services sc_services_style_services-1 sc_services_type_images margin_bottom_medium sc_home-param-type-a">
                                                            <h3 class="sc_services_title sc_item_title sc_item_title_without_descr">  <h6 class="sc_services_subtitle sc_item_subtitle">welcome to Our Services</h6></h3>
                                                            
                                                            <div class="sc_columns columns_wrap">
                                                                <div class="column-1_3 column_padding_bottom">
                                                                    <div class="sc_services_item odd first">
                                                                        <div class="sc_services_item_featured post_featured">
                                                                            <div class="post_thumb" data-image="" data-title="Bouquets &amp; Style">
                                                                                <Link class="hover_icon hover_icon_link" href="services-our.html"><img class="post-image" alt="img1.jpg" src={image2}/></Link>
                                                                            </div>
                                                                        </div>
                                                                        <div class="sc_services_item_content">
                                                                            <h4 class="sc_services_item_title"><Link to="admin/eventdecore">Event   &amp; Decore</Link></h4>
                                                                            <div class="sc_services_item_description"> <Link to="admin/eventdecore" class="sc_button sc_button_square sc_button_style_hovered sc_button_size_small">Read More</Link> </div>
                                                                        </div>
                                                                    </div>
                                                                </div><div class="column-1_3 column_padding_bottom">
                                                                    <div class="sc_services_item even">
                                                                        <div class="sc_services_item_featured post_featured">
                                                                            <div class="post_thumb" data-image="" data-title="Wedding Planning">
                                                                                <Link class="hover_icon hover_icon_link" href="shop.html"><img class="post-image" alt="img2.jpg" src={image1}/></Link>
                                                                            </div>
                                                                        </div>
                                                                        <div class="sc_services_item_content">
                                                                            <h4 class="sc_services_item_title"><Link to="/weddingdecore">Wedding Decore  </Link></h4>
                                                                            <div class="sc_services_item_description"> <Link to="/weddingdecore" class="sc_button sc_button_square sc_button_style_hovered sc_button_size_small">Read More</Link> </div>
                                                                        </div>
                                                                    </div>
                                                                </div><div class="column-1_3 column_padding_bottom">
                                                                    <div class="sc_services_item odd">
                                                                        <div class="sc_services_item_featured post_featured">
                                                                            <div class="post_thumb" data-image="" data-title="Catering &amp; Decoration">
                                                                                <Link class="hover_icon hover_icon_link" href="/shope"><img class="post-image" alt="img3.jpg" src={image3}/></Link>
                                                                            </div>
                                                                        </div>
                                                                        <div class="sc_services_item_content">
                                                                            <h4 class="sc_services_item_title"><Link to="/shope">Rental </Link></h4>
                                                                            <div class="sc_services_item_description"> <Link to="/shope" class="sc_button sc_button_square sc_button_style_hovered sc_button_size_small">Read More</Link> </div>
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
    </div>
  )
}

export default Weeding
