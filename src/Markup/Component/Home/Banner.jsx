import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image3 from '../../../assets/images/Wedding and event/graduation-event.gif';
import image2 from '../../../assets/images/Wedding and event/grandevent.jpg';
import image1 from '../../../assets/images/Wedding and event/IMG_0866.mov.jpg';
import VideoPage from './VideoPage';

const slides = [
  {
    type: "image", // Type of slide (image/video)
    content: image1,
    title: "We’ll Make Your Wedding<br />Perfect"
  },
  {
    type: "image",
    content: image2,
    title: "Gorgeous Flowers for Your<br />Special Event"
  },
  {
    type: "image",
    content: image3,
    title: "Gorgeous Flowers for Your<br />Special Event"
  },
  {
    type: "video", // This is a video slide
    content: <VideoPage />,
    title: "Watch Our Amazing Video"
  }
];

const BannerCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000} // Adjust interval for better experience
        transitionTime={700} // Increase transition speed for smoothness
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {/* If it's an image slide */}
            {slide.type === "image" ? (
              <>
                <img
                  src={slide.content}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
                <div
                  className="carousel-caption"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
              </>
            ) : (
              // If it's a video slide, render VideoPage component
              <div className="carousel-video">
                {slide.content}
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
