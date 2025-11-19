import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import S16_Image from '@/assets/images/s16.png'
import S17_Image from '@/assets/images/s17.png'

export default function WarFeatureSection() {

    return (


        <div className="max-w-screen-lg mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-between flex-col"
                >
                    <p className="font-normal mb-5">
                        His first take-off in a WW-II Harvard was a feeling he described as "euphoric, difficult to encapsulate in words." When his instructor uttered the magic words, "You have the controls," Haider described it as a dream come true. He experienced his first loop, and his first blackout. An "incredible feeling" overcame him: a sense of freedom and self-esteem. The course distinguished Risalpur history with an approximately 80% pass rate. On "The Big Day," receiving the pin of the flying wing was a moment wedged in memory.                    </p>
                    <motion.img
                        src={S17_Image}
                        alt="S. Sajad Haider youth"
                        className="w-full h-auto rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className=""
                >
                    <motion.img
                        src={S16_Image}
                        alt="Young Haider in uniform"
                        className="w-full h-auto rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />

                </motion.div>
            </div>
        </div>
    );
}