import React from 'react';
import { motion } from 'framer-motion';

function Decor() {
    return (
        <section className="bg-white py-16 lg:py-32">
            <div className="container mx-auto px-6 md:px-12">

                {/* Title Section with Framer Motion Fade-in */}
                <motion.h2
                    className="text-4xl font-extrabold text-center text-gray-800 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Our Wedding & Event Decor Services
                </motion.h2>

                {/* Main Decor Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {/* Elegant Wedding & Event Decor */}
                    <motion.div
                        className="flex flex-col items-center bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-200"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Elegant Wedding & Event Decor</h3>
                        <p className="text-center text-gray-600 mb-6">
                            Our elegant decor services transform any wedding or special event into an unforgettable experience. From luxurious floral installations to chic table settings, we specialize in creating refined and timeless environments.
                        </p>
                    </motion.div>

                    {/* Romantic Wedding & Event Decor */}
                    <motion.div
                        className="flex flex-col items-center bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-200"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Romantic Wedding & Event Decor</h3>
                        <p className="text-center text-gray-600 mb-6">
                            For weddings or romantic events, we curate soft lighting, delicate floral arrangements, and elegant drapery to create intimate and dreamy atmospheres. Our design enhances the emotions and mood of any celebration, from anniversaries to engagement parties.
                        </p>
                    </motion.div>
                </div>

                {/* Special Decor Section for Events & Weddings */}
                <motion.div
                    className="bg-gray-50 p-12 mt-20 rounded-xl shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {/* Classic Wedding & Event Decor */}
                        <motion.div
                            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-200"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Classic Wedding & Event Decor</h3>
                            <p className="text-center text-gray-600">
                                Our classic decor blends elegance and simplicity, perfect for both weddings and high-end corporate events. White roses, crystal chandeliers, and soft ivory linens provide a refined and timeless atmosphere that exudes sophistication.
                            </p>
                        </motion.div>

                        {/* Bohemian Wedding & Event Decor */}
                        <motion.div
                            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-200"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Bohemian Wedding & Event Decor</h3>
                            <p className="text-center text-gray-600">
                                Our bohemian-style decor embraces nature with earthy tones, lush greenery, and eclectic elements, creating a relaxed yet chic atmosphere. Perfect for outdoor weddings, garden parties, or any event looking for a free-spirited, natural vibe.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Corporate & Other Event Decor */}
                <motion.div
                    className="bg-gray-50 p-12 mt-20 rounded-xl shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {/* Corporate Event Decor */}
                        <motion.div
                            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-200"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Corporate Event Decor</h3>
                            <p className="text-center text-gray-600">
                                Transform your corporate event, conference, or gala with stylish and professional decor. Our designs include sleek modern elements, branded decorations, and sophisticated layouts to match your event's theme and objectives.
                            </p>
                        </motion.div>

                        {/* Celebration Event Decor */}
                        <motion.div
                            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-200"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Celebration Event Decor</h3>
                            <p className="text-center text-gray-600">
                                Whether it's a birthday party, anniversary, or other special celebration, our event decor will elevate your party atmosphere. We offer a wide range of themes, from whimsical to glamorous, to fit your personal style and occasion.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Decor;
