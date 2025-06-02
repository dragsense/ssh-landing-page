// AwardSlider.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Award1 from '@/assets/images/award-1.png';
import Award2 from '@/assets/images/award-2.png';
import Award3 from '@/assets/images/award-3.png';
import Award4 from '@/assets/images/award-4.png';
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const awards = [
  { label: "Golden Eagle", src: Award1 },
  { label: "Sitara-e-Jurrat", src: Award2 },
  { label: "Tamgha-e-Defence", src: Award3 },
  { label: "War Medal 1965", src: Award4 },
  { label: "Gallantry Award", src: Award1 },
  { label: "Service Medal", src: Award2 },
  { label: "Honor Badge", src: Award3 },
  { label: "Valor Star", src: Award4 },
];

export default function AwardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const itemsPerView = 6;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, awards.length - itemsPerView)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleAwards = awards.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-4xl font-bold text-left mb-10 relative z-10"
      >
        AWARDS

      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="flex items-end flex-col md:flex-row  gap-4 md:gap-8">
          <div className="flex gap-5">
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 rounded-full h-12 w-12 bg-black/10 hover:bg-primary/10"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 rounded-full h-12 w-12 bg-black/10 hover:bg-primary/10"
              onClick={nextSlide}
              disabled={currentIndex >= awards.length - itemsPerView}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.div>
            </Button>
          </div>
          <div
            ref={sliderRef}
            className="flex-1 overflow-hidden relative"
          >
            <motion.div
              className="flex gap-4 md:gap-8 transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(awards.length / itemsPerView) * 100}%`
              }}
            >
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index >= currentIndex && index < currentIndex + itemsPerView ? 1 : 0.3,
                    y: 0,
                    scale: index >= currentIndex && index < currentIndex + itemsPerView ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: index >= currentIndex && index < currentIndex + itemsPerView ? 1.1 : 0.9 }}
                  className={cn(
                    "flex flex-col items-center min-w-[calc(25%-1rem)] md:min-w-[calc(20%-2rem)] p-4 rounded-xl transition-all",
                    index >= currentIndex && index < currentIndex + itemsPerView
                      ? "bg-background/80 shadow-lg border border-primary/10 dark:border-white/10"
                      : "bg-muted/50"
                  )}
                >
                  <motion.img
                    src={award.src}
                    alt={award.label}
                    className="h-40 object-contain"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span
                    className="mt-2 text-sm text-center font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {award.label}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient edges for better UX */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>


        </div>
      </motion.div>
    </>
  );
}