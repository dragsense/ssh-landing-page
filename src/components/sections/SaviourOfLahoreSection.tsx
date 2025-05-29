import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Minar_E_Pakistan_Image from "@/assets/images/mira-pakistan.png";
import { BackgroundLines } from "../ui/background-lines";

export default function SaviourOfLahoreSection() {
    const descriptionText = `Haider personally destroyed four Indian aircraft, 11 Indian tanks and damaged another three. The formation destroyed a total of 13 Indian aircraft including 2 MiG-21s. The following day, Haider led his pilots to Srinagar Air Force Station where they destroyed another three aircraft. `;
    const descriptionText2 = `He was also an author, columnist, businessman, defence analyst, political commentator, and philanthropist.`;

    return (
      

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-18 items-center z-10">

                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    <TextRevealCard
                        text="SAVIOUR OF LAHORE"
                        revealText="S. Sajad Haider"
                        className="p-0 border-none bg-transparent w-auto"
                        hoverClassName="bg-background"
                        revealTextClassName="text-dark dark:text-light"
                        textClassName="text-2xl"
                    />

                    <TextGenerateEffect
                        words={descriptionText}
                        className="text-md font-normal"
                    />

                    <TextGenerateEffect
                        words={descriptionText2}
                        className="text-md font-normal"
                    />


                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="relative"
                >
                    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

                    <motion.img
                        src={Minar_E_Pakistan_Image}
                        alt="Minar-E-Pakistan"
                        className="relative z-10  w-full"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />

 </BackgroundLines>
                </motion.div>
        </div>

       
    );
}