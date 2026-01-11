// AwardSlider.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Award1 from "@/assets/images/awards/220px-Sitara_-_i_-Jurat_.png";
import Award3 from "@/assets/images/awards/PAF_GoldenEagleAward.png";
import Award4 from "@/assets/images/awards/Tamgha-e-Diffa_Medal_Obverse.png";
import Award5 from "@/assets/images/awards/Sitara-e-Harb_1965_War_Ribbon.png";
import Award6 from "@/assets/images/awards/Sitara-e-Harb_1971_War.png";
import Award7 from "@/assets/images/awards/Tamgha-e-Jang 71.png";
import Award8 from "@/assets/images/awards/War_Medal_1965(Tamgha-e-Jang,_A.H.1385).png";

import { Button } from "../ui/button";

const awards = [
  { label: "Golden Eagle", src: Award3 },
  { label: "Sitara-e-Jurrat", src: Award1 },
  { label: "Tamgha-e-Diffa", src: Award4 },
  { label: "Sitara-e-Harb 65", src: Award5 },
  { label: "Sitara-e-Harb 71", src: Award6 },
  { label: "Tamgha-e-Jang 71", src: Award7 },
  { label: "Tamgha-e-Jang 65", src: Award8 },
  { label: "Golden Eagle", src: Award3 },
  { label: "Sitara-e-Jurrat", src: Award1 },
  { label: "Tamgha-e-Diffa", src: Award4 },
  { label: "Sitara-e-Harb 65", src: Award5 },
];

export default function AwardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const itemsPerView = isMobile ? 1 : 6;

  const nextSlide = () =>
    setCurrentIndex((i) =>
      Math.min(i + 1, awards.length - itemsPerView)
    );
  const prevSlide = () =>
    setCurrentIndex((i) => Math.max(i - 1, 0));

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
          {/* Scrollable slider */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-2 snap-x snap-mandatory">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[80%] snap-center bg-background/80 rounded-xl p-4"
              >
                <img
                  src={award.src}
                  alt={award.label}
                  className="h-40 object-contain mx-auto"
                />
                <p className="mt-3 text-center font-medium">{award.label}</p>
              </div>
            ))}
          </div>

          {/* Swipe indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span>← Swipe to see more awards →</span>
            </p>
          </div>
        </div>
      ) : (
        /* Desktop version */
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex items-end flex-col md:flex-row gap-4 md:gap-8">
            {/* Controls */}
            <div className="flex gap-5">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-12 w-12 bg-black/10 hover:bg-[#4e8f79]/50"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-12 w-12 bg-black/10 hover:bg-[#4e8f79]/50"
                onClick={nextSlide}
                disabled={currentIndex >= awards.length - itemsPerView}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Slider */}
            <div className="flex-1 overflow-hidden relative">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                  width: `${awards.length * (100 / itemsPerView)}%`,
                }}
              >
                {awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="flex flex-col items-center p-4 rounded-xl bg-background/80">
                      <img
                        src={award.src}
                        alt={award.label}
                        className="h-44 object-contain"
                      />
                      <span className="mt-2 text-sm font-medium">
                        {award.label}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Gradient edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
