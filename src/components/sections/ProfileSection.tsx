import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import BussinessmanImage from "@/assets/images/bussinessman.png";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function BusinessmanSection() {
  const descriptionText = `S. Sajad Haider successfully transitioned from military service to business ventures, demonstrating the same strategic thinking and leadership in entrepreneurship that he showed in the Pakistan Air Force. His business acumen complemented his military career, creating a unique legacy in both fields.`;

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-18  z-10">
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <TextRevealCard
            text="The Businessman"
            revealText="S. Sajad Haider"
            className="p-0 border-none bg-transparent w-auto"
              hoverClassName="dark:bg-black bg-accent"
              revealTextClassName="text-dark dark:text-light"
              textClassName="text-foreground font-semibold text-4xl"
          />

          <TextGenerateEffect 
            words={descriptionText}
            className="text-md font-normal"
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
             <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-accent text-black dark:text-white flex items-center space-x-2"
                  >
              <span className="mr-2">Explore Business Ventures</span>
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </HoverBorderGradient>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative -mb-10"
        >
          <div className="absolute -top-8 -left-8 w-5/6 h-full border-2 border-primary/20 dark:border-white/30 rounded-tl-3xl rounded-tr-3xl rounded-bl-full z-0 dark:border-primary/10"></div>
          
            <motion.img
              src={BussinessmanImage}
              alt="Businessman"
              className="relative z-10 rounded-xl w-full h-auto shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />

     
        </motion.div>
      </div>
      </div>
  );
}