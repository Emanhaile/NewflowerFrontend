import React from "react";
import Banner from "../Home/Banner";
import WeedingDesign from "../Home/WeedingDesign";
import Fantastic from "../Home/Fantastic";
import Blog from "../Home/Blog";
import SendRequest from "../Home/SendRequest";
import EventsPlans from "../Home/EventsPlans";
import TunedUpdate from "../Home/TunedUpdate";
import CustomerTestimonial from "../Commentlist/Customercomment";

const About = () => {
  return (
    <div>
      <div class="page_content_wrap page_paddings_no">
        <div class="content">
          <article class="post_item post_item_single page type-page">
            <div class="post_content">
              <Banner />
              <WeedingDesign />
              <CustomerTestimonial />
              <SendRequest />
              <TunedUpdate />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
