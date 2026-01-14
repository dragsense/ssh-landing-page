import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import sliderBackground from '@/assets/images/backgrounds/cormorant-background.png';
import carmorant_logo from '@/assets/logo/cormorant-logo.png';
import carmorant_logo_light from '@/assets/logo/cormorant-logo-light.png';
import image1 from '@/assets/business/cormorant-armored-vehicle-1.jpg';
import image2 from '@/assets/business/cormorant-armored-vehicle-2.jpg';
import image3 from '@/assets/business/cormorant-military-aircraft.jpg';
import image4 from '@/assets/business/cormorant-night-vision-equipment.jpg';
import image5 from '@/assets/business/cormorant-military-weapons.jpg';
import image6 from '@/assets/business/cormorant-teletype-equipment.jpg';
import image7 from '@/assets/business/cormorant-hummer-vehicle.jpeg';
import image8 from '@/assets/business/cormorant-bullet-assembly.jpeg';

type ImageItem = {
    title: string;
    desc: string;
    image: string;
    keywords?: string[];
};

type PreparedImage = ImageItem & {
    thumbnail: string;
};

export default function BusinessImageSlider() {
    const images = useMemo<PreparedImage[]>(() => {
        const list: ImageItem[] = [
            {
                title: "1980 - 1991",
                desc: "Representative around 80 of the to fortune 500 companies",
                image: image1,
                keywords: ["Armored Jeep"],
            },
            {
                title: "1980 - 1991",
                desc: "Representative around 80 of the to fortune 500 companies",
                image: image2,
                keywords: ["Armored Truck"],
            },
            {
                title: "1980 - 1991",
                desc: "Representative around 80 of the to fortune 500 companies",
                image: image3,
                keywords: ["Military Aircraft"],
            },
            {
                title: "1980 - 1991",
                desc: "Representative around 80 of the to fortune 500 companies",
                image: image8,
                keywords: ["Bullet Assembly"],
            },
            {
                title: "1980 - 1991",
                desc: "Representative around 80 of the to fortune 500 companies",
                image: image4,
                keywords: ["Night Vision Goggles"],
            },


            {
                title: "1980 - 1991",
                desc: "Representative around 80 of the to fortune 500 companies",
                image: image6,
                keywords: ["Teletype Equipment"],
            },
            {
                title: "1980 - 1991",
                desc: "Representative around 80 of the to fortune 500 companies",
                image: image7,
                keywords: ["H1 Hummer"],
            },
        ];

        return list.map((image) => ({
            ...image,
            thumbnail: image.image,
        }));
    }, []);

    const [visibleCount, setVisibleCount] = useState(3);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [viewingImageIndex, setViewingImageIndex] = useState<number | null>(null);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (typeof window === "undefined") return;
            if (window.innerWidth >= 1024) {
                setVisibleCount(3);
            } else if (window.innerWidth >= 640) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);

        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isImageModalOpen) {
                setIsImageModalOpen(false);
                setViewingImageIndex(null);
            }
        };

        if (isImageModalOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isImageModalOpen]);

    const preparedVisibleCount = Math.min(visibleCount, images.length);

    const visibleImages = useMemo(() => {
        return Array.from({ length: preparedVisibleCount }, (_, visibleIdx) => {
            const absoluteIndex = (sliderIndex + visibleIdx) % images.length;
            return { data: images[absoluteIndex], absoluteIndex, relativeIndex: visibleIdx };
        });
    }, [preparedVisibleCount, sliderIndex, images]);

    const activeImage = images[activeIndex];
    const featuredRelativeIndex = Math.floor(preparedVisibleCount / 2);

    const handleMove = (direction: "next" | "prev") => {
        setSliderIndex((prev) => {
            const nextIndex =
                direction === "next"
                    ? (prev + 1) % images.length
                    : (prev - 1 + images.length) % images.length;
            setActiveIndex(nextIndex);
            return nextIndex;
        });
    };

    const handleOpenImageModal = (imageIndex: number, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        setViewingImageIndex(imageIndex);
        setIsImageModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsImageModalOpen(false);
        setViewingImageIndex(null);
    };

    const handleModalNavigation = (direction: "next" | "prev") => {
        if (viewingImageIndex === null) return;
        const nextIndex =
            direction === "next"
                ? (viewingImageIndex + 1) % images.length
                : (viewingImageIndex - 1 + images.length) % images.length;
        setViewingImageIndex(nextIndex);
    };

    const viewingImage = viewingImageIndex !== null ? images[viewingImageIndex] : null;

    return (
        <div
            className="background-contain relative md:h-screen md:h-[90vh] px-4 pb-10 md:pb-24 flex flex-col justify-between"
            style={{
                backgroundImage: `url(${sliderBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}
        >

            <div></div>
            {/*    <div className="overflow-hidden pointer-events-none select-none mb-10 md:mb-1">
                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="sm:text-[5rem] text-[1rem] font-bold whitespace-nowrap tracking-wider"
                >
                    <span className="text-black dark:text-white">
                        SAVIOUR OF LAHORE • NOSEY HAIDER • SAVIOUR OF LAHORE • NOSEY HAIDER • SAVIOUR OF LAHORE • NOSEY HAIDER
                    </span>
                </motion.div>
            </div> */}

            {/* Mobile Simple Slideshow */}
            <div className="lg:hidden mx-auto w-full max-w-md md:px-4">
                <div className="space-y-6">
                    <p className="text-4xl font-semibold uppercase text-center">
                        <img
                            src={carmorant_logo}
                            alt="Cormorant Company Logo - Defense and Aviation Company founded by Sajad Haider"
                            className="w-64 dark:hidden"
                            loading="eager"
                        />

                        <img
                            src={carmorant_logo_light}
                            alt="Cormorant Company Logo - Defense and Aviation Company founded by Sajad Haider"
                            className="w-64 hidden dark:block"
                            loading="eager"
                        />
                    </p>
                    <p className="text-center">
                        Representative around 80 of the to fortune 500 companies
                    </p>

                    <div className="relative">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full aspect-video rounded-2xl overflow-hidden border shadow-lg cursor-pointer"
                            onClick={() => handleOpenImageModal(activeIndex)}
                        >
                            <img
                                src={activeImage.thumbnail}
                                alt={`${activeImage.title} - ${activeImage.desc} - Cormorant Company Defense Equipment`}
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        </motion.div>

                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => handleMove("prev")}
                                aria-label="Previous image"
                                className="rounded-full border border-black p-3 shadow"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <div className="flex-1 px-4 text-center">
                                <h3 className="text-lg font-semibold">1980 - 1991</h3>
                            </div>

                            <button
                                onClick={() => handleMove("next")}
                                aria-label="Next image"
                                className="rounded-full border border-black p-3 shadow"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block mx-auto max-w-screen-xl w-full">
                <div className="space-y-3">
                    <p className="text-6xl font-semibold uppercase">
                        <img
                            src={carmorant_logo}
                            alt="Cormorant Logo"
                            className="w-64 dark:hidden"
                        />
                       
                          <img
                                src={carmorant_logo_light}
                                alt="Cormorant Logo"
                                className="w-64 hidden dark:block"
                            /> 
                    </p>

                    <div className="space-y-4 w-70">
                        <h3 className="text-3xl font-semibold">
                            1980 - 1991
                        </h3>

                    </div>
                </div>

                <div className="mx-auto flex flex-col items-start justify-center gap-12 lg:flex-row">

                    <div className="w-50 mt-3">

                        <p>
                            Representative around 80 of the to fortune 500 companies
                        </p>
                    </div>

                    <div className="flex flex-1 flex-col sm:flex-row gap-6 items-end justify-end">
                        <div className="flex items-center gap-3 mr-10">
                            <button
                                onClick={() => handleMove("prev")}
                                aria-label="Previous images"
                                className="rounded-full border border-black p-3 shadow cursor-pointer"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => handleMove("next")}
                                aria-label="Next images"
                                className="rounded-full border border-black p-3 shadow cursor-pointer"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        <motion.div
                            layout
                            className="flex flex-col h-full flex-1 gap-4 sm:flex-row items-end  "
                        >
                            {visibleImages.map(({ data, absoluteIndex, relativeIndex }) => {
                                const isFeatured = relativeIndex === featuredRelativeIndex;
                                return (
                                    <div key={`wrapper-${data.image}-${absoluteIndex}`} className="relative flex-1 ">
                                        {/* Scanner Marker - only for featured image */}
                                        {isFeatured && (
                                            <motion.div
                                                key={`scanner-${absoluteIndex}`}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -top-45 right-2 transform hidden sm:flex items-start justify-center z-0 "
                                            >
                                                <div className="flex flex-col items-center relative ">
                                                    {/* Dot on top */}
                                                    <div className="w-3 h-3 rounded-full bg-black dark:bg-white relative">
                                                        {/* Scanner Box with single tag - positioned at top right of dot */}
                                                        {data.keywords && data.keywords.length > 0 && (
                                                            <div className="absolute left-full ml-2 top-1 bg-white dark:bg-background z-10">
                                                                <div className="relative p-2">
                                                                    {/* Scanner corner brackets */}
                                                                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white" />
                                                                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-black dark:border-white" />
                                                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-black dark:border-white" />
                                                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white" />

                                                                    {/* Single tag */}
                                                                    <div className="relative z-30 ">
                                                                        <span className="text-sm font-semibold text-black dark:text-white ">
                                                                            {data.keywords[0]}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Vertical Line - no gap */}
                                                    <div className="w-0.5 h-56 bg-black dark:bg-white" />
                                                </div>
                                            </motion.div>
                                        )}

                                        <motion.button
                                            layout
                                            whileHover={{ scale: 1.02 }}
                                            transition={{
                                                layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 20,
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpenImageModal(absoluteIndex, e);
                                            }}
                                            className={`group relative w-full overflow-hidden rounded-2xl border text-left shadow-sm transition-all cursor-pointer ${isFeatured
                                                ? "sm:h-42"
                                                : "sm:h-30"
                                                } h-42`}
                                        >
                                            <img
                                                src={data.thumbnail}
                                                alt={data.title}
                                                className={`h-full w-full object-cover`}
                                            />
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                        </motion.button>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {isImageModalOpen && viewingImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
                                aria-label="Close image"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Navigation buttons */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleModalNavigation("prev");
                                }}
                                className="absolute left-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleModalNavigation("next");
                                }}
                                className="absolute right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <img
                                    src={viewingImage.image}
                                    alt={`${viewingImage.title} - ${viewingImage.desc} - Cormorant Company Defense Equipment`}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                                <h3 className="mt-4 text-white text-xl font-semibold text-center">
                                    {viewingImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
