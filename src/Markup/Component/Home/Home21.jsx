import React from 'react'
import Fullpackage from './Fullpackage'
import Weeding from './Weeding'
import WeedingDesign from './WeedingDesign'
import FreeDelivery from './FreeDelivery'
import Shope from './Shope'
import Inspiration from './Inspiration'
import Fantastic from './Fantastic'
import Blog from './Blog'
import SendRequest from './SendRequest'
import EventsPlans from './EventsPlans'
import TunedUpdate from './TunedUpdate'
import Cermony from './Cermony'
import Contact from './Contact'
import BannerCarousel from './Banner'
import Decor from '../Decoreevent/Decor'
import VideoPage from './VideoPage'
import Comments from '../Commentlist/CommentList'
import Customercomment from '../Commentlist/Customercomment'
import HomeAbout from './homeAbout'

const Home21 = () => {
  return (
    <div>
      <div class="page_content_wrap page_paddings_no">
                <div class="content">
                    <article class="post_item post_item_single page type-page">
                        <div class="post_content">
                          <BannerCarousel/>
                            <Fullpackage/>
                            <Weeding/>
                            {/* <VideoPage/> */}
                            {/* <Decor/> */}
                              {/* <WeedingDesign/> */}
                            {/* <Shope/> */}
                           
                            {/* <SendRequest/> */}
                            {/* <TunedUpdate/> */}
                            <HomeAbout/>
                            <VideoPage/>
                            <Customercomment/>
                            <Contact/>

                            </div>
                            </article>
                            </div>
                            </div>
    </div>
  )
}

export default Home21
