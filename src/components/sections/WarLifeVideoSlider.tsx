import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import sliderBackground from "@/assets/images/war-life-slider-bg.png";
import youtube_icon from "@/assets/icons/youtube.png";

type VideoItem = {
    title: string;
    youtubeId: string;
    keywords?: string[];
};

type PreparedVideo = VideoItem & {
    thumbnail: string;
    link: string;
};

export default function WarLifeVideoSlider() {
    const videos = useMemo<PreparedVideo[]>(() => {
        const list: VideoItem[] = [
            {
                title: "Pathankot Strike – First-Person Briefing",
                youtubeId: "fR8Gx95Y6bs",
                keywords: ["1965 War", "Blitzkrieg", "Pathankot", "Air Strike"],
            },
            {
                title: "Air Combat Leadership Lessons",
                youtubeId: "MGp5LdSES74",
                keywords: ["Leadership", "Combat", "Discipline", "Courage"],
            },
            {
                title: "Life With No Margin For Error",
                youtubeId: "fR8Gx95Y6bs",
                keywords: ["Training", "Cadet", "Practice", "Excellence"],
            },
            {
                title: "Recounting Srinagar Air Field Mission",
                youtubeId: "MGp5LdSES74",
                keywords: ["Srinagar", "Mission", "Tactics", "Victory"],
            },
            {
                title: "Legacy, Mentorship & The Next Generation",
                youtubeId: "fR8Gx95Y6bs",
                keywords: ["Legacy", "Mentorship", "Future", "Inspiration"],
            },
        ];

        return list.map((video) => ({
            ...video,
            link: `https://www.youtube.com/watch?v=${video.youtubeId}`,
            thumbnail: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
        }));
    }, []);

    const [visibleCount, setVisibleCount] = useState(3);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

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
            if (e.key === "Escape" && isVideoModalOpen) {
                setIsVideoModalOpen(false);
                setPlayingVideoId(null);
            }
        };

        if (isVideoModalOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isVideoModalOpen]);

    const preparedVisibleCount = Math.min(visibleCount, videos.length);

    const visibleVideos = useMemo(() => {
        return Array.from({ length: preparedVisibleCount }, (_, visibleIdx) => {
            const absoluteIndex = (sliderIndex + visibleIdx) % videos.length;
            return { data: videos[absoluteIndex], absoluteIndex, relativeIndex: visibleIdx };
        });
    }, [preparedVisibleCount, sliderIndex, videos]);

    const activeVideo = videos[activeIndex];
    const featuredRelativeIndex = Math.floor(preparedVisibleCount / 2);

    const handleMove = (direction: "next" | "prev") => {
        setSliderIndex((prev) => {
            const nextIndex =
                direction === "next"
                    ? (prev + 1) % videos.length
                    : (prev - 1 + videos.length) % videos.length;
            setActiveIndex(nextIndex);
            return nextIndex;
        });
    };

    const handlePlayVideo = (videoId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setPlayingVideoId(videoId);
        setIsVideoModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsVideoModalOpen(false);
        setPlayingVideoId(null);
    };

    return (
        <div
            className="background-contain relative md:h-screen h-[80vh] px-4 pb-24 flex flex-col justify-between"
            style={{
                backgroundImage: `url(${sliderBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}
        >

            <div className="overflow-hidden pointer-events-none select-none ">
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
            </div>

            {/* Mobile Simple Slideshow */}
            <div className="lg:hidden mx-auto w-full max-w-md px-4">
                <div className="space-y-6">
                    <p className="text-4xl font-semibold uppercase text-center">Watch Now</p>
                    
                    <div className="relative">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full aspect-video rounded-2xl overflow-hidden border shadow-lg"
                        >
                            <img
                                src={activeVideo.thumbnail}
                                alt={activeVideo.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <button
                                onClick={(e) => handlePlayVideo(activeVideo.youtubeId, e)}
                                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-red-500 shadow hover:bg-red-500 hover:text-white transition duration-300">
                                    <Play className="h-6 w-6" />
                                </div>
                            </button>
                        </motion.div>
                        
                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => handleMove("prev")}
                                aria-label="Previous video"
                                className="rounded-full border border-black p-3 shadow"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            
                            <div className="flex-1 px-4 text-center">
                                <h3 className="text-lg font-semibold">{activeVideo.title}</h3>
                            </div>
                            
                            <button
                                onClick={() => handleMove("next")}
                                aria-label="Next video"
                                className="rounded-full border border-black p-3 shadow"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                        
                        <div className="flex flex-col items-center gap-3 mt-4">
                            <a
                                href={activeVideo.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block"
                            >
                                <img src={youtube_icon} alt="YouTube" className="h-8" />
                            </a>
                            <a
                                href={activeVideo.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium underline decoration-dotted text-center"
                            >
                                {activeVideo.link}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block mx-auto max-w-screen-2xl w-full">
                <div className="space-y-8">
                    <p className="text-6xl font-semibold uppercase">
                        Watch Now
                    </p>

                    <div className="h-12 flex items-center">
                        <motion.h3
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-3xl font-semibold"
                        >
                            {activeVideo.title}
                        </motion.h3>
                    </div>
                </div>

                <div className="mx-auto flex flex-col items-end justify-center gap-12 lg:flex-row">
                    <div className="space-y-4">
                        <a
                            href={activeVideo.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={youtube_icon} alt="YouTube" />
                        </a>
                        <a
                            href={activeVideo.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-sm font-medium underline decoration-dotted"
                        >
                            {activeVideo.link}
                        </a>
                    </div>

                    <div className="flex flex-1 flex-col sm:flex-row gap-6 items-end justify-end">
                        <div className="flex items-center justify-end gap-3">
                            <button
                                onClick={() => handleMove("prev")}
                                aria-label="Previous videos"
                                className="rounded-full border border-black p-3 shadow cursor-pointer"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => handleMove("next")}
                                aria-label="Next videos"
                                className="rounded-full border border-black p-3 shadow cursor-pointer"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        <motion.div
                            layout
                            className="flex flex-col h-full flex-1 gap-4 sm:flex-row items-end"
                        >
                            {visibleVideos.map(({ data, absoluteIndex, relativeIndex }) => {
                                const isFeatured = relativeIndex === featuredRelativeIndex;
                                return (
                                    <div key={`wrapper-${data.youtubeId}-${absoluteIndex}`} className="relative flex-1">
                                        {/* Scanner Marker - only for featured video */}
                                        {isFeatured && (
                                            <motion.div
                                                key={`scanner-${absoluteIndex}`}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -top-45 right-2 transform hidden sm:flex items-start justify-center -z-1"
                                            >
                                                <div className="flex flex-col items-center relative">
                                                    {/* Dot on top */}
                                                    <div className="w-3 h-3 rounded-full bg-black dark:bg-white relative">
                                                        {/* Scanner Box with single tag - positioned at top right of dot */}
                                                        {data.keywords && data.keywords.length > 0 && (
                                                            <div className="absolute left-full ml-2 top-1">
                                                                <div className="relative p-2">
                                                                    {/* Scanner corner brackets */}
                                                                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white" />
                                                                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-black dark:border-white" />
                                                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-black dark:border-white" />
                                                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white" />
                                                                    
                                                                    {/* Single tag */}
                                                                    <div className="relative z-10">
                                                                        <span className="text-sm font-semibold text-black dark:text-white">
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
                                            onClick={() => setActiveIndex(absoluteIndex)}
                                            className={`group relative w-full overflow-hidden rounded-2xl border text-left shadow-sm transition-all ${isFeatured
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
                                            <button
                                                onClick={(e) => handlePlayVideo(data.youtubeId, e)}
                                                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                                            >
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-red-500 shadow transition duration-300 hover:bg-red-500 hover:text-white">
                                                    <Play className="h-5 w-5" />
                                                </div>
                                            </button>
                                        </motion.button>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Video Modal */}
            <AnimatePresence>
                {isVideoModalOpen && playingVideoId && (
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
                                aria-label="Close video"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            
                            <div className="w-full aspect-video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
