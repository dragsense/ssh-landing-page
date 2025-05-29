import { motion } from "framer-motion";

import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";
import { TextRevealCard } from "../ui/text-reveal-card";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Spotlight } from "../ui/spotlight";

export default function InnerPageHero({ title, content, image }: { title: string, content: string, image: string }) {


    return (
        <div
            className="min-h-screen max-w-screen-xl mx-auto mt-30 md:mt-20 flex flex-col items-center justify-center overflow-hidden p-5"
        >
             <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-100"
        fill="white"
      />
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-18 items-center">
               
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8 flex-1"
                >
                    <TextRevealCard
                        text={title}
                        revealText="S. Sajad Haider"
                        className="p-0 border-none bg-transparent w-auto"
                        hoverClassName="bg-background"
                        revealTextClassName="text-dark dark:text-light"
                        textClassName="text-2xl"
                    />

                    <TextGenerateEffect
                        words={content}
                        className="text-md font-normal"
                    />

                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="relative m-10"
                >
                    <div className="absolute -top-8 -right-8 w-5/6 h-full border-2 border-primary/20 dark:border-white/30 rounded-tl-3xl rounded-tr-3xl rounded-bl-full z-0 dark:border-primary/10"></div>

                    <BackgroundGradient className="rounded-2xl overflow-hidden p-1 bg-white dark:bg-zinc-900">
                        <motion.img
                            src={image}
                            alt="EarlyLife"
                            className="relative z-10 rounded-xl w-full h-auto shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        />
                    </BackgroundGradient>


                </motion.div>
            </div>


        </div>
    );
}