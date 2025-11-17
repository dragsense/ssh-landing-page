import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import S4_Image from '@/assets/images/airforce/PAF_F-86_Sabres_1965_War.jpg';
import S5_Image from '@/assets/images/airforce/Pakistani_Sherdil_Pilots_Planning_Pathankot_Airstrikes_(1965_War).jpg';
import S6_Image from '@/assets/images/airforce/SajadHaider1965.png';

const wars = [
    {
        title: "War of 1965",
        description: "Sajad Haider often lauded as the Saviour of Lahore and one of the key heroes of the 1965 War, led the Sherdils of No. 19 Squadron PAF as Squadron Leader.",
        image: S4_Image,
    },
    {
        title: "War of 1971",
        description: "Sajad led the Wing in notable contributions, with No. 5 Squadron PAF conducting successful strike missions in India's Amritsar, Pathankot, and the famous strike on Mukerian railway station.",
        image: S5_Image,
    },
    {
        title: "Early Career",
        description: "Sajad Haider's journey as a Flight Cadet in the Pakistan Air Force, showcasing his early dedication and training.",
        image: S6_Image,
    },
];

export function LifeAtTheAirforce() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % wars.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + wars.length) % wars.length);
    };

    // Get three slides to show (current, next, previous)
    const getVisibleSlides = () => {
        const slides = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + wars.length) % wars.length;
            slides.push({ ...wars[index], position: i });
        }
        return slides;
    };

    return (
        <div className="w-full py-10 md:py-20 px-4 overflow-visible">
            <div className="max-w-screen-2xl mx-auto overflow-visible">
                <div className="flex items-center justify-center gap-2 md:gap-4 overflow-visible">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="z-10 rounded-full border border-black dark:border-white p-2 md:p-3 shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                    </button>

                    {/* Slider - Shows 3 slides on desktop, 1 on mobile */}
                    <div className="flex-1 flex items-center justify-center gap-2 md:gap-6 overflow-visible">
                        {getVisibleSlides().map((war) => {
                            const isCenter = war.position === 0;
                            const isSide = Math.abs(war.position) === 1;
                            return (
                                <motion.div
                                    key={`${war.title}-${currentIndex}`}
                                    className={`flex-shrink-0 ${
                                        isCenter 
                                            ? "w-full max-w-[90%] md:w-[600px] h-[400px] md:h-[500px]" 
                                            : isSide
                                            ? "hidden md:block w-[150px] md:w-[250px] h-[350px] md:h-[450px]"
                                            : "hidden"
                                    }`}
                                    initial={{ 
                                        x: war.position * 100,
                                        opacity: 0.6,
                                        scale: 0.9,
                                    }}
                                    animate={{ 
                                        x: 0,
                                        opacity: isCenter ? 1 : 0.6,
                                        scale: isCenter ? 1 : 0.9,
                                    }}
                                    transition={{ 
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className={`relative h-full ${
                                        isCenter ? "rounded-lg" : "rounded-full  overflow-hidden"
                                    }`}>
                                        {/* Background Image - Square for center, capsule for sides */}
                                        <motion.div
                                            className="absolute inset-0"
                                            animate={{
                                                borderRadius: isCenter ? "0.5rem" : "9999px",
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <img
                                                src={war.image}
                                                alt={war.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>

                                        {/* Content - Only for center slide */}
                                        {isCenter && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* Capsule container with dark transparent background - Vertical */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="rounded-full bg-black/70 backdrop-blur-xs px-4 py-4 md:px-8 md:py-6 w-[85%] md:w-[300px] h-[120%]"
                                                >
                                                    <div className="flex flex-col items-center h-full justify-center text-center text-white">
                                                        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">{war.title}</h2>
                                                        <p className="text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">{war.description}</p>
                                                        <a
                                                            href="#"
                                                            className="px-4 py-1.5 md:px-6 md:py-2 bg-white text-black rounded-full text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="z-10 rounded-full border border-black dark:border-white p-2 md:p-3 shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                        aria-label="Next"
                    >
                        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

