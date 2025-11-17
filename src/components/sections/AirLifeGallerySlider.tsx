import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import s1 from "@/assets/images/airforce/s1.jpg";
import s2 from "@/assets/images/airforce/s2.jpg";
import s3 from "@/assets/images/airforce/s3.jpg";
import s4 from "@/assets/images/airforce/s4.jpg";
import s5 from "@/assets/images/airforce/s5.jpg";
import s6 from "@/assets/images/airforce/s6.jpg";
import s7 from "@/assets/images/airforce/s7.jpg";
import s8 from "@/assets/images/airforce/s8.jpg";
import s9 from "@/assets/images/airforce/s9.jpg";
import s10 from "@/assets/images/airforce/s10.jpg";
import s11 from "@/assets/images/airforce/s11.jpg";
import s12 from "@/assets/images/airforce/s12.jpg";

const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];

export default function AirLifeGallerySlider() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Duplicate images for seamless infinite scroll
    const duplicatedImages = [...images, ...images, ...images];

    useEffect(() => {
        const calculateWidth = () => {
            if (sliderRef.current) {
                let width = 0;
                for (let i = 0; i < images.length; i++) {
                    const child = sliderRef.current.children[i] as HTMLElement;
                    if (child) {
                        width += child.offsetWidth;
                    }
                }
                if (width > 0) {
                    setTotalWidth(width);
                }
            }
        };

        const timer = setTimeout(calculateWidth, 300);
        const imageLoadTimer = setTimeout(calculateWidth, 1000);
        window.addEventListener("resize", calculateWidth);

        return () => {
            clearTimeout(timer);
            clearTimeout(imageLoadTimer);
            window.removeEventListener("resize", calculateWidth);
        };
    }, []);

    useEffect(() => {
        if (totalWidth === 0 || isPaused) return;

        const interval = setInterval(() => {
            setScrollPosition((prev) => {
                const next = prev + 2;
                return next >= totalWidth ? 0 : next;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [totalWidth, isPaused]);

    return (
        <div className="w-full py-12">
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="mb-8 text-center">
                    <p className="text-sm uppercase tracking-widest mb-4">Gallery with air life images</p>
                    <h2 className="text-5xl md:text-6xl font-bold">Lorem ipsum</h2>
                </div>

                {/* Slider Container - Images side by side */}
                <div 
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div
                        ref={sliderRef}
                        className="flex"
                        animate={{
                            x: `-${scrollPosition}px`,
                        }}
                        transition={{
                            duration: 0.03,
                            ease: "linear",
                        }}
                    >
                        {duplicatedImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                            >
                                <div className="h-[350px] overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Air life image ${(index % images.length) + 1}`}
                                        className="h-full w-auto object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Timer/Progress Indicator */}
                <div className="mt-6 flex items-center justify-center">
                    <div className="relative h-1 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-black dark:bg-white"
                            animate={{
                                width: totalWidth > 0 ? `${(scrollPosition / totalWidth) * 100}%` : "0%",
                            }}
                            transition={{ duration: 0.03 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

