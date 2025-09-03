
import { motion } from "framer-motion";


import S1_Image from '@/assets/images/earlylife/Image (16).jpg';
import S2_Image from '@/assets/images/earlylife/Image (17).jpg';
import S3_Image from '@/assets/images/earlylife/Image (18).jpg';
import S4_Image from '@/assets/images/earlylife/Image (19).jpg';
import S5a_Image from '@/assets/images/earlylife/Image (21).jpg';

import S5_Image from "@/assets/images/s6.png";
import S6_Image from "@/assets/images/s4.png";

import S7_Image from '@/assets/images/earlylife/Image (22).jpg';
import S8_Image from '@/assets/images/earlylife/Image (23).jpg';
import S9_Image from '@/assets/images/earlylife/Image (24).jpg';
import S10_Image from '@/assets/images/earlylife/Image (25).jpg';
import S11_Image from '@/assets/images/earlylife/Image (26).jpg';
import S12_Image from '@/assets/images/earlylife/Image (31).jpg';
import S13_Image from '@/assets/images/earlylife/Image (2).jpg';
import S14_Image from '@/assets/images/earlylife/Image (3).jpg';
import S15_Image from '@/assets/images/earlylife/Image (5).jpg';


import { ThreeDMarquee } from "../ui/3d-marquee";
import { BackgroundGradient } from "../ui/background-gradient";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const images = [
    S1_Image,
    S2_Image,
    S3_Image,
    S4_Image,
    S5a_Image,
    S7_Image,
    S8_Image,
    S9_Image,
    S10_Image,
    S11_Image,
    S12_Image,
    S13_Image,
    S14_Image,
    S15_Image,
     S1_Image,
    S2_Image,
    S3_Image,
    S4_Image,
    S5a_Image,
    S6_Image,
    S7_Image,
    S8_Image,
    S9_Image,
    S10_Image,
    S11_Image,
    S12_Image,
    S13_Image,
    S14_Image,
    S15_Image,
     S1_Image,
    S2_Image,
    S3_Image,
    S4_Image,
    S6_Image,
    S7_Image,
    S8_Image,
    S9_Image,
    S10_Image,
    S11_Image,
    S12_Image,
    S13_Image,
    S14_Image,
    S15_Image


];

export default function EarlyLifePicsSection() {


    return (
        <>

            <div className="z-10">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                    EALRY LIFE ARCHIVE
                </h2>

                <div className="mx-auto my-10 rounded-3xl p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
                    <ThreeDMarquee images={images} />
                </div>

                <div className="mx-auto mt-10 md:mt-30 p-2 max-w-screen-md">
                    <div className="space-y-20">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-end gap-6"
                        >
                            <p className="flex-1">
                                His family initially lived in Bugti House before moving into a small tin-roofed home within a complex of eight houses built by Nawab Mehran Khan Bugti. Mehran, a friend of Sajad's father, gifted him two of the homes. Sajad grew up with Akbar Bugti and his siblings after moving in. He recalled Akbar as a "stunning and fearsome person" who always called him chapeit or scrawny boy. His younger brother, Ahmed Nawaz Bugti, would take Sajad with him every day for driving lessons.
                            </p>
                            <motion.img
                                src={S6_Image}
                                alt="S. Sajad Haider youth"
                                className="w-64 h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            />

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-end gap-6"
                        >
                            <motion.img
                                src={S5_Image}
                                alt="Young Haider in uniform"
                                className="w-64 h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            />
                            <p className="flex-1">
                                As a teenager, he aspired to follow in the footsteps of his hero, Quaid-e-Azam, who he saw at his old school in Quetta, sitting just six feet away, sparking the seed of his ambition to become a defender of Pakistan.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}