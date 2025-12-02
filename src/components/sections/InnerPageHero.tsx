import { motion } from "framer-motion";

import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";
import { TextRevealCard } from "../ui/text-reveal-card";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Spotlight } from "../ui/spotlight";

export default function InnerPageHero({ title, content, image }: { title: string, content: string, image: string }) {


    return (
        <div
            className="h-screen max-w-screen-xl mx-auto mt-10 md:mt-20 flex flex-col items-center justify-center overflow-hidden p-5"
        >
             <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-100"
        fill="white"
      />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18 items-center">
               
                {/* IMAGE SECTION - First on mobile, second on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="relative m-4 md:m-10 h-2/ order-1 md:order-2"
                >
                    <div className="absolute -top-8 -right-0 w-4/5 h-full border-2 border-primary/20 dark:border-white/30 rounded-tl-3xl rounded-tr-3xl rounded-bl-full z-0 dark:border-primary/10"></div>

                        <motion.img
                            src={image}
                            alt="EarlyLife"
                            className="relative z-10 rounded-xl w-auto h-80 md:h-120 shadow-2xl object-contain object-top"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        />


                </motion.div>

                {/* TEXT SECTION - Second on mobile, first on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6 md:space-y-8 flex-1 order-2 md:order-1"
                >
                    <TextRevealCard
                        text={title}
                        revealText="S. Sajad Haider"
                        className="p-0 border-none bg-transparent w-auto "
                        hoverClassName="bg-background"
                        revealTextClassName="text-dark dark:text-light"
                        textClassName="text-2xl text-dark dark:text-light"
                    />

                    <TextGenerateEffect
                        words={content}
                        className="text-sm md:text-md font-normal"
                    />

                </motion.div>
            </div>


        </div>
    );
}