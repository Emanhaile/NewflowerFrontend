import React, { useState } from "react";
import { motion } from "framer-motion";
import Video1 from "../../../assets/images/Wedding and event/IMG_0866.mov";

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideoPlay = () => {
    const videoElement = document.getElementById("wedding-video");
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  overflow-hidden relative">
      {/* Video Background */}
      <div className="relative w-full h-[700px] rounded-xl shadow-2xl overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <video
            id="wedding-video"
            src={Video1}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center px-8 py-12">
        {/* Heading and Paragraph */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-shadow-lg">
            Elegant Weddings & Event Décor
          </h1>
          <p className="text-lg md:text-xl mb-8 text-shadow-lg">
            Transform your special day with breathtaking décor. Let us help
            create memories that last a lifetime. Our expertise in designing
            exceptional weddings and events ensures your day is as beautiful
            as you’ve always imagined.
          </p>
          
          {/* Interactive Button */}
          <motion.button
            className="px-8 py-4  text-white rounded-full text-xl font-semibold shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-600"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleVideoPlay}
          >
            {isPlaying ? "Pause Video" : "Play Video"}
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Parallax Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full "
        animate={{ y: [0, 30, 0] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default VideoPage;
