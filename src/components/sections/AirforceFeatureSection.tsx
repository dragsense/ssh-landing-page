import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import S16_Image from '@/assets/images/ui/s16.png'
import S17_Image from '@/assets/images/ui/s17.png'

export default function AirforceFeatureSection() {

    return (


        <div className="max-w-screen-lg mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                >
                    <div className="mb-5 space-y-2">
                    <p className="font-normal">
                        His first take-off in a WW-II Harvard was a feeling he described as "euphoric, difficult to encapsulate in words." When his instructor uttered the magic words, "You have the controls," Haider described it as a dream come true. He experienced his first loop and his first blackout. An "incredible feeling" overcame him: a sense of freedom and self-esteem.
                    </p>
                    <p className="font-normal">
                        Despite the euphoria of the experience, the day concluded with a "desert safari"—a one-mile disciplinary walk in the blazing sun slinging a heavy parachute, a punishment earned at the "Finger Point" for Haider's habit of resting his elbow on the cockpit's canopy rail.

                    </p>
                    <p className="font-normal">
                        The course distinguished Risalpur history with an approximately 80% pass rate. On "The Big Day," receiving the pin of the flying wing was a moment wedged in memory.
                    </p>
                    </div>
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
                    <p className="font-normal mt-5">
                        Sajad’s fighter training was conducted on the dual Fury, and it was then that he had his first altercation and almost resigned. But his Squadron leader Ashraf Chaudhry tore up the resignation, saying, "Go, boy, and fly well, you will make a fine fighter pilot." He placed second in the conversion course, behind Sarfraz Rafiqui, a martyr of the 1965 war. He was then posted to No. 14 Fighter Bomber Squadron in Peshawar.

                    </p>

                </motion.div>
            </div>
        </div>
    );
}