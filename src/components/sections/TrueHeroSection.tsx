import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import S1_Image from '@/assets/images/ui/ui-section-1.png';
import S2_Image from '@/assets/images/ui/ui-section-2.png';
import S3_Image from '@/assets/images/ui/ui-section-3.png';
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { GradientFillButton } from "../ui/gradient-fill-overlay";


const heroDescription = `A Pakistani fighter pilot and former one-star rank officer in the Pakistan Air Force (PAF). He was best known for leading a devastating Blitzkrieg on the Pathankot airbase in India on 6 September during the Indo-Pakistani air war of 1965. `;

const achievementsText = `Haider personally destroyed four Indian aircraft, 11 Indian tanks and damaged another three. The formation destroyed a total of 13 Indian aircraft including 2 MiG-21s. The following day, Haider led his pilots to Srinagar Air Force Station where they destroyed another three aircraft.`;

export default function TrueHeroComponent() {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 lg:gap-20 items-start z-10">
      {/* Left Column */}
      <div className="flex flex-col gap-2 h-full">

        <div className="space-y-2 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <TextRevealCard
                text="A True Hero"
                revealText="S. Sajad Haider"
                className="p-0 border-none bg-transparent"
                hoverClassName="bg-background"
                revealTextClassName="text-dark dark:text-light shadow-none"
                textClassName="text-foreground font-semibold text-4xl"
              />
            </h2>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            <TextGenerateEffect words={heroDescription} className="text-md font-normal" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-2"
            >
              <a
                href="https://en.wikipedia.org/wiki/Sajad_Haider"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/70 hover:text-muted-foreground underline transition-colors inline-flex items-center gap-1"
              >
                <span>Source: Wikipedia</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="space-y-8 md:space-y-12 lg:space-y-20">
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
      <div className="space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-between">
        {/* Hero Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
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
          className="pt-4"
        >
          <h3 className="text-lg font-bold">Combat Achievements</h3>
          <TextGenerateEffect
            words={achievementsText}
            className="text-md font-normal"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-5"
        >

          <GradientFillButton className="font-semibold">
            <span className="mr-2"><a href="/airforce-life">Explore Full Story</a></span>
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </GradientFillButton>

        </motion.div>
      </div>
    </div>

  );
}