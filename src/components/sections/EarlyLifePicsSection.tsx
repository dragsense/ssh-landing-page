
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


import i7 from '@/assets/images/earlylife/early-life-quetta-1.jpg';
import i8 from '@/assets/images/earlylife/early-life-quetta-2.jpg';
import i10 from '@/assets/images/earlylife/early-life-quetta-4.jpg';
import i11 from '@/assets/images/earlylife/early-life-quetta-5.jpg';
import i12 from '@/assets/images/earlylife/family-memories-1.jpg';
import i13 from '@/assets/images/earlylife/family-memories-2.jpg';
import i14 from '@/assets/images/earlylife/family-memories-3.jpg';
import i15 from '@/assets/images/earlylife/family-memories-4.jpg';
import i16 from '@/assets/images/earlylife/family-memories-5.jpg';
import i17 from '@/assets/images/earlylife/family-memories-6.jpg';
import i18 from '@/assets/images/earlylife/family-memories-7.jpg';
import i19 from '@/assets/images/earlylife/family-memories-8.jpg';
import i20 from '@/assets/images/earlylife/family-memories-9.jpg';
import i21 from '@/assets/images/earlylife/early-life-1.jpeg';

import S16_Image from '@/assets/images/earlylife/early-life-inspiration.jpg';

import { ThreeDMarquee } from "../ui/3d-marquee";
import { BackgroundGradient } from "../ui/background-gradient";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

// Base images array - all images in order
const baseImages = [
    S16_Image,
    i21,
    i7,
    i8,
    i10,
    i11,
  
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i12,
    S16_Image,
    i7,
    i8,
];

// Repeat images to fill 4 columns evenly (16 images = 4 columns × 4 images)
// This ensures a balanced grid layout
const images = [...baseImages, ...baseImages.slice(0, 2)];

export default function EarlyLifePicsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get unique images (remove duplicates from baseImages)
    const uniqueImages = Array.from(new Set(baseImages));

    const handleOpenModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % uniqueImages.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + uniqueImages.length) % uniqueImages.length);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) {
                setIsModalOpen(false);
            }
        };

        const handleArrowKeys = (e: KeyboardEvent) => {
            if (!isModalOpen) return;
            
            if (e.key === "ArrowLeft") {
                setCurrentImageIndex((prev) => (prev - 1 + uniqueImages.length) % uniqueImages.length);
            } else if (e.key === "ArrowRight") {
                setCurrentImageIndex((prev) => (prev + 1) % uniqueImages.length);
            }
        };

        if (isModalOpen) {
            document.addEventListener("keydown", handleEscape);
            document.addEventListener("keydown", handleArrowKeys);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("keydown", handleArrowKeys);
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen, uniqueImages.length]);

    return (
        <>

            <div className="z-10">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                    EARLY LIFE ARCHIVE
                </h2>

                {/* Desktop: 3D Marquee */}
                <div className="hidden md:block mx-auto my-10 rounded-3xl p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
                    <ThreeDMarquee images={images} />
                </div>

                {/* Mobile: Responsive Grid */}
                <div className="md:hidden mx-auto my-10 p-4">
                    <div className="grid grid-cols-2 gap-4">
                        {uniqueImages.map((image, index) => (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`Early life memory ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => handleOpenModal(index)}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>

                {/* Image Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                            onClick={handleCloseModal}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="h-6 w-6" />
                                </button>

                                {/* Previous Button */}
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-8 w-8" />
                                </button>

                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-8 w-8" />
                                </button>

                                {/* Image */}
                                <motion.img
                                    key={currentImageIndex}
                                    src={uniqueImages[currentImageIndex]}
                                    alt={`Early life memory ${currentImageIndex + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    loading="eager"
                                />

                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                                    {currentImageIndex + 1} / {uniqueImages.length}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mx-auto mt-10 md:mt-30 p-2 max-w-screen-md hidden">
                    <div className="space-y-20">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-end gap-6"
                        >
                            <p className="flex-1">
                                His family initially lived in Bugti House before moving into a small tin-roofed home within a complex of eight houses built by Nawab Mehran Khan Bugti. Mehran, a friend of Sajad's father, gifted him two of the homes. Sajad grew up with Akbar Bugti and his siblings after moving in. He recalled Akbar as a "stunning and fearsome person" who always called him chapeit or scrawny boy. His younger brother, Ahmed Nawaz Bugti, would take Sajad with him every day for driving lessons.
                            </p>
                            <motion.img
                                src={i12}
                                alt="Sajad Haider in his youth during early life in Quetta"
                                className="w-64 h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                loading="lazy"
                            />

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-end gap-6"
                        >
                            <motion.img
                                src={S16_Image}
                                alt="Young Sajad Haider in Pakistan Air Force uniform - Early inspiration from Quaid-e-Azam"
                                className="w-64 h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                loading="lazy"
                            />
                            <p className="flex-1">
                                As a teenager, he aspired to follow in the footsteps of his hero, Quaid-e-Azam, who he saw at his old school in Quetta, sitting just six feet away, sparking the seed of his ambition to become a defender of Pakistan.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}