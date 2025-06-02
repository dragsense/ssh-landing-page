import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import S1_Image from "@/assets/images/s1.png";
import S2_Image from "@/assets/images/s2.png";
import S3_Image from "@/assets/images/s3.png";
import { HoverBorderGradient } from "../ui/hover-border-gradient";


const heroDescription = `S. Sajad Haider, a legendary Pakistani fighter pilot and former one-star rank officer in the Pakistan Air Force (PAF). He led the devastating Blitzkrieg on Pathankot airbase during the 1965 Indo-Pakistani war, demonstrating exceptional courage and tactical brilliance.`;

const achievementsText = `Haider personally destroyed four Indian aircraft, 11 Indian tanks and damaged another three. His formation destroyed 13 Indian aircraft including 2 MiG-21s. The following day, he led his pilots to Srinagar Air Force Station where they destroyed another three aircraft.`;

export default function TrueHeroComponent() {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-30 items-start z-10 ">
      {/* Left Column */}
      <div className="flex flex-col gap-2 justify-between h-full">

        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TextRevealCard
              text="A True Hero"
              revealText="S. Sajad Haider"
              className="p-0 border-none bg-transparent"
              hoverClassName="bg-background"
              revealTextClassName="text-dark dark:text-light"
              textClassName="text-foreground font-semibold text-4xl"

            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            <TextGenerateEffect words={heroDescription} className="text-md font-normal" />
          </motion.div>
        </div>

   <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <motion.img
                src={S2_Image}
                alt="Pilots briefing"
                className="w-full h-auto rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
              <motion.img
                src={S3_Image}
                alt="Aircraft and crew"
                className="w-full h-auto rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
          </motion.div>
       </div>
      </div>



      {/* Right Column */}
      <div className="space-y-20">
        {/* Hero Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-2xl bg-primary/10 -z-10 blur-md"></div>
            <motion.img
              src={S1_Image}
              alt="Hero Portrait"
              className="w-full h-auto rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-primary">Combat Achievements</h3>
          <TextGenerateEffect
            words={achievementsText}
            className="text-md font-normal"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
           <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
         
            <span className="mr-2">Explore Full Story</span>
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </HoverBorderGradient>
        </motion.div>
      </div>
    </div>

  );
}