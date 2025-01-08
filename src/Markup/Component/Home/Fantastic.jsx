import React, { useState } from 'react';
import styles from './Fantastic.module.css';

const testimonials = [
  {
    name: "Alison & Mark Priston",
    location: "NYC",
    message: "The wedding was truly fantastic. Thank you for making our dream come true!",
    imgSrc: "images/testimonials-1-102x102.jpg"
  },
  {
    name: "Kelly & Brandon Walsh",
    location: "CA",
    message: "We were extremely excited, but everything was even more than we hoped for!",
    imgSrc: "images/testimonials-2-102x102.jpg"
  },
  {
    name: "Melissa & Ryan Smith",
    location: "TX",
    message: "The ceremony was amazing! We are grateful for the creative caring approach.",
    imgSrc: "images/testimonials-3-102x102.jpg"
  }
];

const Fantastic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.pageContentWrap}>
      <div className={styles.content}>
        <article className={styles.postItem}>
          <div className={styles.postContent}>
            <section className={styles.section}>
              <div className={styles.container}>
                <div className={styles.contentContainer}>
                  <div className={styles.columnContainer}>
                    <div className={styles.column}>
                      <div className={styles.wrapper}>
                        <div className={styles.testimonials}>
                          <div className={styles.sliderContainer}>
                            <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                              {testimonials.map((testimonial, index) => (
                                <div key={index} className={styles.slide}>
                                  <img className={styles.avatar} alt={testimonial.name} src={testimonial.imgSrc} />
                                  <div className={styles.testimonialContent}>
                                    <p>{testimonial.message}</p>
                                  </div>
                                  <div className={styles.testimonialAuthor}>
                                    <span className={styles.authorName}>{testimonial.name}, </span>
                                    <span className={styles.authorPosition}>{testimonial.location}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className={styles.sliderControlsWrap}>
                              <button className={styles.sliderPrev} onClick={handlePrev}>Prev</button>
                              <button className={styles.sliderNext} onClick={handleNext}>Next</button>
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
  );
};

export default Fantastic;
