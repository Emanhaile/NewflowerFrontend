import React from 'react'
import '../Home/home.css'
import { Link } from 'react-router-dom'

const Fullpackage = () => {
  return (
    <div className='fullpackage'>
      <section class="no-col-padding fullpackage">
                                <div class="container-fluid ">    
                                    <div class="content_container">
                                        <div class="columns_wrap">
                                            <div class="column_container column-1_1">
                                                <div class="column-inner">
                                                    <div class="m_wrapper">
                                                        <div  class="sc_call_to_action sc_call_to_action_accented sc_call_to_action_style_2 sc_call_to_action_align_center w100">
                                                            <div class="sc_call_to_action_info">
                                                                <h2 class="sc_call_to_action_title sc_item_title sc_item_title_without_descr">ORDER Full Package Plan &amp; Get -25% discount!</h2>
                                                            </div>
                                                            <div class="sc_call_to_action_buttons sc_item_buttons">
                                                                <div class="sc_call_to_action_button sc_item_button"><Link to="/shope" class="sc_button sc_button_square sc_button_style_filled sc_button_size_small call_to ">send request</Link></div>
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

export default Fullpackage
