
import { motion } from "framer-motion";


import i7 from '@/assets/images/earlylife/early-life-quetta-1.jpg';
import i8 from '@/assets/images/earlylife/early-life-quetta-2.jpg';
import i9 from '@/assets/images/earlylife/early-life-quetta-3.jpg';
import i10 from '@/assets/images/earlylife/early-life-quetta-4.jpg';
import i11 from '@/assets/images/earlylife/early-life-quetta-5.jpg';
import i12 from '@/assets/images/earlylife/family-memories-1.jpg';
import i13 from '@/assets/images/earlylife/family-memories-2.jpg';
import i14 from '@/assets/images/earlylife/family-memories-3.jpg';
import i15 from '@/assets/images/earlylife/family-memories-4.jpg';
import i16 from '@/assets/images/earlylife/family-memories-5.jpg';
import i17 from '@/assets/images/earlylife/family-memories-6.jpg';
import i18 from '@/assets/images/earlylife/family-memories-7.jpg';
import i19 from '@/assets/images/earlylife/family-memories-8.jpg';
import i20 from '@/assets/images/earlylife/family-memories-9.jpg';

import S16_Image from '@/assets/images/earlylife/early-life-inspiration.jpg';

import { ThreeDMarquee } from "../ui/3d-marquee";
import { BackgroundGradient } from "../ui/background-gradient";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const images = [
    S16_Image,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    
    i17,
    i18,
    i19,
    i20,
];

export default function EarlyLifePicsSection() {


    return (
        <>

            <div className="z-10">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                    EARLY LIFE ARCHIVE
                </h2>

                <div className="mx-auto my-10 rounded-3xl p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
                    <ThreeDMarquee images={images} />
                </div>

                <div className="mx-auto mt-10 md:mt-30 p-2 max-w-screen-md hidden">
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
                                src={i12}
                                alt="Sajad Haider in his youth during early life in Quetta"
                                className="w-64 h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                loading="lazy"
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
                                src={S16_Image}
                                alt="Young Sajad Haider in Pakistan Air Force uniform - Early inspiration from Quaid-e-Azam"
                                className="w-64 h-auto rounded-lg"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                loading="lazy"
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