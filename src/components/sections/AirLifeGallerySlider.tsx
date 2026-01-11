import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import s1 from "@/assets/images/airforce/s1.jpg";
import s2 from "@/assets/images/airforce/s2.jpg";
import s4 from "@/assets/images/airforce/s4.jpg";
import s5 from "@/assets/images/airforce/s5.jpg";
import s6 from "@/assets/images/airforce/s6.jpg";
import s7 from "@/assets/images/airforce/s7.jpg";
import s8 from "@/assets/images/airforce/s8.jpg";
import s10 from "@/assets/images/airforce/s10.jpg";
import s11 from "@/assets/images/airforce/s11.jpg";
import s12 from "@/assets/images/airforce/s12.jpg";

import S1_Image from '@/assets/images/airforce/Image (16).jpg';
import S2_Image from '@/assets/images/airforce/Image (17).jpg';
import S3_Image from '@/assets/images/airforce/Image (18).jpg';
import S4_Image from '@/assets/images/airforce/Image (19).jpg';
import S6_Image from '@/assets/images/airforce/Image (21).jpg';
import S7_Image from '@/assets/images/airforce/Image (22).jpg';
import S8_Image from '@/assets/images/airforce/Image (23).jpg';
import S9_Image from '@/assets/images/airforce/Image (24).jpg';
import S10_Image from '@/assets/images/airforce/Image (25).jpg';
import S11_Image from '@/assets/images/airforce/Image (26).jpg';
import S12_Image from '@/assets/images/airforce/i2.jpg';
import S13_Image from '@/assets/images/airforce/i3.jpg';
import S14_Image from '@/assets/images/airforce/i4.jpg';


import s31 from "@/assets/images/airforce/airforce (1).jpeg";
import s32 from "@/assets/images/airforce/airforce (2).jpg";
import s33 from "@/assets/images/airforce/airforce (3).jpg";
import s34 from "@/assets/images/airforce/airforce (4).jpg";
import s35 from "@/assets/images/airforce/airforce (1).jpg";

const images = [ s32, s33,  s31, s34, s35, s1, s2,  s4, s5, s6, s7, s8, s10, s11, s12, S1_Image, S2_Image, S3_Image, S4_Image, S6_Image, S7_Image, S8_Image, S9_Image, S10_Image, S11_Image, S12_Image, S13_Image, S14_Image];

export default function AirLifeGallerySlider() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragStartPosition, setDragStartPosition] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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
        if (totalWidth === 0 || isPaused || isDragging) return;

        const interval = setInterval(() => {
            setScrollPosition((prev) => {
                const next = prev + 2;
                return next >= totalWidth ? 0 : next;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [totalWidth, isPaused, isDragging]);

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsPaused(true);
        setDragStartX(e.clientX);
        setDragStartPosition(scrollPosition);
        e.preventDefault();
    };

    // Global mouse events for smooth dragging
    useEffect(() => {
        if (!isDragging) return;

        const handleGlobalMouseMove = (e: MouseEvent) => {
            const startPos = dragStartPosition;
            const deltaX = dragStartX - e.clientX; // Inverted: dragging left scrolls right
            let newPosition = startPos + deltaX;
            
            // Handle wrapping for seamless infinite scroll
            while (newPosition < 0 && totalWidth > 0) {
                newPosition += totalWidth;
            }
            while (newPosition >= totalWidth && totalWidth > 0) {
                newPosition -= totalWidth;
            }
            
            setScrollPosition(newPosition);
        };

        const handleGlobalMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener("mousemove", handleGlobalMouseMove);
        window.addEventListener("mouseup", handleGlobalMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            window.removeEventListener("mouseup", handleGlobalMouseUp);
        };
    }, [isDragging, dragStartX, dragStartPosition, totalWidth]);

    return (
        <div className="w-full py-12">
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="mb-8 text-center">
                    <p className="text-sm uppercase tracking-widest mb-4">Gallery with air life images</p>
                    <h2 className="text-5xl md:text-6xl font-bold">Air Life</h2>
                </div>

                {/* Slider Container - Images side by side */}
                <div
                    ref={containerRef}
                    className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
                    onMouseEnter={() => {
                        if (!isDragging) setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                        if (!isDragging) setIsPaused(false);
                    }}
                    onMouseDown={handleMouseDown}
                >
                    <motion.div
                        ref={sliderRef}
                        className="flex"
                        animate={{
                            x: `-${scrollPosition}px`,
                        }}
                        transition={{
                            duration: isDragging ? 0 : 0.03,
                            ease: "linear",
                        }}
                        style={{
                            userSelect: "none",
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

