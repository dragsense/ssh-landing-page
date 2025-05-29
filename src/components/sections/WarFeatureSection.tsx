import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import S16_Image from '@/assets/images/s16.png'
import S17_Image from '@/assets/images/s17.png'

export default function WarFeatureSection() {

    return (
        <div className="min-h-screen">

            <div className="overflow-hidden pointer-events-none select-none">
                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="text-[3rem] font-bold opacity-5 dark:opacity-[0.03] whitespace-nowrap tracking-wider"
                >
                    <span className="text-black dark:text-white">
                        SAVIOUR OF LAHORE • NOSEY HAIDER • SAVIOUR OF LAHORE • NOSEY HAIDER • SAVIOUR OF LAHORE • NOSEY HAIDER
                    </span>
                </motion.div>
            </div>

            <div className="max-w-screen-lg mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className=""
                    >
                        <p className="font-normal mb-5">
                            Haider personally destroyed four Indian aircraft, 11 Indian tanks and damaged another three. The formation destroyed a total of 13 Indian aircraft including 2 MiG-21s. The following day, Haider led his pilots to Srinagar Air Force Station where they destroyed another three aircraft.
                        </p>
                        <p className="font-normal mb-10">
                            He was also an author, columnist, businessman, defence analyst, political commentator, and philanthropist.                    </p>
                        <BackgroundGradient className="rounded-lg overflow-hidden p-1 bg-white dark:bg-zinc-900">
                            <motion.img
                                src={S17_Image}
                                alt="S. Sajad Haider youth"
                                className="w-full h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            />
                        </BackgroundGradient>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className=""
                    >
                        <BackgroundGradient className="rounded-lg overflow-hidden p-1 flex-1 bg-white dark:bg-zinc-900 order-1 md:order-2">
                            <motion.img
                                src={S16_Image}
                                alt="Young Haider in uniform"
                                className="w-full h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            />
                        </BackgroundGradient>

                    </motion.div>
                </div>
            </div>

        </div>
    );
}