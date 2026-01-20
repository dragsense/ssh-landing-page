// AwardSlider.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Award1 from '@/assets/images/awards/sitara-e-jurat-medal.png';
import Award3 from '@/assets/images/awards/paf-golden-eagle-award.png';
import Award4 from '@/assets/images/awards/tamgha-e-diffa.png';
import Award5 from '@/assets/images/awards/sitara-e-harb-1965-ribbon.png';
import Award6 from '@/assets/images/awards/sitara-e-harb-1971.png';
import Award7 from '@/assets/images/awards/tamgha-e-jang-71.png';
import Award8 from '@/assets/images/awards/war-medal-1965-tamgha-e-jang.png';

import { Button } from "../ui/button";

const awards = [
  { label: "Golden Eagle", src: Award3 },
  { label: "Sitara-e-Jurrat", src: Award1 },
  { label: "Tamgha-e-Diffa", src: Award4 },
  { label: "Sitara-e-Harb 65", src: Award5 },
  { label: "Sitara-e-Harb 71", src: Award6 },
  { label: "Tamgha-e-Jang 71", src: Award7 },
  { label: "Tamgha-e-Jang 65", src: Award8 },
];

export default function AwardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const itemsPerView = isMobile ? 1 : 4;
  const gap = 24; // gap between items in pixels

  const nextSlide = () => {
    setCurrentIndex((i) => {
      const maxIndex = Math.max(0, awards.length - itemsPerView);
      return i >= maxIndex ? 0 : i + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((i) => {
      const maxIndex = Math.max(0, awards.length - itemsPerView);
      return i <= 0 ? maxIndex : i - 1;
    });
  };

  // Auto-play carousel
  useEffect(() => {
    if (isMobile || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isMobile, isHovered]);

  const itemWidth = isMobile ? 100 : `calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})`;

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-left mb-10 relative z-10"
      >
        AWARDS
      </motion.h2>

      {/* Mobile version */}
      {isMobile ? (
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto no-scrollbar px-2 snap-x snap-mandatory scroll-smooth">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex-shrink-0 w-[85%] snap-center flex flex-col items-center"
              >
                <motion.img
                  src={award.src}
                  alt={`${award.label} - Military Award Medal`}
                  className="h-48 object-contain"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.p 
                  className="mt-4 text-center font-semibold text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {award.label}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Swipe indicator */}
          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span>← Swipe to see more awards →</span>
            </p>
          </motion.div>
        </div>
      ) : (
        /* Desktop Carousel version */
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              {/* Navigation Controls - Left Side (Row) */}
              <div className="flex flex-row items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-14 w-14 bg-black/10 hover:bg-[#4e8f79]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={prevSlide}
                  aria-label="Previous award"
                >
                  <ChevronLeft className="h-7 w-7" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-14 w-14 bg-black/10 hover:bg-[#4e8f79]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={nextSlide}
                  aria-label="Next award"
                >
                  <ChevronRight className="h-7 w-7" />
                </Button>
              </div>

              {/* Carousel Container */}
              <div className="flex-1 relative overflow-hidden px-12">
                <motion.div
                  ref={carouselRef}
                  className="flex"
                  animate={{
                    x: `-${currentIndex * (100 / itemsPerView)}%`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    gap: `${gap}px`,
                  }}
                >
                  {awards.map((award, idx) => (
                    <motion.div
                      key={idx}
                      className="flex-shrink-0 flex flex-col items-center"
                      style={{ width: itemWidth }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -8,
                      }}
                    >
                      <motion.img
                        src={award.src}
                        alt={`${award.label} - Military Award Medal`}
                        className="h-48 object-contain"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span 
                        className="mt-2 text-sm font-semibold text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {award.label}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Gradient edges overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* Dots indicator - Bottom */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: Math.max(1, awards.length - itemsPerView + 1) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-[#4e8f79]"
                      : "w-2 bg-black/20 hover:bg-black/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
