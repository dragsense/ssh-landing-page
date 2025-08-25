// components/BookHighlightSection.tsx
import React from "react";
import { Download, ArrowRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import DemoBook from "@/assets/images/demo-book.png";
import { GradientFillButton } from "../ui/gradient-fill-overlay";

export default function BookHighlightSection() {
  const titleWords = [
    { text: "Demolishing" },
    { text: "Myths" }
  ];

  const subtitleWords = [
    { text: "1965" },
    { text: "-" },
    { text: "1971", className: "text-red-500 dark:text-red-300" },
  ];

  const descriptionText = `Flight of the Falcon is about the spectacular episodes, trials and tribulations I had to face during my 28 years in the Pakistan Air Force.`;

  return (
    <div className="max-w-screen-lg mx-auto pb-20" >



      <div className="grid md:grid-cols-3 gap-8 items-center z-10">
        {/* Left Column - Title */}
        <div className="space-y-4 flex flex-col justify-between h-full">
          <h2 className="text-4xl  font-bold mb-4">
            Demolishing Myths of Indo Pak Wars 1965-1971
          </h2>
          <p className="text-sm mt-4 text-muted-foreground">
            Biography by <br />
            <span className="font-semibold text-foreground">S. Sajad Haider</span>
          </p>

        </div>

        {/* Center - Book Image with 3D effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -10 }}
          className="flex flex-col justify-center"
       
        >
       
          <img
            src={DemoBook}
            alt="Flight of the Falcon"
            className="w-auto md:w-72 rounded-lg shadow-xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className=""
          >
            
          </motion.div>
        </motion.div>

        {/* Right Column - Description */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <TextGenerateEffect
            words={descriptionText}
            className="text-sm font-semibold text-muted-background dark:text-muted-foreground"

          />
         


          <GradientFillButton className="font-semibold">

            <div className="flex gap-3 flex-wrap">
              <>
                <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Buy Now
              </>

            </div>

          </GradientFillButton>

        </div>
      </div>

      {/* Animated background text */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 -translate-y-1/2 text-[3rem] font-bold opacity-5 dark:opacity-[0.1] whitespace-nowrap tracking-wider -z-10 flex w-max"
      >
        <span className="text-black dark:text-white mr-12">
          BEST SELLING • HISTORICAL ACCOUNT • AIR COMBAT •
        </span>
        <span className="text-black dark:text-white">
          BEST SELLING • HISTORICAL ACCOUNT • AIR COMBAT •
        </span>
        <span className="text-black dark:text-white">
          BEST SELLING • HISTORICAL ACCOUNT • AIR COMBAT •
        </span>
      </motion.div>

    </div>
  );
}